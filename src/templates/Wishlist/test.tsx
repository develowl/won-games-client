import { screen } from '@testing-library/react'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { mockComponent, renderWithTheme } from 'utils/tests/helpers'
import Wishlist from '.'

const props = {
  games: gamesMock,
  recommendedGames: gamesMock,
  recommendedTitle: 'You may like these games',
  recommendedHighlight: highlightMock
}

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: mockComponent('Mock Showcase')
}))

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/population zero/i)).toHaveLength(6)
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })

  it('should render empty when there are no games', () => {
    renderWithTheme(
      <Wishlist
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
