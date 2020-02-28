import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import addGame from './addGame'
import Game from '../../../interfaces/Game'

describe('add a game', () => {
  it('should return the added game + newly-assigned id', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const gameInput = { title: 'Blaster Master' }

    // Capture the newly-assigned id
    let gameId
    const dbAddGame = async (gameInput: Game): Promise<Game> => {
      const game = await db.addGame(gameInput)
      gameId = game.id
      return game
    }

    const result = await addGame(ui.addGame, dbAddGame, gameInput)

    expect(gameId).toBeDefined()
    expect(result).toStrictEqual(`${gameId}\t"${gameInput.title}"`)

    await db.removeGame(gameId)
    await db.close()
  })
})
