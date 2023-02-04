import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import filterItemsMock from 'components/ExploreSidebar/mock'
import apolloCache from 'utils/apolloCache'
import { renderWithTheme } from 'utils/tests/helpers'

import Games from '.'
import { fetchMoreMock, gamesMock, noGamesMock } from './mock'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

describe('<Games />', () => {
  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={gamesMock} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[...gamesMock, ...fetchMoreMock]}
        cache={apolloCache}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/sample game/i)).toBeInTheDocument()
    userEvent.click(await screen.findByRole('button', { name: /show more/i }))
    expect(await screen.findByText(/fetch more game/i)).toBeInTheDocument()

    // screen.logTestingPlaygroundURL()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider
        mocks={[...gamesMock, ...fetchMoreMock]}
        cache={apolloCache}
      >
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={noGamesMock} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/We couldn't find any games with this filter/i)
    ).toBeInTheDocument()
  })
})
