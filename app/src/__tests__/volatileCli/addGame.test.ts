import ui from '../../ui/cli/addGame'
import VolatileDB from '../../db/VolatileDB'
import addGame from '../../domain/addGame'

describe('add a game', () => {
  it('should return the added game + newly-assigned id', async () => {
    expect.assertions(1)
    const testGame = { title: 'Blaster Master' }
    const db = new VolatileDB()

    expect(
      await addGame(ui, db, testGame)
    ).toStrictEqual(
      `1\t"${testGame.title}"`
    )
  })
})
