import { default as WonHeading } from 'components/Heading'
import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  height: 100vh;
`

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url('/img/auth-bg.jpg');
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
  `}
`

export const Heading = styled(WonHeading)`
  ${({ theme }) => css`
    font-size: 6rem !important;
    font-weight: ${theme.font.bold};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
