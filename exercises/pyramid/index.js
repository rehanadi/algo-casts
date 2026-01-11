// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  
  const columns = 2 * n - 1;

  if (level.length === columns) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  const midpoint = Math.floor(columns / 2);
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    level += '#';
  } else {
    level += ' ';
  }
  pyramid(n, row, level);
}

module.exports = pyramid;

/*
function pyramid(n) {
  const columns = 2 * n - 1;
  const midpoint = Math.floor(columns / 2);
  
  for (let row = 0; row < n; row++) {
    // console.log("row:", row, midpoint);
    let level = '';

    for (let column = 0; column < columns; column++) {
      // console.log(column, (midpoint - row), (midpoint + row));
      
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
}
*/