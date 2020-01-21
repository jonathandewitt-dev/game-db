import DBData from '../types/DBData'
import Game from '../../domain/types/Game'

export default async (data: DBData, id: number): Promise<Game> => {
  return Promise.resolve(data.games.find(g => g.id === id))
}
