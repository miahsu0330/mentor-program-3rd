function alphaSwap(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i].toLowerCase());
    }
  }

  return result.join('');
}

module.exports = alphaSwap;
