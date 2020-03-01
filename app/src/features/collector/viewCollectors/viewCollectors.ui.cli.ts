import Collector from '../../../interfaces/Collector'
import Pagination from '../../../interfaces/Pagination'

export default ({
  collectors,
  pagination,
}: {
  collectors: Collector[]
  pagination: Pagination
}): string =>
  collectors.map(c => `${c.id}\t"${c.displayName}"\tCreated: ${c.createdDate}`)
    .concat([
      '',
      `Page limit: ${pagination.limit}`,
    ])
    .join('\n')
