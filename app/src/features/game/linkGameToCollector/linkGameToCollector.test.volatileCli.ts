import createUI from '../../../ui/cli'
import createDB from '../../../db/volatile'
import linkGameToCollector from './linkGameToCollector'

describe('addGameForCollector', () => {
  it('adds a game for a collector', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const testGame = { id: 1, title: 'Blaster Master' }
    const testCollector = { id: 2, displayName: 'Game Collector 001', games: [] as number[] }
    const dbData = {
      collectors: [testCollector],
      games: [testGame],
    }
    const db = await createDB(dbData)
    const result = await linkGameToCollector(
      ui.linkGameToCollector,
      db.linkGameToCollector,
      testCollector.id,
      testGame.id,
    )
    expect(result).toStrictEqual(
`Collector: ${testCollector.displayName} (${testCollector.id})

id\ttitle
${testGame.id}\t"${testGame.title}"`
    )
  })
})
