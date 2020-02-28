import Collector from '../../../interfaces/Collector'

export interface IAddCollectorUI<T> {
  (collector: Collector): T
}

export interface IAddCollectorDB {
  (collector: Collector): Promise<Collector>
}

export default async <T>(ui: IAddCollectorUI<T>, db: IAddCollectorDB, collector: Collector): Promise<T> =>
  ui(await db(collector))
