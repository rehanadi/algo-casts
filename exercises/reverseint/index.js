// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   const sign = Math.sign(n);
//   const str = Math.abs(n).toString();
//   const reversed = str.split('').reverse().join('');
//   const result = parseInt(reversed) * sign;
//   return result;
// }