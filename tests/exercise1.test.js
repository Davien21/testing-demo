const lib = require('../exercise1')

describe('fizzBuzz', () => {
  it('should throw error if not a number', () => {
    const args = [null, undefined, {}, 'a',[]]
    args.forEach(a => {
      expect(() => { lib.fizzBuzz(a) }).toThrow();
    })
  })
  it('should return FizzBuzz if divisible by 3 and 5', () => {
    const result = lib.fizzBuzz(15)
    expect(result).toBe('FizzBuzz');
  })
  it('should return Fizz if divisible by 3', () => {
    const result = lib.fizzBuzz(12)
    expect(result).toBe('Fizz');
  })
  it('should return Fizz if divisible by 5', () => {
    const result = lib.fizzBuzz(10)
    expect(result).toBe('Buzz');
  })
  it('should return input if not divisible by 3 or 5', () => {
    const result = lib.fizzBuzz(11)
    expect(result).toBe(11);
  })
})
