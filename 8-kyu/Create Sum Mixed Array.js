/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
function sumMix(x){
  let result = 0;
  console.log(...x.map(n => (result += Number(n))))
return result;
}
