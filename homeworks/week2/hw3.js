
/* 迴圈倒著做
  function reverse(str) {
    var result = "";

    for( i = str.length; i >= 0; i--){
      result +=str[i]
    }
  }
*/



function reverse(str) {
  var result = "";

  for(var i = 1; i <= str.length; i++) {
    var newIndex = str.length - i;
    result += (str[newIndex]);
  }
  return result;
  
}

console.log(reverse('yoyoyo'));
