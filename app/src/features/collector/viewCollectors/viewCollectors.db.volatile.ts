import DBData from '../../../interfaces/DBData'
import Collector from '../../../interfaces/Collector'
import Pagination from '../../../interfaces/Pagination'

export default async (
  data: DBData,
  pagination: Pagination
): Promise<{
  collectors: Collector[]
  pagination: Pagination
}> => {
  const collectors = data.collectors.filter(
    c => c.id >= pagination.firstId && (pagination.lastId === undefined || c.id <= pagination.lastId)
  ).slice(0, pagination.limit)

  return Promise.resolve({
    collectors,
    pagination
  })
}
