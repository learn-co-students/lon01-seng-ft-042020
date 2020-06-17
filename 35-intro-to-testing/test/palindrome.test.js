const palindrome = require("../palindrome");

test("whether the palindrome method works correctly when input is kayak", () => {
  expect(palindrome("kayak")).toStrictEqual({
    input: "kayak",
    reversed: "kayak",
    result: true,
  });
});

test("whether the palindrome method works correctly when input is kayaks", () => {
  expect(palindrome("kayaks")).toStrictEqual({
    input: "kayaks",
    reversed: "skayak",
    result: false,
  });
});

test("it throws an error when the input string is undefined", () => {
  expect(() => {
    palindrome();
  }).toThrow("please provide valid input");
});
