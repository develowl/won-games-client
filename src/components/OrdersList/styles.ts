import * as GameItemStyles from 'components/GameItem/styles'
import styled from 'styled-components'

export const Wrapper = styled.div`
  ${GameItemStyles.Wrapper} {
    &:last-child {
      border-bottom: 0;
    }
  }
`
