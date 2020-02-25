import createUI from '../../ui/cli'
import createDB from '../../db/volatile'
import removeGame from './removeGame'

describe('remove a game', () => {
  it('should return the removed game', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const ui = await createUI()
    const db = await createDB({ games: [testGame] })

    expect(
      await removeGame(ui.removeGame, db.removeGame, testGame.id)
    ).toStrictEqual(
      `-1\t"${testGame.title}"`
    )
  })
})
