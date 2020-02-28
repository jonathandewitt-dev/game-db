import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import viewGamesForCollector from './viewGamesForCollector'

describe('view games associated with a collector', () => {
  it('finds and returns collector by id + a page of associated games', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const game1 = await db.addGame({ title: 'Blaster Master' })
    const game2 = await db.addGame({ title: 'Super Mario Bros.' })
    const collector = await db.addCollector({
      displayName: 'John Doe',
      games: [game1.id, game2.id],
    })

    const result = await viewGamesForCollector(ui.viewGamesForCollector, db.viewGamesForCollector, collector.id, {
      limit: 1,
      firstId: collector.id,
      lastId: collector.id,
    })

    // TODO: Update to use pagination (remove game2)
    expect(result).toStrictEqual(
      `Collector: ${collector.displayName} (${collector.id})\n\n` +
      'id\ttitle\n' +
      `${game1.id}\t"${game1.title}"\n` +
      `${game2.id}\t"${game2.title}"\n\n` +
      'Page limit: 1'
    )

    await db.removeCollector(collector.id)
    await db.removeGame(game1.id)
    await db.removeGame(game2.id)
    await db.close()
  })
})
