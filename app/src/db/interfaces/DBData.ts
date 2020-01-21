import Collector from '../../domain/interfaces/Collector'
import Game from '../../domain/interfaces/Game'

export default interface DBData {
  collectors?: Collector[]
  games?: Game[]
}
