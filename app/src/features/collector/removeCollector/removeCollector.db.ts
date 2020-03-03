import { IDBFunction } from '../../../db/mongo'
import { IRemoveCollectorDB } from './removeCollector'

const removeCollector: IDBFunction<IRemoveCollectorDB> = async (models, collectorId) =>
  (await models.Collector.findByIdAndDelete(collectorId)).toObject()

export default removeCollector
