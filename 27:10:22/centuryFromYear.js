// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
    // Finish this :)
    let x = year.toString().length - 2;
    let excludeLastTwo = ''
    for(let i = 0;i < x; i++){
      excludeLastTwo += year.toString().charAt(i)
    }
    let y = parseInt(excludeLastTwo) * 100;
    let z = y + 1;
    if(year.toString().length  === 2){
      return 1;
    }else if( year >= z){
      return parseInt(excludeLastTwo) + 1;
    }else
      return parseInt(excludeLastTwo);
    
  }