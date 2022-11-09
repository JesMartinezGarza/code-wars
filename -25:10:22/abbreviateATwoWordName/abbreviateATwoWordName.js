// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){

    // code away
    let nameArr = name.split(' ');
    let Initials = '';

  
    for(let i = 0; i < nameArr.length; i++){
      Initials += (nameArr[i][0]).toUpperCase();
      if(i === 0){
      Initials += '.';
      }
    }
    return Initials;
}