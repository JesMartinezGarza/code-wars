// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //code here
  let xCount = 0;
  let oCount = 0;
  let newStr = str.toLowerCase();
  
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] === 'x'){
      xCount += 1;
    }else if(newStr[i] === 'o'){
      oCount += 1;
    }
  }
  if(xCount === oCount){
    return true
  }else return false
}