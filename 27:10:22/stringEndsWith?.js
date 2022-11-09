// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    // TODO: complete
    let firstStrL = str.length;
    let newFirstStr = '';
    let secondStrL = ending.length;
  
  
    for(let i = 0; i < secondStrL; i++){
      newFirstStr += str.charAt(str.length - 1 -i)
    }
    
    let newArray = [];
    for(let i = 0; i < newFirstStr.length; i++){
      newArray.unshift(newFirstStr.charAt(i));
    }
    let arrayAsStr = newArray.join("")
    if( arrayAsStr === ending){
      return true;
    }
    return false;
  }