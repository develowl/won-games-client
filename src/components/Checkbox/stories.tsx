import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: '',
    labelFor: '',
    labelColor: 'black'
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />
