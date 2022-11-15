import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'

export default function CartPage({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) {
  return (
    <Cart
      items={items}
      total={total}
      recommendedTitle={recommendedTitle}
      recommendedGames={recommendedGames}
      recommendedHighlight={recommendedHighlight}
      cards={cards}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      items: itemsMock,
      total: '$460.00',
      cards: cardsMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
