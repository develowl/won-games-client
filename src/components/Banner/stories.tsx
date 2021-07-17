import { Meta, Story } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'
import item from './mock'

export default {
  title: 'Banner',
  component: Banner,
  args: { ...item },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

Default.argTypes = {
  ribbon: {
    type: null
  },
  ribbonSize: {
    type: null
  },
  ribbonColor: {
    type: null
  }
}

export const WithRibbon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}

WithRibbon.argTypes = {
  ribbon: {
    type: 'string'
  }
}
