// Fibonacci Number
// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Approach - Using Iterative Approach
// Solution
// TC - O(n) and O(n)

const fibIterative = function(n) {
    // base case
    if(n <= 1) return n;

    let res = [];
    res[0] = 0;
    res[1] = 1;

    for(let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2];
    }

    return res[n];
};


// Approach - Using Recursive Approach
// Solution
// TC - O(2^n) and O(n)

const fibRecursive = function(n) {
    // base case
    if(n <= 1) return n;

    let last = fibRecursive(n - 1);
    let sLast = fibRecursive(n - 2);

    return last + sLast;
};

// Approach - Using Space Optimized Approach (Optimal)
// Solution
// TC - O(n) and O(1)

const fib = function(n) {
    // base case
    if(n <= 1) return n;

    let cur = 1, prev = 0;

    for(let i = 2; i <= n; i++) {
        let next = prev + cur;
        prev = cur;
        cur = next;
    }

    return cur;
};

const n = 3;
console.log("Using Iterative aproach:", fibIterative(n));
console.log("Using Recursive aproach:", fibRecursive(n));
console.log("Using Space Optimized aproach:", fib(n));