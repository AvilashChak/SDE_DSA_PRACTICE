// Print all divisors
// Given a positive integer n, The task is to find the value of Σi F(i) where i is from 1 to n and function F(i) is defined as the sum of all divisors of i.

// Examples:

// Input: n = 4
// Output: 15
// Explanation:
// F(1) = 1
// F(2) = 1 + 2 = 3
// F(3) = 1 + 3 = 4
// F(4) = 1 + 2 + 4 = 7
// So, F(1) + F(2) + F(3) + F(4)
//     = 1 + 3 + 4 + 7 = 15
// Input: n = 5
// Output: 21
// Explanation:
// F(1) = 1
// F(2) = 1 + 2 = 3
// F(3) = 1 + 3 = 4
// F(4) = 1 + 2 + 4 = 7
// F(5) = 1 + 5 = 6
// So,  F(1) + F(2) + F(3) + F(4) + F(5)
//     = 1 + 3 + 4 + 7 + 6 = 21
// Input: n = 1
// Output: 1
// Explanation:
// F(1) = 1
// So,  F(1) = 1 

// Brute Force
// TC - O(n^2) and SC - O(1)

const sumOfAllDivisors = function(i) {
    let sum = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            sum = sum + j;
        }
    }
    return sum;
};

const sumOfDivisors = function(n) {
    let totalSum = 0;
    for(let i = 1; i <= n; i++) {
            totalSum = totalSum + sumOfAllDivisors(i);
    }
    return totalSum;
};

// Optimized Approach
// TC - O(n log n) and SC - O(1)

const optimizedSumOfDivisors = function(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum = sum + (Math.floor(n / i) * i);
    }

    return sum;
};

console.log("Brute force ans is:", sumOfDivisors(5));
console.log("Optimized ans is:", optimizedSumOfDivisors(5));