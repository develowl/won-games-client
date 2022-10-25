import { Meta, Story } from '@storybook/react/types-6-0'
import OrdersList, { OrdersListProps } from '.'
import ordersMock from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: ordersMock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 650, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
