import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import viewGames from './viewGames'

describe('view a paginated list of games', () => {
  it('should return a paginated list of games', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const games = await Promise.all([
      db.addGame({ title: 'Blaster Master' }),
      db.addGame({ title: 'Super Mario Bros.' }),
    ])

    const result = await viewGames(ui.viewGames, db.viewGames, {
      limit: 1,
    })

    expect(result).toStrictEqual(
      expect.stringContaining(
        games.map(c => `${c.id}\t"${c.title}"`).join('\n')
      )
    )

    await Promise.all(games.map(
      async c => db.removeGame(c.id)
    ))
    await db.close()
  })
})
