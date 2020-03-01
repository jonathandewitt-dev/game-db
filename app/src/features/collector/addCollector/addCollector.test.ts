import createUI from '../../../ui/cli'
import createDB from '../../../db/mongo'
import addCollector from './addCollector'
import Collector from '../../../interfaces/Collector'

describe('add a collector', () => {
  it('should return the added collector + newly-assigned id and date', async () => {
    expect.assertions(2)
    const ui = await createUI()
    const db = await createDB()

    const collectorInput: Collector = { displayName: 'John Doe' }

    // Capture the newly-assigned id and date
    let collector: Collector
    const dbAddCollector = async (collectorInput: Collector): Promise<Collector> => {
      collector = await db.addCollector(collectorInput)
      return collector
    }

    const result = await addCollector(ui.addCollector, dbAddCollector, collectorInput)

    expect(collector.id).toBeDefined()
    expect(result).toStrictEqual(`${collector.id}\t"${collectorInput.displayName}"\tCreated: ${collector.createdDate}`)

    await db.removeCollector(collector.id)
    await db.close()
  })
})
