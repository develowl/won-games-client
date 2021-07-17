import { Meta, Story } from '@storybook/react/types-6-0'
import Menu, { MenuProps } from '.'

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    username: {
      type: 'string'
    }
  }
} as Meta

export const Mobile: Story<MenuProps> = (args) => <Menu {...args} />

Mobile.parameters = {
  backgrounds: {
    default: 'won-dark'
  },

  viewport: {
    defaultViewport: 'mobile1'
  },

  layout: 'fullscreen'
}

export const Desktop: Story<MenuProps> = (args) => <Menu {...args} />

Desktop.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}
