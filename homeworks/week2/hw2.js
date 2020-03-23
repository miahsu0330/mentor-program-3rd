 /*
 | 第一個字元放入 firstIndex、其餘字元放入 restIndex、完整字串為 str。
 | 判斷 firstIndex 是否為小寫，如果是執行第 4 行；否則執行第 5 行。
 | firstIndex 轉成大寫。
 | 回傳 firstIndex + restIndex。
 */
function capitalize(str) {

  var firstIndex = str[0];
  var restIndex = ""

  if( firstIndex >= "a" && firstIndex <= "z" ) {
    // var firstIndexCode = str.charCodeAt(0);
    // firstIndex = String.fromCharCode(firstIndexCode - 32);
    firstIndex = firstIndex.toUpperCase();
  }
  
  for(var i = 1; i < str.length; i++ ){
    restIndex += str[i] 
  }
  var str = firstIndex + restIndex
  return str;
  
}

console.log(capitalize('aick'));
