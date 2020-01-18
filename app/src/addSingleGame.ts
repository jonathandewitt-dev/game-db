import Game from './types/Game'
import testDB from './testDB'

export default async (game: Game): Promise<Game> => {
  const newGame = {
    ...game,
    id: testDB.games.length + 1,
  }
  testDB.games.push(newGame)
  return Promise.resolve(newGame)
}
