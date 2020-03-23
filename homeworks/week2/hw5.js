function join(str, concatStr) {
  var result = "";

  for( i = 0; i < str.length; i++) {
    result += str[i] + concatStr
  
  }

  return result;
}

function repeat(str, times) {
  var result = "";
  for( i = 0; i < times; i++ ) {
    result += str;
  }

  return result;
}

console.log(join(["a", 1, "b", 2, "c", 3], ','));
console.log(repeat('yoyo', 2));
