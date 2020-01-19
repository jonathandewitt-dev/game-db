import getSingleGame from './getSingleGame'
import VolatileDB from './db/VolatileDB'

describe('get single game', () => {
  it('should get one pre-existing game by id', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const volatileDB = new VolatileDB({ games: [testGame] })
    const resultGame = await getSingleGame(volatileDB, testGame.id)
    expect(resultGame).toStrictEqual(testGame)
  })
})
