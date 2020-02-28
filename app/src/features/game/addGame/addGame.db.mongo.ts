import { GameModel } from '../../../db/mongo'
import Game from '../../../interfaces/Game'

export default async (
  models: { Game: GameModel },
  game: Game
): Promise<Game> => {
  return models.Game.create(game)
}
