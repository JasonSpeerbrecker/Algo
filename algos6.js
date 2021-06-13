/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @return {string} The given str converted into an acronym.
 */
function acronymize(str) {
var acronym = "";
    var array = [];
    array = str.split(" ");
    for (var i=0; i<array.length; i++){
        acronym += array[i][0];
    }
    acronym = acronym.toUpperCase()
    console.log(acronym)
}
acronymize("test test test test")
module.exports = { acronymize };


//************************************************************** */


/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @return {string} The given str reversed.
 */
function reverseString(str) {
    var words = str.split('');
    for (let i = 0; i < Math.floor(words.length) / 2; i++) {
      temp = words[i];
      words[i] = words[words.length - i - 1]
      words[words.length - i - 1] = temp
    }
    var newString = words.join('')
    return newString
  }

console.log(reverseString("Test Test idk"))

module.exports = { reverseString };