// Reverse Number
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Solution
// TC - O(log 10 (n)) ie O(log n) and SC - O(1) 

const reverseNum = function(num) {
    let reverse = 0;
    let isNegative = num < 0; // check if the num is -ve
    num = Math.abs(num); // work with the absolute num

    while(num > 0) {
        let ld = num % 10; // extract the last digit
        reverse = (reverse * 10) + ld; // add the last digit in the reverse num
        num = Math.floor(num / 10); // remove the last digit
    }

    return isNegative ? -reverse : reverse;
};

console.log(reverseNum(-123));