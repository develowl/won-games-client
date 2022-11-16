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

  await apolloClient.query<QueryGames>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })
  return {
    props: {
      revalidate: 10,
      initialApolloState: apolloClient.cache.extract(),
      filterItems: filterItemsMock
    }
  }
}
