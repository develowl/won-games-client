import { Meta, Story } from '@storybook/react/types-6-0'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

export default {
  title: 'Slider',
  component: Slider
} as Meta

const horizontalSettings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: Story = () => (
  <Slider settings={horizontalSettings}>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <Slide key={i}>{i + 1}</Slide>
    ))}
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false,
  slidesToShow: 1
}

export const Vertical: Story = () => (
  <Slider settings={verticalSettings}>
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <Slide key={i}>{i + 1}</Slide>
    ))}
  </Slider>
)
