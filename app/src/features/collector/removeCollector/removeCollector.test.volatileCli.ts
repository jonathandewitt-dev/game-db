import createUI from '../../../ui/cli'
import createDB from '../../../db/volatile'
import removeCollector from './removeCollector'

describe('remove a collector', () => {
  it('should return the removed collector', async () => {
    expect.assertions(1)
    const testCollector = { id: 1, displayName: 'John Doe' }
    const ui = await createUI()
    const db = await createDB({ collectors: [testCollector] })

    expect(
      await removeCollector(ui.removeCollector, db.removeCollector, testCollector.id)
    ).toStrictEqual(
      `-${testCollector.id}\t"${testCollector.displayName}"`
    )
  })
})
