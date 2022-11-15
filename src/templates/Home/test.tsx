import { screen } from '@testing-library/react'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import { mockComponent, renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

const props = {
  banners: bannerMock,
  newGamesTitle: 'New games',
  newGames: [gamesMock[0]],
  mostPopularGamesTitle: 'Most Popular',
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGamesTitle: 'Upcoming',
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free',
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: mockComponent('Mock Showcase')
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: mockComponent('Mock Banner Slider')
}))

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock banner slider/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(4)
  })
})
