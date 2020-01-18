import Game from './types/Game'
import addSingleGame from './addSingleGame'
import getSingleGame from './getSingleGame'

describe('add single game', () => {
  it('should add one game', async () => {
    expect.assertions(1)
    const gameData: Game = { title: 'Blaster Master' }
    const game = await addSingleGame(gameData)
    const resultGame = await getSingleGame(game.id)
    expect(resultGame).toStrictEqual(game)
  })
})
