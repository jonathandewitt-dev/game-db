import DBData from '../../interfaces/DBData'
import Game from '../../interfaces/Game'

export default async (data: DBData, id: number): Promise<Game> => {
  return Promise.resolve(data.games.find(g => g.id === id))
}
