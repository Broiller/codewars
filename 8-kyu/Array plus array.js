/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
  
const initialValue = 0;
 
  return arr1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue) + arr2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue); //something went wrong
}
