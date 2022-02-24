import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import TextContent from '.'
import textMock from './mock'

describe('<TextContent />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<TextContent {...textMock} />)

    expect(
      screen.getByRole('heading', { name: /TextContent/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
