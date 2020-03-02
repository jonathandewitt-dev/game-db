import { IDBFunction } from '../../../db/mongo'
import { IRemoveCollectorDB } from './removeCollector'

const removeCollector: IDBFunction<IRemoveCollectorDB> = async (models, collectorId) =>
  models.Collector.findByIdAndDelete(collectorId)

export default removeCollector
