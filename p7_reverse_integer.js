// Given a signed 32-bit integer x,
//  return x with its digits reversed.
// If reversing x causes the value to go outside the signed
// 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers
// (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

function reverse(x) {
  const max = 2 ** 31 - 1; // 2147483647
  const min = -(2 ** 31);

  //   console.log(max);
  //   console.log(min);

  if (x === min || x === max) {
    return 0;
  }

  let reverse = 0;

  while (x != 0) {
    let lastDigit = x % 10;
    console.log();
    if (x > Math.trunc(max / 10.0) || x < Math.trunc(min / 10.0)) {
      return 0;
    }
    reverse = reverse * 10 + lastDigit;
    x = Math.trunc(x / 10);
  }
  return reverse;
}

let output1 = reverse(123);
let output2 = reverse(120);
let output3 = reverse(-123);

console.log(output1);
console.log(output2);
console.log(output3);

//Math.trunc remove the fraction part

// implemnt by array

let input = [-123, 120, 304, 120, -994, 35684365436589854];
let output = [];

for (let i = 0; i < input.length; i++) {
  let result = reverse(input[i]);
  output.push(result);
}
console.log(output);
