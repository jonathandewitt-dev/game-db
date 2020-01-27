import createUI from '../../cliUI'
import createDB from '../../volatileDB'
import viewGame from './viewGame'

describe('view a game', () => {
  it('should get one pre-existing game by id', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const ui = await createUI()
    const db = await createDB({ games: [testGame] })

    expect(
      await viewGame(ui.viewGame, db.viewGame, testGame.id)
    ).toStrictEqual(
      `${testGame.id}\t"${testGame.title}"`
    )
  })
})
