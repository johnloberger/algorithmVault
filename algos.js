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
