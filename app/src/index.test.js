import index from './index'

describe('test', () => {
  it('adds 1 + 1 to equal 2', () => {
    expect.assertions(1)
    expect(index()).toBe(2)
  })
})
