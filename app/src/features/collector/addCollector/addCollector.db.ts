import { IDBFunction } from '../../../db/mongo'
import { IAddCollectorDB } from './addCollector'

const addCollector: IDBFunction<IAddCollectorDB> = async (models, collector) =>
  models.Collector.create(collector)

export default addCollector
