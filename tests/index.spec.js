import {inr} from '../src/index'

describe('Index.js', () => {
  it('inr exported', () => {
    expect(inr(1234)).toBe('₹1,234.00')
  })
})