import Collector from './Collector'
import Game from './Game'

export default interface DB {
  getGamesForCollector(collectorID: number): Promise<{ collector: Collector, games: Game[] }>
  getGame(id: number): Promise<Game>
  addGame(game: Game): Promise<Game>
}
