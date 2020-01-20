import ui from '../../ui/cli/viewGame'
import VolatileDB from '../../db/VolatileDB'
import viewGame from '../../domain/viewGame'

describe('view a game', () => {
  it('should get one pre-existing game by id', async () => {
    expect.assertions(1)
    const testGame = { id: 1, title: 'Blaster Master' }
    const db = new VolatileDB({ games: [testGame] })

    expect(
      await viewGame(ui, db, testGame.id)
    ).toStrictEqual(
      `${testGame.id}\t"${testGame.title}"`
    )
  })
})
