import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color={'black'} />
    <S.Content>
      <S.Column>
        <Heading
          color={'black'}
          size={'small'}
          lineColor={'secondary'}
          lineBottom
        >
          Contact Us
        </Heading>
        <a href={'mailto:fgyan94.dev@gmail.com'}>fgyan94.dev@gmail.com</a>
        <a href={' https://wa.me/5551980292957'}>+55 (51) 9 8029-2957</a>
      </S.Column>
      <S.Column>
        <Heading
          color={'black'}
          size={'small'}
          lineColor={'secondary'}
          lineBottom
        >
          Follow Us
        </Heading>
        <nav aria-labelledby={'social media'}>
          <a
            href={'https://www.instagram.com/yan05_/'}
            target={'_blank'}
            rel={'noopenner, noreferrer'}
          >
            Instagram
          </a>
          <a
            href={'https://twitter.com/twt_do_yan'}
            target={'_blank'}
            rel={'noopenner, noreferrer'}
          >
            Twitter
          </a>
          <a
            href={'https://www.instagram.com/yan05_/'}
            target={'_blank'}
            rel={'noopenner, noreferrer'}
          >
            YouTube
          </a>
          <a
            href={'https://www.facebook.com/facedoyangoncalves'}
            target={'_blank'}
            rel={'noopenner, noreferrer'}
          >
            Facebook
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading
          color={'black'}
          size={'small'}
          lineColor={'secondary'}
          lineBottom
        >
          Links
        </Heading>

        <nav aria-labelledby={'social media'}>
          <Link href={'/'}>Home</Link>
          <Link href={'/games'}>Store</Link>
          <Link href={'/search'}>Buscar</Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading
          color={'black'}
          size={'small'}
          lineColor={'secondary'}
          lineBottom
        >
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2021 © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
