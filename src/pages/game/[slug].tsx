import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGameBySlug'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryUpcoming,
  QueryUpcomingVariables
} from 'graphql/generated/QueryUpcoming'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_UPCOMING } from 'graphql/queries/upcoming'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Game, { GameTemplateProps } from 'templates/Game'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

const apolloClient = initializeApollo()

const Index = (props: GameTemplateProps) => {
  const router = useRouter()

  // se a rota nao tiver sido gerada ainda, pode mostrar loading, esqueleto...
  if (router.isFallback) return null

  return <Game {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    }
  })

  if (!data.games.length) {
    return {
      props: {
        notFound: true
      }
    }
  }

  const game = data.games[0]

  const {
    data: { recommended }
  } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  const {
    data: { upcomingGames, showcase }
  } = await apolloClient.query<QueryUpcoming, QueryUpcomingVariables>({
    query: QUERY_UPCOMING,
    variables: {
      today: new Date().toISOString().slice(0, 10)
    }
  })

  return {
    revalidate: 60,
    props: {
      cover: `http://localhost:1337${game.cover?.src}`,
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingTitle: showcase?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(showcase?.upcomingGames?.highlight),
      recommendedTitle: recommended?.section?.title,
      recommendedGames: gamesMapper(recommended?.section?.games)
    }
  }
}

export default Index
