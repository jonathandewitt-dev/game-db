import addSingleGame from './addSingleGame.js'
import getSingleGame from './getSingleGame.js'

describe('add single game', () => {
  it('should add one game', async () => {
    expect.assertions(1)
    const game = await addSingleGame({ title: 'Blaster Master' })
    const resultGame = await getSingleGame(game.id)
    expect(resultGame).toStrictEqual(game)
  })
})
