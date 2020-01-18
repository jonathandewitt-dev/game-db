import Game from './types/Game'
import addSingleGame from './addSingleGame'
import getSingleGame from './getSingleGame'
import TestDB from './testDB'

const testDB = new TestDB()

describe('add single game', () => {
  it('should add one game', async () => {
    expect.assertions(1)
    const gameData: Game = { title: 'Blaster Master' }
    const game = await addSingleGame(testDB, gameData)
    const resultGame = await getSingleGame(testDB, game.id)
    expect(resultGame).toStrictEqual(game)
  })
})
