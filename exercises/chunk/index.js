// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const start = index;
    const end = index + size;
    const sliced = array.slice(start, end);

    console.log("start:", start, "end:", end, "sliced:", sliced);
    
    chunked.push(sliced);
    index += size;
  }

  return chunked;
}

/*
start: 0 end: 3
[ 1, 2, 3 ]
start: 3 end: 6
[ 4, 5, 6 ]
start: 6 end: 9
[ 7, 8 ]
*/

module.exports = chunk;

/*
function chunk(array, size) {
  const result = [];
  let counter = 1;
  let temp = [];

  for (let i of array) {
    console.log(i);
    temp.push(i);
    counter++;

    if (counter > size) {
      result.push(temp);
      temp = [];
      counter = 1;
    }
  }

  if (temp.length > 0) {
    result.push(temp);
  }

  return result;
}
*/

/*
function chunk(array, size) {
  const chunked = [];

  for (let item of array) {
    const last = chunked[chunked.length - 1];
    console.log("last:", last);

    if (!last || last.length === size) {
      chunked.push([item]);
    } else {
      last.push(item);
    }
  }

  return chunked;
}
*/

/*
last: undefined
last: [ 1 ]
last: [ 1, 2 ]
last: [ 1, 2, 3 ]
last: [ 4 ]
last: [ 4, 5 ]
last: [ 4, 5, 6 ]
last: [ 7 ]
*/