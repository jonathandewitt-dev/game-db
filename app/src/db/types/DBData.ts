import Collector from '../../domain/types/Collector'
import Game from '../../domain/types/Game'

export default interface DBData {
  collectors?: Collector[]
  games?: Game[]
}
