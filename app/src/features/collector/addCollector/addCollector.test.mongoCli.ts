import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import addCollector from './addCollector'
import Collector from '../../../interfaces/Collector'

describe('add a collector', () => {
  it('should return the added collector + newly-assigned id', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const collectorInput = { displayName: 'John Doe' }

    // Capture the newly-assigned id
    let collectorId
    const dbAddCollector = async (collectorInput: Collector): Promise<Collector> => {
      const collector = await db.addCollector(collectorInput)
      collectorId = collector.id
      return collector
    }

    const result = await addCollector(ui.addCollector, dbAddCollector, collectorInput)

    expect(collectorId).toBeDefined()
    expect(result).toStrictEqual(`${collectorId}\t"${collectorInput.displayName}"`)

    await db.removeCollector(collectorId)
    await db.close()
  })
})
