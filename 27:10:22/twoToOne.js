// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // your code
    let longString = s1 + s2;
    let lSArray = [];
    let nonDupsArray = [];
    for(let i = 0; i < longString.length; i++){
        lSArray.push(longString.charAt(i));
    }
    lSArray = lSArray.sort();
    
    nonDupsArray.push(lSArray[0]);
    for(let i = 1; i <= lSArray.length; i++){
      if(lSArray[i] !== lSArray[i-1]){
         nonDupsArray.push(lSArray[i]);
      }
    }
    
    return nonDupsArray.join('');
  }