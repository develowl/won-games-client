import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_RECOMMENDED = gql`
  ${HighlightFragment}
  ${GameFragment}

  query QueryRecommended {
    recommended {
      section {
        title

        highlight {
          ...HighlightFragment
        }

        games {
          ...GameFragment
        }
      }
    }
  }
`
