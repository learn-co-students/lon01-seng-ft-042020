const reverseString = (input) => {
  return Array.from(input).reverse().join("");
};

const palindrome = (input) => {
  if (input === undefined) {
    throw new Error("please provide valid input");
  }

  let result = false;
  const reversedInput = reverseString(input);
  result = input === reversedInput;
  return { result, input, reversed: reversedInput };
};

// what will be the default import
// if that file is required somewhere else
module.exports = palindrome;
