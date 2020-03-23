function reverse(str) {
  var result = "";

  for(var i = 1; i <= str.length; i++) {
    var newIndex = str.length - i;
    result += (str[newIndex]);
  }
  return result;
  
}

console.log(reverse('yoyoyo'));
