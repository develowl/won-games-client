import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { HighlightFragment } from 'graphql/fragments/highlight'

export const QUERY_UPCOMING = gql`
  ${GameFragment}
  ${HighlightFragment}

  query QueryUpcoming($today: Date!) {
    upcomingGames: games(
      where: { release_date_gt: $today }
      sort: "release_date:asc"
      limit: 8
    ) {
      ...GameFragment
    }

    showcase: home {
      upcomingGames {
        title
        highlight {
          ...HighlightFragment
        }
      }
    }
  }
`
