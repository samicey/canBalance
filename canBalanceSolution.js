//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.




function canBalance(array) {
<<<<<<< HEAD
  let leftArray = [],
      rightArray = [],
      leftArrayTotal = 0,
      rightArrayTotal = 0,
      totalValues = array.reduce((acc, val)=>acc+val,0);
=======
  let leftArray = [];
  //let rightArray = [];
  //let leftArrayTotal = 0;
  let rightArrayTotal = 0;
  let totalValues = array.reduce((acc, val)=>acc+val,0)
>>>>>>> 81ef2b1c676d6eca323180fbf7cc6067bb1526d1
  if (totalValues%2 == 0 && totalValues>0){
  let done = totalValues/2;
  for(let i = 0; i<array.length;){
    leftArrayTotal += array[0];
    leftArray.push(array.shift());
    if(checker === leftArrayTotal){
      rightArray = array;
      rightArrayTotal = rightArray.reduce((acc, val)=>acc+val,0)
      break;
    }
  }
  
  if(leftArrayTotal === rightArrayTotal){
    return ([leftArray.length, rightArray.length])
  }
  else{return -1}
}
else{return -1;}

}
canBalance([1, 2, 3, 4, 5, 6, 6, 7, 8])

module.exports = canBalance;