import Collector from '../../domain/types/Collector'
import Game from '../../domain/types/Game'
import Pagination from '../../domain/types/Pagination'

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
