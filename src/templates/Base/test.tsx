import { screen } from '@testing-library/react'
import { mockComponent, renderWithTheme } from 'utils/tests/helpers'
import Base from '.'

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: mockComponent('Mock Menu')
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: mockComponent('Mock Footer')
}))

describe('<Base />', () => {
  it('should render menu, footer and children', () => {
    renderWithTheme(
      <Base>
        <h1>Heading</h1>
      </Base>
    )

    expect(screen.getByTestId(/mock menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock footer/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
