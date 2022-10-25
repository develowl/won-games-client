import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Profile />)

    expect(
      screen.getByRole('heading', { name: /Profile/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
