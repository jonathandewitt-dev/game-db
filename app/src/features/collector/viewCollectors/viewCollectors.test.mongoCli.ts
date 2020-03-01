import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import viewCollectors from './viewCollectors'

describe('view a paginated list of collectors', () => {
  it('should return a paginated list of collectors', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const collectors = await Promise.all([
      db.addCollector({ displayName: 'Bubb Rubb' }),
      db.addCollector({ displayName: 'Lil Sis' }),
    ])

    const result = await viewCollectors(ui.viewCollectors, db.viewCollectors, {
      limit: 1,
      lastCreatedDate: new Date(),
    })

    const lastCollector = collectors[collectors.length - 1]
    expect(result).toStrictEqual(
      expect.stringContaining(
        [lastCollector].map(c => `${c.id}\t"${c.displayName}"`).join('\n')
      )
    )

    await Promise.all(collectors.map(
      async c => db.removeCollector(c.id)
    ))
    await db.close()
  })
})
