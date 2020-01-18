import getSingleGame from './getSingleGame'

describe('get single game', () => {
  it('should get one game', async () => {
    expect.assertions(1)
    const game = await getSingleGame(1)
    expect(game).toStrictEqual({
      id: 1,
      title: 'Blaster Master',
    })
  })
})
