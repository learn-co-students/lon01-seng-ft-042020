const palindrome = require("./palindrome");

const indexOfWordFlag = process.argv.indexOf("--word");
const indexOfWord = indexOfWordFlag + 1;
const word = process.argv[indexOfWord];
const result = palindrome(word);
console.log(result);
