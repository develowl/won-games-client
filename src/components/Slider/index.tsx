import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import SlickSlider, { Settings } from 'react-slick'
import * as S from './styles'

export type SliderSettings = Settings

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const SlickArrowPrev = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <ArrowLeft aria-label={'previous games'} />
  </div>
)

export const SlickArrowNext = ({ currentSlide, slideCount, ...props }: any) => (
  <div {...props}>
    <ArrowRight aria-label={'next games'} />
  </div>
)

const Slider: ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings },
  ref
) => (
  <S.Wrapper>
    <SlickSlider {...settings} ref={ref}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)
