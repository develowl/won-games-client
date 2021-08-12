import { darken } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

// Pegar determinadas propriedades de determinado tipo
export type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>

// Pegar todas propriedades de determinado tipo, exceto...
// type WrapperProps = Omit<ButtonProps, 'children'>

type SizeProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,

  withIcon: (theme: DefaultTheme, { size }: SizeProps) => css`
    svg {
      width: ${size === 'small'
        ? '1.5rem'
        : size === 'medium'
        ? '2rem'
        : '2.5rem'};
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, minimal }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    size: ${size};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:hover {
      background: ${minimal
        ? 'none'
        : 'linear-gradient(180deg, #e35565 0%, #d958a6 50%)'};
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!hasIcon && wrapperModifiers.withIcon(theme, { size })}
    ${!!minimal && wrapperModifiers.minimal(theme)}
  `}
`
