import Collector from './types/Collector'
import Game from './types/Game'
import DB from './types/DB'
import Pagination from './types/Pagination'

export default async (
  db: DB,
  collectorId: number,
  pagination: Pagination,
): Promise<{
  collector: Collector
  games: Game[]
  pagination: Pagination
}> =>
  db.getGamesForCollector(collectorId, pagination)
