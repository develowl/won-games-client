import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // separar o cache (keyArgs = ['where', 'sort'])
        games: concatPagination(['where', 'sort'])
      }
    }
  }
})
