import sum from '../src/index'

describe('index.js', () => {
  it('Sums add two number', () => {
    expect(sum(2,3)).toBe(5)
  })
})