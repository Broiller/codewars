/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
function find_average(array) {
  if(array.length == 0) {
    return 0;
  } else {
     return array.reduce((result, current) => result + current, 0) / array.length;
  }
}
