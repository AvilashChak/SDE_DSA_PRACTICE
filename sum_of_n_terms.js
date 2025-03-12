// Sum of first N numbers
// Given an integer n, calculate the sum of series 13 + 23 + 33 + 43 + … till n-th term.

// Examples:

// Input: n = 5
// Output: 225
// Explanation: 13 + 23 + 33 + 43 + 53 = 225
// Input: n = 7
// Output: 784
// Explanation: 13 + 23 + 33 + 43 + 53 + 63 + 73 = 784

// Solution 
// Approach - Recursion
// TC - O(n)  and SC - O(n)

const sumOfNums = function(n) {
    return sum(1, n);
};

const sum = function(i, n) {
    // base case
    if(i > n) return 0;
    return i*i*i + sum(i + 1, n);
};


// Solution 
// Approach - Iterative
// TC - O(n)  and SC - O(1)

const sumOfNumsIterative = function(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i*i*i;
    }
    return sum;
};

// Solution 
// Approach - Parameterised Way 1 to N
// TC - O(n)  and SC - O(n)

const sumOfNumsParam1 = function(n) {
    return sumParam1(1, n, 0);
};

const sumParam1 = function(i, n, sum) {
    // base case
    if(i > n) return sum;
    return sumParam1(i + 1, n, sum + (i * i * i));
};

// Solution 
// Approach - Parameterised Way N to 1
// TC - O(n)  and SC - O(n)

const sumOfNumsParam2 = function(n) {
    return sumParam2(n, 0);
};

const sumParam2 = function(i, sum) {
    // base case
    if(i < 1) return sum;
    return sumParam2(i - 1, sum + (i * i * i));
};

// Solution 
// Approach - Functional
// TC - O(n)  and SC - O(n)

const sumOfNumsFunc = function(n) {
    // base case
    if(n === 0) return 0;
    return n * n * n + sumOfNumsFunc(n - 1);
};

console.log("Recursion:", sumOfNums(7));
console.log("Iterative:", sumOfNumsIterative(7));
console.log("Parameterised Way 1 to N:", sumOfNumsParam1(7));
console.log("Parameterised Way N to 1:", sumOfNumsParam2(7));
console.log("Functional:", sumOfNumsFunc(7));