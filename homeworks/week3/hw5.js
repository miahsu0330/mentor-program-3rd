
function add(a, b) {
  let gitLength = 0;
  if (a.length > b.length) {
    gitLength = a.length;
  } else {
    gitLength = b.length;
  }
  const spreadA = Array(gitLength).fill(0);
  const spreadB = Array(gitLength).fill(0);

  for (let i = gitLength - a.length, j = 0; j < a.length; i += 1, j += 1) {
    spreadA[i] = Number(a[j]);
  }
  for (let i = gitLength - b.length, j = 0; j < b.length; i += 1, j += 1) {
    spreadB[i] = Number(b[j]);
  }

  const result = [];
  for (let i = 0; i < gitLength; i += 1) {
    result.push(spreadA[i] + spreadB[i]);
  }
  return result.join('');
}

module.exports = add;
