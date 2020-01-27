import Identifier from './Identifier'

export default interface Pagination {
  limit: number
  firstId?: Identifier
  lastId?: Identifier
}
