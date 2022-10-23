import { screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helpers'

import itemsMock from 'components/CartList/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

import Cart from '.'

const props = {
  items: itemsMock,
  total: 'R$ 460,00',
  cards: cardsMock,
  recommendedHighlight: highlightMock,
  recommendedGames: gamesMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock Base'}>{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock Showcase'}>{children}</div>
  }
}))

jest.mock('components/CartList', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock CartList'}>{children}</div>
  }
}))

jest.mock('components/PaymentOptions', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock PaymentOptions'}>{children}</div>
  }
}))

jest.mock('components/Empty', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid={'Mock Empty'}>{children}</div>
  }
}))

describe('<Cart />', () => {
  it('should render sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /my cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render empty section if there are no items', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
