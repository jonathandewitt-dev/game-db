import Collector from '../types/Collector'
import Game from '../types/Game'
import Pagination from '../types/Pagination'

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
  (collectorID: number, pagination: Pagination): Promise<{
    collector: Collector
    games: Game[]
    pagination: Pagination
  }>
}

export default async <T>(
  ui: GamesForCollectorUI<T>,
  db: GetGamesForCollectorDB,
  collectorId: number,
  pagination: Pagination,
): Promise<T> =>
  ui(await db(collectorId, pagination))
