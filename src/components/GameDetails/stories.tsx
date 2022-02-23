import { Meta, Story } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'
import mockGame from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: mockGame,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['linux', 'mac', 'windows']
      }
    },
    releaseDate: {
      control: 'date'
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative', 'Action']
      }
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
)
