import { screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCardSlider from '.'
import items from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<GameCardSlider items={items} color={'black'} />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517'
    })
  })
})
