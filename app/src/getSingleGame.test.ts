import getSingleGame from './getSingleGame'
import TestDB from './testDB'

const testDB = new TestDB()

describe('get single game', () => {
  it('should get one game', async () => {
    expect.assertions(1)
    const game = await getSingleGame(testDB, 1)
    expect(game).toStrictEqual({
      id: 1,
      title: 'Blaster Master',
    })
  })
})
