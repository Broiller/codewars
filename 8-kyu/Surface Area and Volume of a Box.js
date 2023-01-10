/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]


*/

function getSize(width, height, depth) {
  return [(depth * width + depth * height + width * height) * 2, width*height*depth]
}
