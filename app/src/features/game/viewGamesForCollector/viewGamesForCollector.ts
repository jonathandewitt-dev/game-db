import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

interface GamesForCollectorUI<T> {
  ({
    collector,
    games,
    pagination,
  }: {
    collector: Collector
    games: Game[]
    pagination: Pagination
  }): T
}

interface GetGamesForCollectorDB {
  (collectorID: Identifier, pagination: Pagination): Promise<{
    collector: Collector
    games: Game[]
    pagination: Pagination
  }>
}

export default async <T>(
  ui: GamesForCollectorUI<T>,
  db: GetGamesForCollectorDB,
  collectorId: Identifier,
  pagination: Pagination,
): Promise<T> =>
  ui(await db(collectorId, pagination))
