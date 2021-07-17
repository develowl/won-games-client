import { Meta, Story } from '@storybook/react/types-6-0'
import Footer from '.'

export default {
  title: 'Footer',
  component: Footer
} as Meta

export const Desktop: Story = () => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer />
  </div>
)
export const Mobile: Story = () => <Footer />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
