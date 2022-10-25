import CardsList, { CardsListProps } from 'components/CardsList'
import cardsMock from 'components/PaymentOptions/mock'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

export default function Orders({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      cards: cardsMock
    }
  }
}
