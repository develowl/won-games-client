import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    size: 'medium',
    fullWidth: false,
    minimal: false
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: null
    },
    as: {
      type: null
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />

WithIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const AsLink: Story<ButtonProps> = (args) => (
  <Button as={'a'} {...args} />
)

AsLink.args = {
  size: 'large',
  children: 'Buy now',
  href: '/#'
}
