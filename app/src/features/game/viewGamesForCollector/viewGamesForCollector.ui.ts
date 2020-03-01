import Collector from '../../../interfaces/Collector'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default ({
  collector,
  games,
  pagination,
}: {
  collector: Collector
  games: Game[]
  pagination: Pagination
}): string => {
  const lines = [
    `Collector: ${collector.displayName} (${collector.id})\tCreated: ${collector.createdDate}`,
    '',
    'id\ttitle'
  ].concat(
    games.map(({ id, title, createdDate }) => `${id}\t"${title}"\tCreated: ${createdDate}`)
  ).concat([
    '',
    `Page limit: ${pagination.limit}`
  ])
  return lines.join('\n')
}
