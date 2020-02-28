import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import viewGame from './viewGame'

describe('view a game', () => {
  it('should return the game identified by the given id', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const game = await db.addGame({ title: 'Blaster Master' })

    const result = await viewGame(ui.viewGame, db.viewGame, game.id)

    expect(result).toStrictEqual(`${game.id}\t"${game.title}"`)

    await db.removeGame(game.id)
    await db.close()
  })
})
