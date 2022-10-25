import OrdersList, { OrdersListProps } from 'components/OrdersList'
import itemsMock from 'components/OrdersList/mock'
import { GetServerSideProps } from 'next'
import Profile from 'templates/Profile'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      items: itemsMock
    }
  }
}
