import { CollectorModel } from '../../../db/mongo'
import Pagination from '../../../interfaces/Pagination'
import Collector from '../../../interfaces/Collector'

export default async (
  models: { Collector: CollectorModel },
  pagination: Pagination
): Promise<{
  collectors: Collector[]
  pagination: Pagination
}> => {
  // TODO: Update to use pagination
  const collectors = await models.Collector.find({}).exec()
  return { collectors, pagination }
}
