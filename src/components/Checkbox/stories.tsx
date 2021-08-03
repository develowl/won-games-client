import { Meta, Story } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name={'Category'}
        label={'Action'}
        labelFor={'action'}
        isChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name={'Category'}
        label={'Adventure'}
        labelFor={'adventure'}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox
        {...args}
        name={'Category'}
        label={'Strategy'}
        labelFor={'strategy'}
      />
    </div>
  </>
)
