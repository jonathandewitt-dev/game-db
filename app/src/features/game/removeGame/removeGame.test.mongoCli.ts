import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import removeGame from './removeGame'
import Game from '../../../interfaces/Game'

describe('remove a game', () => {
  it('should return the removed game', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const gameInput: Game = { title: 'Blaster Master' }

    const game: Game = await db.addGame(gameInput)

    const result = await removeGame(ui.removeGame, db.removeGame, game.id)

    expect(game.id).toBeDefined()
    expect(result).toStrictEqual(`-${game.id}\t"${gameInput.title}"\tCreated: ${game.createdDate}`)

    await db.close()
  })
})
