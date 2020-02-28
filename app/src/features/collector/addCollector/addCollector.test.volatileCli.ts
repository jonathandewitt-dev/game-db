import createUI from '../../../ui/cli'
import createDB from '../../../db/volatile'
import addCollector from './addCollector'

describe('add a collector', () => {
  it('should return the added collector + newly-assigned id', async () => {
    expect.assertions(1)
    const testCollector = { displayName: 'John Doe' }
    const ui = await createUI()
    const db = await createDB()

    expect(
      await addCollector(ui.addCollector, db.addCollector, testCollector)
    ).toStrictEqual(
      `1\t"${testCollector.displayName}"`
    )
  })
})
