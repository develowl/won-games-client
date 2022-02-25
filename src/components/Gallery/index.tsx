import {
  ArrowBackIos as ArrowLeft,
  ArrowForwardIos as ArrowRight
} from '@styled-icons/material-outlined'
import Slider, { SliderSettings } from 'components/Slider'
import * as S from './styles'

const settings: SliderSettings = {
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label={'next image'} />,
  prevArrow: <ArrowLeft aria-label={'previous image'} />
}

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  items: GalleryImageProps[]
}

const Gallery = ({ items }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item) => (
        <img
          key={`Thumb - ${item.src}`}
          role={'button'}
          src={item.src}
          alt={`Thumb - ${item.label}`}
        />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Gallery
