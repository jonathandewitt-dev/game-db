import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import linkGameToCollector from './linkGameToCollector'

describe('addGameForCollector', () => {
  it('adds a game for a collector', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const testGame = await db.addGame({ title: 'Blaster Master' })
    const testCollector = await db.addCollector({ displayName: 'Game Collector 001', games: [] })

    const result = await linkGameToCollector(
      ui.linkGameToCollector,
      db.linkGameToCollector,
      testCollector.id,
      testGame.id,
    )
    expect(result).toStrictEqual(
`Collector: ${testCollector.displayName} (${testCollector.id})\tCreated: ${testCollector.createdDate}

id\ttitle
${testGame.id}\t"${testGame.title}"\tCreated: ${testGame.createdDate}`
    )

    await db.removeGame(testGame.id)
    await db.removeCollector(testCollector.id)
  })
})
