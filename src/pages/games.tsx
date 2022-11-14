import filterItemsMock from 'components/ExploreSidebar/mock'
import { QueryGames } from 'graphql/generated/QueryGames'
import { QUERY_GAMES } from 'graphql/queries/games'
import { GetStaticProps } from 'next'
import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import { initializeApollo } from 'utils/apollo'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })
  return {
    revalidate: 60,
    props: {
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}
