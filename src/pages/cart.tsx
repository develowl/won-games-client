import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'
import { GetServerSideProps } from 'next'
import Cart, { CartProps } from 'templates/Cart'

export default function CartPage({
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
      recommendedGames={recommendedGames}
      recommendedHighlight={recommendedHighlight}
      cards={cards}
    />
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock,
      items: itemsMock,
      total: 'R$ 460,00',
      cards: cardsMock
    }
  }
}
