import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export interface IViewGamesUI<T> {
  ({
    games,
    pagination,
  }: {
    games: Game[]
    pagination: Pagination
  }): T
}

export interface IViewGamesDB {
  (pagination: Pagination): Promise<{
    games: Game[]
    pagination: Pagination
  }>
}

export default async <T>(ui: IViewGamesUI<T>, db: IViewGamesDB, pagination: Pagination): Promise<T> =>
  ui(await db(pagination))
