const lib = require('../lib')

describe('absolute', () => {
  it('should return positive number if input is positive', () => {
    const result = lib.absolute(1);
    expect(result).toBe(1)
  })
  
  it('should return positive number if input is negative', () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1)
  })
  
  it('should return 0 number if input is 0', () => {
    const result = lib.absolute(0);
    expect(result).toBe(0)
  })
})

describe('greet', () => {
  it('should return the greeting message', () => {
    const result = lib.greet('Mosh');
    expect(result).toMatch(/Mosh/);
  })
})

describe('getCurrencies', () => {

  it('should return supported currencies', () => {
    const result = lib.getCurrencies();

   /*  // Too general
    expect(result).toBeDefined();
    // or
    expect(result).not.toBeNull();
    // Too specific
    expect(result[0]).toBe('USD');
    expect(result[1]).toBe('AUD');
    expect(result[2]).toBe('EUR');
    // or
    expect(result.length).toBe(3);


    // better way
    expect(result).toContain('USD');
    expect(result).toContain('AUD');
    expect(result).toContain('EUR'); */

    // Ideal way
    expect(result).toEqual(expect.arrayContaining(['USD','AUD','EUR']));
  })
})

describe('getProduct', () => {
  it('should return the product with the given id', () => {
    const result = lib.getProduct(1);
    // expect(result).toEqual({ id: 1, price: 10 });
    expect(result).toMatchObject({ id: 1, price: 10 })
    
    expect(result).toHaveProperty('id', 1)

  })
})

describe('registerUser', () => {
  it('should throw err if username is falsy', () => {
    // falsy values:
    // Null
    // undefined
    // NaN
    // ''
    // 0
    // false
    const args = [null, undefined, NaN, '', 0, false];
    args.forEach(a => {
      expect(() => { lib.registerUser(null) }).toThrow();
    })
  })
})