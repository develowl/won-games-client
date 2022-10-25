import { Meta, Story } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'Email',
    icon: <Email />,
    iconPosition: 'left',
    initialValue: '',
    placeholder: 'john.wick@gmail.com',
    disabled: false
  },
  argTypes: {
    onInput: {
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

export const WithError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

WithError.args = {
  error: 'Ops... Something wrong'
}
