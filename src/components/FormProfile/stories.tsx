import { Meta, Story } from '@storybook/react/types-6-0'
import FormProfile from '.'

export default {
  title: 'form/FormProfile',
  component: FormProfile
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: 860, margin: 'auto' }}>
    <FormProfile />
  </div>
)
