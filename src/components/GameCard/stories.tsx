import { Meta, Story } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'
import item from './mock'

export default {
  title: 'GameCard',
  component: GameCard,
  args: { ...item, favorite: false },
  argTypes: {
    ribbon: {
      type: 'string'
    },
    promotionalPrice: {
      type: null
    },
    favorite: {
      type: 'boolean'
    },
    onFav: {
      action: 'clicked'
    }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
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

export const WithPromotionalPrice: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithPromotionalPrice.argTypes = {
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

WithPromotionalPrice.args = {
  promotionalPrice: 190.0
}

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: '20% OFF',
  ribbonSize: 'small',
  ribbonColor: 'primary'
}
