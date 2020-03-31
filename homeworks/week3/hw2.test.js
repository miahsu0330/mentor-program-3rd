const alphaSwap = require('./hw2');

describe('hw2', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
  it('should return correct answer when str = Roger', () => {
    expect(alphaSwap('Roger')).toBe('rOGER');
  });
});
