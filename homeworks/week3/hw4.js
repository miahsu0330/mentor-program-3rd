function isPalindromes(str) {
  const star = -1;
  const end = str.length;
  let j = 1;
  while (star + j !== end - j && star + j < end - j) {
    if (str[star + j] !== str[end - j]) return false;
    j += 1;
  }

  return true;
}

module.exports = isPalindromes;
