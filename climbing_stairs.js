// Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// Solution :
// How to Identify a DP problem?

// When we see a problem, it is very important to identify it as a dynamic programming problem. Generally (but not limited to) if the problem statement asks for the following:

// Count the total number of ways
// Given multiple ways of doing a task, which way will give the minimum or the maximum output.
// We can try to apply recursion. Once we get the recursive solution, we can go ahead to convert it to a dynamic programming one.

// Steps To Solve The Problem After Identification

// Once the problem has been identified, the following three steps comes handy in solving the problem:

// Try to represent the problem in terms of indexes.
// Try all possible choices/ways at every index according to the problem statement.
// If the question states
// Count all the ways - return sum of all choices/ways.
// Find maximum/minimum- return the choice/way with maximum/minimum output.
// Using these steps to solve the problem “Climbing Stairs”

// Step 1: We will assume n stairs as indexes from 0 to N.


// Step 2: At a single time, we have 2 choices: Jump one step or jump two steps. We will try both of these options at every index.


// Step 3: As the problem statement asks to count the total number of distinct ways, we will return the sum of all the choices in our recursive function.

// The base case will be when we want to go to the 0th stair, then we have only one option.

// The basic pseudo-code for the problem will be given as:


// There will be one more edge-case when n=1, if we call f(n-2) we will reach stair numbered -1 which is not defined, therefore we add an extra test case to return 1 ( the only way) when n=1.


// If we clearly observe the pseudo-code, we see that it almost matches the problem “fibonacci numbers” discussed in Dynamic Programming Introduction ! So the readers can follow that article to understand the approach used for the dynamic programming solution after the recursive solution.

// Steps for the Tabulation approach.

// Declare a dp[] array of size n+1.
// First initialize the base condition values, i.e i=0 and i=1 of the dp array as 1.
// Set an iterative loop that traverses the array( from index 2 to n) and for every index set its value as dp[i-1] + dp[i-2]. 

// Solution 
// BF(Naive) Using recursion - TC - O(n^2)  and SC - O(n)

const bfClimbStairs = function(n) {
    // base case
    if(n <= 1) return 1;

    // recursive case
    return bfClimbStairs(n - 1) + bfClimbStairs(n - 2);
};


// Bottom up approach - Dynamic Programming - TC - O(n) and SC - O(n)
const dpClimbStairs = function(n) {
    // base or edge case
    if(n <= 1) return 1;

    // create a dp arr of size n + 1 to store the no of ways
    let dp = new Array(n + 1);

    // initialize the first two index with 1
    dp[0] = 1;
    dp[1] = 1;

    // Fill the arr iteratively
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

// Space optimized approach - TC - O(n) and SC - O(1)
const climbStairs = function(n) {
    // base case 
    if(n <= 1) return 1;

    // to store the prev ways
    let prev1 = 1;
    let prev2 = 1;

    // iterate
    for(let i = 2; i <= n; i++) {
        let cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
    }

    return prev1;
};

const n = 3;
console.log("Bf ans:", bfClimbStairs(n));
console.log("DP ans:", dpClimbStairs(n));
console.log("Space optimized ans:", climbStairs(n));