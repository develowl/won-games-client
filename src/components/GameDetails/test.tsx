import { renderWithTheme } from 'utils/tests/helpers'
import GameDetails from '.'

describe('<GameDetails />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<GameDetails platforms={[]} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
