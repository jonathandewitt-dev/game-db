import Identifier from './Identifier'

export default interface Collector {
  id?: Identifier
  displayName: string
  games?: Identifier[]
}
