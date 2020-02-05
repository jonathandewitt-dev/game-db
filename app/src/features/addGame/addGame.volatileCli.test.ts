import createUI from '../../ui/cli'
import createDB from '../../db/volatile'
import addGame from './addGame'

describe('add a game', () => {
  it('should return the added game + newly-assigned id', async () => {
    expect.assertions(1)
    const testGame = { title: 'Blaster Master' }
    const ui = await createUI()
    const db = await createDB()

    expect(
      await addGame(ui.addGame, db.addGame, testGame)
    ).toStrictEqual(
      `1\t"${testGame.title}"`
    )
  })
})
