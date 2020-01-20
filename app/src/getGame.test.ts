import getGame from './getGame'
import VolatileDB from './db/VolatileDB'

describe('get a game', () => {
  it('should get one pre-existing game by id', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const volatileDB = new VolatileDB({ games: [testGame] })
    const resultGame = await getGame(volatileDB, testGame.id)
    expect(resultGame).toStrictEqual(testGame)
  })
})
