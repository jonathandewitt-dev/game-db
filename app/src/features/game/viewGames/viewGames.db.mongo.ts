import { GameModel } from '../../../db/mongo'
import Pagination from '../../../interfaces/Pagination'
import Game from '../../../interfaces/Game'

export default async (
  models: { Game: GameModel },
  pagination: Pagination
): Promise<{
  games: Game[]
  pagination: Pagination
}> => {
  // TODO: Update to use pagination
  const games = await models.Game.find({}).exec()
  return { games, pagination }
}
