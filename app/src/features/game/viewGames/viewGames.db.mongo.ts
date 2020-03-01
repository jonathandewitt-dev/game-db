import { GameModel, paginateQuery } from '../../../db/mongo'
import Pagination from '../../../interfaces/Pagination'
import Game from '../../../interfaces/Game'

export default async (
  models: { Game: GameModel },
  pagination: Pagination
): Promise<{
  games: Game[]
  pagination: Pagination
}> => {
  const games = await paginateQuery(models.Game, pagination).exec()
  return { games, pagination }
}
