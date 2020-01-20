import addGame from './addGame'
import VolatileDB from './db/VolatileDB'

describe('add a game', () => {
  it('should return the added game + newly-assigned id', async () => {
    expect.assertions(1)
    const testGame = { title: 'Blaster Master' }
    const volatileDB = new VolatileDB()
    const game = await addGame(volatileDB, testGame)
    expect(game).toStrictEqual({ id: game.id, ...testGame })
  })
})
