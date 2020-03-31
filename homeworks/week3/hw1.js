function stars(n) {
  let item = '';
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    item += '*';
    result.push(item);
  }

  return result;
}

module.exports = stars;
