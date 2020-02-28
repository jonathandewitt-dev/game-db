import createUI from '../../../ui/cli'
import createDB from '../../../db/volatile'
import viewCollectors from './viewCollectors'

describe('view a paginated list of collectors', () => {
  it('should return a paginated list of collectors', async () => {
    expect.assertions(1)
    const testCollector = { id: 1, displayName: 'Bubb Rubb' }
    const ui = await createUI()
    const db = await createDB({ collectors: [testCollector] })

    expect(
      await viewCollectors(ui.viewCollectors, db.viewCollectors, {
        limit: 1,
        firstId: 1,
      })
    ).toStrictEqual(
      `${testCollector.id}\t"${testCollector.displayName}"`
    )
  })
})
