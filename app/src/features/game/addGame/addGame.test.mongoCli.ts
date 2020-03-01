import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import addGame from './addGame'
import Game from '../../../interfaces/Game'

describe('add a game', () => {
  it('should return the added game + newly-assigned id and date', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const gameInput: Game = { title: 'Blaster Master' }

    // Capture the newly-assigned id and date
    let game: Game
    const dbAddGame = async (gameInput: Game): Promise<Game> => {
      game = await db.addGame(gameInput)
      return game
    }

    const result = await addGame(ui.addGame, dbAddGame, gameInput)

    expect(game.id).toBeDefined()
    expect(result).toStrictEqual(`${game.id}\t"${gameInput.title}"\tCreated: ${game.createdDate}`)

    await db.removeGame(game.id)
    await db.close()
  })
})
