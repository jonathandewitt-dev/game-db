import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export interface IViewGamesForCollectorUI<T> {
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

export interface IViewGamesForCollectorDB {
  (collectorID: Identifier, pagination: Pagination): Promise<{
    collector: Collector
    games: Game[]
    pagination: Pagination
  }>
}

export default async <T>(
  ui: IViewGamesForCollectorUI<T>,
  db: IViewGamesForCollectorDB,
  collectorId: Identifier,
  pagination: Pagination,
): Promise<T> =>
  ui(await db(collectorId, pagination))
