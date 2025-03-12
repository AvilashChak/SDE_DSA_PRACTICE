// Factorial of N numbers and
// Factorials Less than or Equal to n

// A number n is called a factorial number if it is the factorial of a positive integer. For example, the first few factorial numbers are 1, 2, 6, 24, 120,
// Given a number n, the task is to return the list/vector of the factorial numbers smaller than or equal to n.

// Examples:

// Input: n = 3
// Output: 1 2
// Explanation: The first factorial number is 1 which is less than equal to n. The second number is 2 which is less than equal to n,but the third factorial number is 6 which is greater than n. So we print only 1 and 2.
// Input: n = 6
// Output: 1 2 6
// Explanation: The first three factorial numbers are less than equal to n but the fourth factorial number 24 is greater than n. So we print only first three factorial numbers.

// Solution
// Approach - Recursion
// TC - O(log n) and SC - O(2(log n)) 

const fact = function(n) {
    let arr = [];
    factNum(n, 1, 1, arr);
    return arr;
};

const factNum = function(n, i, fact, arr) {
    // base case
    if(fact > n) return arr;
    arr.push(fact);
    return factNum(n, i + 1, fact * (i + 1), arr);
};

// Solution
// Approach - Iterative
// TC - O(log n) and SC - O(log n) 

const factNums = function(n) {
    let arr = [];
    let fact = 1;
    for(let i = 1; fact <= n; i++) {
        arr.push(fact);
        fact = fact * (i + 1);
    }
    return arr;
};

const n = 6;
console.log(`Factorial of ${n} is:`, fact(n));
console.log(`Factorial Nums <= ${n} is:`, factNums(n));