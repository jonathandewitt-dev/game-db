import { CollectorModel, paginateQuery } from '../../../db/mongo'
import Pagination from '../../../interfaces/Pagination'
import Collector from '../../../interfaces/Collector'

export default async (
  models: { Collector: CollectorModel },
  pagination: Pagination
): Promise<{
  collectors: Collector[]
  pagination: Pagination
}> => {
  const collectors = await paginateQuery(models.Collector, pagination).exec()
  return { collectors, pagination }
}
