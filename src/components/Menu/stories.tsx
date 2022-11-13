import { Meta, Story } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    username: {
      type: 'string'
    }
  }
} as Meta

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  },

  layout: 'fullscreen'
}

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />

export const Logged: Story<MenuProps> = (args) => <Menu {...args} />
Logged.args = {
  username: 'username'
}
