import { gql } from 'graphql-request'

const pairDayDatasByIdsQuery = gql`
  query pairDayDatasByIdsQuery($pairIds: [String]) {
    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {
      id
      date
      reserve0
      reserve1
      pairAddress {
        token0 {
          id
        }
        token1 {
          id
        }
      }
    }
  }
`
export default pairDayDatasByIdsQuery
