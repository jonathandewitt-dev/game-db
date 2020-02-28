import DBData from '../../../interfaces/DBData'
import Identifier from '../../../interfaces/Identifier'
import Game from '../../../interfaces/Game'

export default async (data: DBData, gameId: Identifier): Promise<Game> => {
  const index = data.games.findIndex(g => g.id === gameId)
  const [game] = data.games.splice(index, 1)
  return Promise.resolve(game)
}
