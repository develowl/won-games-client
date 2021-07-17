import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render without label by default', () => {
    renderWithTheme(<Checkbox />)

    // input a partir do papel (role)
    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with label', () => {
    renderWithTheme(<Checkbox label={'checkbox label'} labelFor={'check'} />)

    // input a partir do papel (role)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()

    // input a partir da label associada
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()

    // label a partir do texto dela
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should render with black label', () => {
    renderWithTheme(
      <Checkbox
        label={'checkbox label'}
        labelFor={'check'}
        labelColor={'black'}
      />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render with white label', () => {
    renderWithTheme(
      <Checkbox
        label={'checkbox label'}
        labelFor={'check'}
        labelColor={'white'}
      />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Checkbox label={'Cehckbox'} onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor
  })
})
