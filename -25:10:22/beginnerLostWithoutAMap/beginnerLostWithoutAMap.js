//Given an array of integers, return a new array with each value doubled.

function maps(x){
    let y = [];
  
    for(let i = 0; i < x.length; i++){
      y[i] = x[i] * 2;
    }
    
    return y;
  }