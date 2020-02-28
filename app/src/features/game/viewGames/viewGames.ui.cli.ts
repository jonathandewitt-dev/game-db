import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default ({
  games,
  pagination,
}: {
  games: Game[]
  pagination: Pagination
}): string =>
  games.map(c => `${c.id}\t"${c.title}"`)
    .join('\n')
