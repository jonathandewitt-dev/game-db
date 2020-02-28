import DBData from '../../../interfaces/DBData'
import Game from '../../../interfaces/Game'
import Pagination from '../../../interfaces/Pagination'

export default async (
  data: DBData,
  pagination: Pagination
): Promise<{
  games: Game[]
  pagination: Pagination
}> => {
  const games = data.games.filter(
    c => c.id >= pagination.firstId && (pagination.lastId === undefined || c.id <= pagination.lastId)
  ).slice(0, pagination.limit)

  return Promise.resolve({
    games,
    pagination
  })
}
