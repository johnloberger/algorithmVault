/* GIT INITIALIZED */

/* Write a function that accepts an array of 10 integers (between 0 and 9)
that returns a string of those numbers in the form of a phone number */

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // returns "(123) 456-7890"

function createPhoneNumber(numbers) {
  numbers = numbers.join("");
  return (
    "(" +
    numbers.substring(0, 3) +
    ")" +
    numbers.substring(3, 6) +
    "-" +
    numbers.substring(6)
  );
}

//OR

function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";
  for (let i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}

// DECODE MORSE
decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(" ").map(decodeMorseLetter).join("");
  }
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};

//CHAR COUNT return an object with letters as the keys and freq for values
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}


// anagram valid?

function validAnagram(first, second) {
  if (first.length !== second.length){
    return false
  }
  const lookup = {};

  for (let i=0;i <first.length; i++){
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i=0; i <second.length; i++){
    let letter = second[i]
    // can't find second letter or letter is zero then its not anagram
    if (!lookup[letter]){
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true
}

// accept a sorted array of integers and find the first pair where the sum is 0

function sumZero(arr){
  let left = 0
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right]
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if (sum > 0){
      right--;
    } else {
      left++;
    }
  }
}

// accept a sorted array and count the unique values, even negatives
// [1,1,2] returns 2
function countUniqueValues(arr){
  let i = 0;
  for (let j = 1; j < arr.length; j++){
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j]
    }
    console.log(i,j)
  }
}