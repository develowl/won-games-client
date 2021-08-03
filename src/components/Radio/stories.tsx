import { Meta, Story } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
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

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        id={'primeiro'}
        name={'radio'}
        label={'primeiro'}
        labelFor={'primeiro'}
        value={'primeiro'}
        defaultChecked
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        id={'segundo'}
        name={'radio'}
        label={'segundo'}
        labelFor={'segundo'}
        value={'segundo'}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        {...args}
        id={'terceiro'}
        name={'radio'}
        label={'terceiro'}
        labelFor={'terceiro'}
        value={'terceiro'}
      />
    </div>
  </>
)
