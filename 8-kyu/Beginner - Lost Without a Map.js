/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

*/

function maps(x){
const collection = [...x];
const newCollection = collection.map((x) => x * 2);
  return newCollection;
}
