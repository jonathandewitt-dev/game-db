import DBData from '../types/DBData'
import Game from '../../domain/types/Game'

export default async (data: DBData, game: Game): Promise<Game> => {
  const newGame = {
    ...game,
    id: data.games.length + 1,
  }
  data.games.push(newGame)
  return Promise.resolve(newGame)
}
