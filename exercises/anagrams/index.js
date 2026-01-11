// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

// anagrams('rail safety', 'fairy tales');

module.exports = anagrams;

/*
function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let isAnagram = true;

  const charMapA = {};
  for (let char of strA) {
    if (charMapA[char]) {
      charMapA[char]++;
    } else {
      charMapA[char] = 1;
    }
  }

  const charMapB = {};
  for (let char of strB) {
    if (charMapB[char]) {
      charMapB[char]++;
    } else {
      charMapB[char] = 1;
    }
  }

  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      isAnagram = false;
    }
  }
  
  for (let char in charMapB) {
    if (charMapA[char] !== charMapB[char]) {
      isAnagram = false;
    }
  }

  return isAnagram;
}
*/

/*
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  const charMap = {};
  const cleaned = str.replace(/[^\w]/g, "").toLowerCase();

  for (let char of cleaned) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
*/