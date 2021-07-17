import styled, { css } from 'styled-components'
import { RadioProps } from '.'

type LabelProps = Pick<RadioProps, 'labelColor'>

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 50%;
    background: transparent;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;

    &::before {
      content: '';
      background-color: ${theme.colors.primary};
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      position: absolute;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    color: ${theme.colors[labelColor!]};
    padding-left: ${theme.spacings.xxsmall};
    line-height: 1;
  `}
`
