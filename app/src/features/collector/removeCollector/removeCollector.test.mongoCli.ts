import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import removeCollector from './removeCollector'

describe('remove a collector', () => {
  it('should return the removed collector', async () => {
    expect.assertions(1)
    const ui = await createUI()
    const db = await createDB()

    const collector = await db.addCollector({ displayName: 'John Doe' })
    const result = await removeCollector(ui.removeCollector, db.removeCollector, collector.id)

    expect(result).toStrictEqual(`-${collector.id}\t"${collector.displayName}"\tCreated: ${collector.createdDate}`)

    await db.close()
  })
})
