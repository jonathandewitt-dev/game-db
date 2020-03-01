import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default ({
  games,
  pagination,
}: {
  games: Game[]
  pagination: Pagination
}): string =>
  games.map(g => `${g.id}\t"${g.title}"\tCreated: ${g.createdDate}`)
    .concat([
      '',
      `Page limit: ${pagination.limit}`
    ])
    .join('\n')
