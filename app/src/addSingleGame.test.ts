import addSingleGame from './addSingleGame'
import VolatileDB from './db/VolatileDB'

describe('add single game', () => {
  it('should return the added game + id', async () => {
    expect.assertions(1)
    const testGame = { title: 'Blaster Master' }
    const volatileDB = new VolatileDB()
    const game = await addSingleGame(volatileDB, testGame)
    expect(game).toStrictEqual({ id: game.id, ...testGame })
  })
})
