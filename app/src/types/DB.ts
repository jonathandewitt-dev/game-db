import Collector from './Collector'
import Game from './Game'
import Pagination from 'Pagination'

export default interface DB {
  getGamesForCollector(collectorID: number, pagination: Pagination): Promise<{
    collector: Collector
    games: Game[]
    pagination: Pagination
  }>
  getGame(id: number): Promise<Game>
  addGame(game: Game): Promise<Game>
}
