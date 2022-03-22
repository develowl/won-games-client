import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { GetStaticProps } from 'next'
import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

const WishlistPage = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => {
  return (
    <Wishlist
      games={games}
      recommendedGames={recommendedGames}
      recommendedHighlight={recommendedHighlight}
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      // games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}

export default WishlistPage
