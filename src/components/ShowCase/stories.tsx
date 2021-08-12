import { Meta, Story } from '@storybook/react/types-6-0'
import gameMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import Showcase, { ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gameMock
}

export const WithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutTitle.args = {
  highlight: highlightMock,
  games: gameMock
}

WithoutTitle.argTypes = {
  title: {
    type: null
  }
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gameMock
}

WithoutHighlight.argTypes = {
  highlight: {
    type: null
  }
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock
}

WithoutGames.argTypes = {
  games: {
    type: null
  }
}
