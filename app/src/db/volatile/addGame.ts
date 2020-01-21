import DBData from '../interfaces/DBData'
import Game from '../../domain/interfaces/Game'

export default async (data: DBData, game: Game): Promise<Game> => {
  const newGame = {
    ...game,
    id: data.games.length + 1,
  }
  data.games.push(newGame)
  return Promise.resolve(newGame)
}
