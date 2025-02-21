// Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence

// Example 1:

// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:

// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:

// Input: nums = [7,7,7,7,7,7,7]
// Output: 1

// What is the Longest Increasing Subsequence?

// The longest increasing subsequence is described as a subsequence of an array where:

// All elements of the subsequence are in increasing order.
// This subsequence itself is of the longest length possible.

// Approach 1: Using Brute Force

// We are given an array arr[]. To find the longest increasing subsequence, the brute force method that comes to our mind is to generate all subsequences and then manually filter the subsequences whose elements come in increasing order and then return the longest such subsequence. 

// This naive approach will give us the correct answer but to generate all the subsequences, we will require exponential ( 2n ) time. Therefore we will try some other approaches.

// Approach 2: Using Dynamic Programming

// We would want to try something that can give us the longest increasing subsequence on the way of generating all subsequences. To generate all subsequences we will use recursion and in the recursive logic we will figure out a way to solve this problem.

// Steps to form the recursive solution: 

// Step 1: Express the problem in terms of indexes.

// Step 2: Explore all possibilities at a given index
// At every index, we have two choices based on the pick/non-pick technique
// Do not consider the current element in the subsequence
// Consider the current element in the subsequence

// Step 3:  Return the maximum of the choices

// As we have to find the length of the longest increasing subsequence, we will return the maximum of the above-discussed two cases.

// Base Case: 

// When ind==n,
// It means that we have considered all the elements of the array and there are no more elements left to explore, therefore we return 0.

// Writing the tabulation approach for finding LIS.

// Problem Link: Longest Increasing Subsequence

// To convert the memoization approach to a tabulation one, create a dp array with the same size as done in memoization i.e dp[N][N+1]. 

// Now the base case is if(ind==n), we return 0. We can initialize the entire dp array as 0. In this way, we need to write the base case explicitly.
// The changing parameters in the recursive code are ind and prev_index. We will write them in the opposite direction of memoization. 
// We will set for a loop of ind to range from n-1 to 0.
// If we look closely at the recursive tree, we will see a pattern that the second parameter, prev_index is always smaller than the first parameter ind. Therefore we will write the for loop for prev_index to start from ind-1 till -1.

// Next, we write the recursive logic inside the nested loops.
// We need to keep in that mind that we are storing prev_index in the dp array by making a coordinate shift (discussed in /** link to dp - 41 ** /).
// At last, we will print dp[0][0] as our answer.

// Solution
// TC - O(n^2) and SC - O(n^2)

const longestIncreasingSubsequence = function(arr) {
    let n = arr.length;

    // create a 2D dp of n + 1 size
    let dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    // Traverse the arr in reverse order
    for(let ind = n - 1; ind >= 0; ind--) {
        for(let prev_index = ind - 1; prev_index >= -1; prev_index--) {
            // Case 1: exclude the current element
            let notTake = dp[ind + 1][prev_index + 1];

            // Case 2: Include the current element(only if it forms an increasing sequence)
            let take = 0;
            if(prev_index === -1 || arr[ind] > arr[prev_index]) {
                take = 1 + dp[ind + 1][ind + 1];
            }

            // Store the max of taking or not taking the element
            dp[ind][prev_index + 1] = Math.max(take, notTake);
        }
    }

    return dp[0][0]; // The LIS length from index 0
};


// Space Optimization Approach

// If we closely we are using two rows: dp[ind+1][ ], dp[ind][ ],

// So we are not required to contain an entire array, we can simply have two rows next and cur where next corresponds to dp[ind+1] and cur to dp[ind].

// After declaring next and cur, replace dp[ind+1] to next and dp[ind] with cur and after the inner loop executes, we will set next = cur, so that the cur row can serve as next for the coming iteration.

// Solution
// TC - O(n^2) and SC - O(n)

const lis = function(arr) {
    let n = arr.length;

    // we will take two variables and convert the 2D arr in 1D
    let next = new Array(n + 1).fill(0);
    let cur = new Array(n + 1).fill(0);

    // Traverse the arr in reverse order
    for(let ind = n - 1; ind >= 0; ind--) {
        for(let prev_index = ind - 1; prev_index >= -1; prev_index--) {
            // case 1: not pick the current element
            let notPick = next[prev_index + 1];

            // case 2: pick the current element(if it's increasing)
            let pick = 0;
            if(prev_index === -1 || arr[ind] > arr[prev_index]) {
                pick = 1 + next[ind + 1];
            }

            // store the max of pick and not pick
            cur[prev_index + 1] = Math.max(pick, notPick);
        }
        // copy cur row to next row for the next iteration
        next = [...cur];
    }

    return cur[0]; // LIS lenth starting from index 0
};

// Test cases
console.log(longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18], 8)); // Output: 4
console.log(longestIncreasingSubsequence([0, 1, 0, 3, 2, 3], 6)); // Output: 4
console.log(longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7], 7)); // Output: 1
console.log("Space Optimized Approach");
console.log(lis([10, 9, 2, 5, 3, 7, 101, 18], 8)); // Output: 4
console.log(lis([0, 1, 0, 3, 2, 3], 6)); // Output: 4
console.log(lis([7, 7, 7, 7, 7, 7, 7], 7)); // Output: 1