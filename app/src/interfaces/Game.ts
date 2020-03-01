import Identifier from './Identifier'

export default interface Game {
  id?: Identifier
  title: string
  createdDate?: Date
}
