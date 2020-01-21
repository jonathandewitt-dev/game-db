import Collector from './Collector'
import Game from './Game'

export default interface DBData {
  collectors?: Collector[]
  games?: Game[]
}
