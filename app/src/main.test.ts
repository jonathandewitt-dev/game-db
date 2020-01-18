import main from './main'

describe('main', () => {
  it('adds 1 + 1 to equal 2', () => {
    expect.assertions(1)
    expect(main()).toBe(2)
  })
})
