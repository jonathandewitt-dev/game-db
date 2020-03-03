import { IDBFunction } from '../../../db/mongo'
import { IAddCollectorDB } from './addCollector'

const addCollector: IDBFunction<IAddCollectorDB> = async (models, collector) =>
  (await models.Collector.create(collector)).toObject()

export default addCollector
