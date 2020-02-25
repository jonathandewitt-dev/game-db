import createUI from '../../ui/cli'
import createDB from '../../db/mongo'
import removeGame from './removeGame'

describe('remove a game', () => {
  it('should return the removed game', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const gameInput = { title: 'Blaster Master' }
    const { id: gameId } = await db.addGame(gameInput)

    const result = await removeGame(ui.removeGame, db.removeGame, gameId)

    expect(gameId).toBeDefined()
    expect(result).toStrictEqual(`-${gameId}\t"${gameInput.title}"`)

    await db.close()
  })
})
