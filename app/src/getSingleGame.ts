import Game from './types/Game'
import testDB from './testDB'

export default async (id: number): Promise<Game> =>
  Promise.resolve(testDB.games.find(g => g.id === id))
