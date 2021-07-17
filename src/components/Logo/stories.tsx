import { Meta, Story } from '@storybook/react/types-6-0'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {
    color: 'black',
    size: 'normal',
    hideOnMobile: false
  }
} as Meta

export const Default: Story = (args) => <Logo {...args} />
