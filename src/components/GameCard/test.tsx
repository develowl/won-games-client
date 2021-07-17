import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import GameCard from '.'
import item from './mock'

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...item} />)

    expect(
      screen.getByRole('heading', { name: item.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: item.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: item.title })).toHaveAttribute(
      'src',
      item.img
    )
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render original price', () => {
    renderWithTheme(<GameCard {...item} />)
    const price = screen.getByText('R$ 235,00')

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render promotional price', () => {
    renderWithTheme(<GameCard {...item} promotionalPrice={'R$ 190,00'} />)
    const price = screen.getByText('R$ 235,00')
    const promotionalPrice = screen.getByText('R$ 190,00')

    expect(price).toHaveStyle({ textDecoration: 'line-through' })
    expect(promotionalPrice).not.toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render filled favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...item} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...item} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render with a Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...item}
        ribbon={'My Ribbon'}
        ribbonSize={'small'}
        ribbonColor={'secondary'}
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
