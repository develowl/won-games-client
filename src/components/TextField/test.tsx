import { Email } from '@styled-icons/material-outlined'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'
import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    renderWithTheme(
      <TextField label={'label'} labelFor={'field'} id={'field'} />
    )

    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('label')).not.toBeInTheDocument()
  })

  it('should render with placeholder', () => {
    renderWithTheme(<TextField placeholder={'hey you'} />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', () => {
    renderWithTheme(
      <TextField label="TextField" labelFor="TextField" id="TextField" />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('should render with an icon', () => {
    renderWithTheme(
      <TextField
        label={'TextField'}
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid={'icon'} />}
      />
    )

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render with an icon to the left by default', () => {
    renderWithTheme(
      <TextField
        label={'TextField'}
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid={'icon'} />}
      />
    )

    expect(
      screen.getByTestId(/icon/i).parentElement?.parentElement
    ).toHaveStyle({
      flexDirection: 'row'
    })
  })

  it('should render with an icon to the right', () => {
    renderWithTheme(
      <TextField
        label={'TextField'}
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid={'icon'} />}
        iconPosition={'right'}
      />
    )

    expect(
      screen.getByTestId(/icon/i).parentElement?.parentElement
    ).toHaveStyle({
      flexDirection: 'row-reverse'
    })
  })

  it('should not change its value when disabled', async () => {
    const onInput = jest.fn()
    renderWithTheme(
      <TextField
        label={'TextField'}
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid={'icon'} />}
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('should not be accessible by tab when is disabled', () => {
    renderWithTheme(
      <TextField
        label={'TextField'}
        labelFor="TextField"
        id="TextField"
        icon={<Email data-testid={'icon'} />}
        disabled
      />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should render with an error', () => {
    const { container } = renderWithTheme(
      <TextField
        icon={<Email data-testid={'icon'} />}
        label={'TextField'}
        labelFor={'TextField'}
        error={'Error message'}
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
