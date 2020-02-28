import Identifier from '../../../interfaces/Identifier'
import Collector from '../../../interfaces/Collector'

export interface IRemoveCollectorUI<T> {
  (collector: Collector): T
}

export interface IRemoveCollectorDB {
  (collectorId: Identifier): Promise<Collector>
}

export default async <T>(ui: IRemoveCollectorUI<T>, db: IRemoveCollectorDB, collectorId: Identifier): Promise<T> =>
  ui(await db(collectorId))
