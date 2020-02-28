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
    `Collector: ${collector.displayName} (${collector.id})`,
    '',
    'id\ttitle'
  ].concat(
    games.map(({ id, title }) => `${id}\t"${title}"`)
  ).concat([
    '',
    `Page limit: ${pagination.limit}`
  ])
  return lines.join('\n')
}
