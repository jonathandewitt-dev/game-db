import DB from '../types/DB'
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

export default async <T>(
  ui: GamesForCollectorUI<T>,
  db: DB,
  collectorId: number,
  pagination: Pagination,
): Promise<T> =>
  ui(await db.getGamesForCollector(collectorId, pagination))
