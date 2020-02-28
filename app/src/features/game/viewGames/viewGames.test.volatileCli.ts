import createUI from '../../../ui/cli'
import createDB from '../../../db/volatile'
import viewGames from './viewGames'

describe('view a paginated list of games', () => {
  it('should return a paginated list of games', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const ui = await createUI()
    const db = await createDB({ games: [testGame] })

    expect(
      await viewGames(ui.viewGames, db.viewGames, {
        limit: 1,
        firstId: 1,
      })
    ).toStrictEqual(
      `${testGame.id}\t"${testGame.title}"`
    )
  })
})
