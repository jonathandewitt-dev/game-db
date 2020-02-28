import Collector from '../../../interfaces/Collector'
import Pagination from '../../../interfaces/Pagination'

export interface IViewCollectorsUI<T> {
  ({
    collectors,
    pagination,
  }: {
    collectors: Collector[]
    pagination: Pagination
  }): T
}

export interface IViewCollectorsDB {
  (pagination: Pagination): Promise<{
    collectors: Collector[]
    pagination: Pagination
  }>
}

export default async <T>(ui: IViewCollectorsUI<T>, db: IViewCollectorsDB, pagination: Pagination): Promise<T> =>
  ui(await db(pagination))
