const isPrime = require('./hw3');

describe('hw3', () => {
  it('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });
  it('should return correct answer when n = 3', () => {
    expect(isPrime(3)).toBe(true);
  });
  it('should return correct answer when n = 20', () => {
    expect(isPrime(20)).toBe(false);
  });
  it('should return correct answer when n = 39', () => {
    expect(isPrime(39)).toBe(false);
  });
});
