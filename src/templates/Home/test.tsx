import { screen } from '@testing-library/react'
import bannerMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import Home from '.'

const props = {
  banners: bannerMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  upcomingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighlight: highlightMock
}

function MockFn(id: string) {
  return function Mock() {
    return <div data-testid={id}></div>
  }
}

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: MockFn('Mock Menu')
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: MockFn('Mock Footer')
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: MockFn('Mock Showcase')
}))

jest.mock('components/BannerSlider', () => ({
  __esModule: true,
  default: MockFn('Mock Banner Slider')
}))

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
    expect(screen.getAllByTestId(/mock showcase/i)).toHaveLength(5)
    expect(screen.getByTestId(/mock banner slider/i)).toBeInTheDocument()
  })
})
