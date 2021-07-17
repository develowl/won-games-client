import { Meta, Story } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.wick@gmail.com'
  },
  argTypes: {
    oninput: {
      action: 'changed'
    },
    icon: {
      type: null
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
