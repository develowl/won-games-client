import { Meta, Story } from '@storybook/react/types-6-0'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from '.'
import items from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { items, color: 'white' },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider items={args} {...args} />
  </div>
)