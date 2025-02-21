// House Robber - (Maximum sum of non-adjacent elements)
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 2:

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

// Memorization Approach
// Algorithm / Intuition
// As we need to find the sum of subsequences, one approach that comes to our mind is to generate all subsequences and pick the one with the maximum sum. 

// To generate all the subsequences, we can use the pick/non-pick technique. This technique can be briefly explained as follows:

// At every index of the array, we have two options.
// First, to pick the array element at that index and consider it in our subsequence.
// Second, to leave the array element at that index and not to consider it in our subsequence.

// First, we will try to form the recursive solution to the problem with the pick/non-pick technique. There is one more catch, the problem wants us to have only non-adjacent elements of the array in the subsequence, therefore we need to address that too.

// Steps to form the recursive solution

// Step 1: Form the function in terms of indexes: 

// We are given an array which can be easily thought of in terms of indexes. 
// We can define our function f(ind) as : Maximum sum of the subsequence starting from index 0 to index ind.
// We need to return f(n-1) as our final answer.
// Step 2: Try all the choices to reach the goal.

// As mentioned earlier we will use the pick/non-pick technique to generate all subsequences. We also need to take care of the non-adjacent elements in this step.

// If we pick an element then, pick = arr[ind] + f(ind-2). The reason we are doing f(ind-2) is because we have picked the current index element so we need to pick a non-adjacent element so we choose the index ‘ind-2’ instead of ‘ind-1’.
// Next we need to ignore the current element in our subsequence. So nonPick= 0 + f(ind-1). As we don’t pick the current element, we can consider the adjacent element in the subsequence.

// Step 3: Take the maximum of all the choices

// As the problem statement asks to find the maximum subsequence total, we will return the maximum of two choices of step2.

// Base Conditions

// The base conditions for the recursive function will be as follows:

// If ind=0, then we know to reach at index=0, we would have ignored the element at index = 1. Therefore, we can simply return the value of arr[ind] and consider it in the subsequence.
// If ind<0, this case can hit when we call f(ind-2) at ind=1. In this case we want to return to the calling function so we simply return 0 so that nothing is added to the subsequence sum.

// Once we form the recursive solution, we can use the approach told in Dynamic Programming Introduction to convert it into a dynamic programming one.

// Memoization approach

// If we observe the recursion tree, we will observe a number of overlapping subproblems. Therefore the recursive solution can be memoized to reduce the time complexity.

// Steps to convert Recursive code to memoization solution:

// Create a dp[n] array initialized to -1.
// Whenever we want to find the answer of a particular value (say n), we first check whether the answer is already calculated using the dp array(i.e dp[n] != -1 ). If yes, simply return the value from the dp array.
// If not, then we are finding the answer for the given value for the first time, we will use the recursive relation as usual but before returning from the function, we will set dp[n] to the solution we get.

// Solution
// TC - O(N) and SC - O(N)

const solveMemoi = function(ind, arr, dp) {
    // Check if the res of this index is already calculated
    if(dp[ind] !== -1) return dp[ind];
    
    // base cases
    if(ind === 0) return (dp[ind] = arr[ind]);
    if(ind < 0) return 0;

    // Calculate the maximum value either picking up or not picking up
    const pick = (ind - 2 >= 0 ? arr[ind] + solveMemoi(ind - 2, arr, dp) : arr[ind]);
    const nonPick = solveMemoi(ind - 1, arr, dp);

    // Store the result in dp arr and return it
    dp[ind] = Math.max(pick, nonPick);
    return dp[ind];
};  


const robbed = function(arr) {
    // Initialize a dp arr of size of input arr with -1
    let n = arr.length;
    let dp = new Array(n).fill(-1);

    // call the helper function with last index
    return solveMemoi(n - 1, arr, dp);
};



// Approach
// Tabulation approach - Bottom up approach
// Declare a dp[] array of size n.
// First initialize the base condition values, i.e dp[0] as 0.
// Set an iterative loop which traverses the array( from index 1 to n-1) and for every index calculate pick  and nonPick
//  And then we can set dp[i] = max (pick, nonPick)

// Solution
// TC - O(N) and SC - O(N)

const solveDp = function(n, arr, dp) {
    // Base case: Initialize the dp first element with the input arr first element
    dp[0] = arr[0];

    // Loop through the arr to fill the dp arr
    for(let i = 1; i < n; i++) {
        // Calculate the max value while picking the current element
        let pick = arr[i];
        if(i > 1) {
            pick = pick + dp[i - 2];
        }

        // Calculate the max value while not picking up the element
        let notPick = dp[i - 1];

        // Store the max of pick and notpick in the dp
        dp[i] = Math.max(pick, notPick);
    }

    // Return the result which is the last element of the dp
    return dp[n - 1];
};

const rob = function(arr) {
    let n = arr.length;
    // Initialize a DP arr with the size of input arr and fill with -1
    const dp = new Array(n).fill(-1);

    // call the solveDp function to find the maximum sum
    return solveDp(n, arr, dp);
};


// Space Optimization Approach
// Algorithm / Intuition
// Part 3: Space Optimization

// If we closely look at the values required at every iteration,

// dp[i], dp[i-1], and  dp[i-2]

// we see that for any i, we do need only the last two values in the array. So is there a need to maintain a whole array for it? 

// The answer is ‘No’. Let us call dp[i-1] as prev and dp[i-2] as prev2. Now understand the following illustration.

// Each iteration’s cur_i and prev become the next iteration’s prev and prev2 respectively.
// Therefore after calculating cur_i, if we update prev and prev2 according to the next step, we will always get the answer. 
// After the iterative loop has ended we can simply return prev as our answer.

// Solution
// TC - O(N) and SC - O(1)


const houseRobber = function(arr) {
    let n = arr.length;
    // Initialize varaibles to keep a track of the previous two max values
    let prev1 = arr[0];
    let prev2 = 0

    // Loop through the arr starting from second element
    for(let i = 1; i < n; i++) {
        // Calculate the max value while picking the current element
        let pick = arr[i];
        if(i > 1) pick = pick + prev2;

        // Calculate the max value while not picking the current element
        let nonPick = prev1;

        // Calculate the current max value and update the prev1 and prev2
        let cur = Math.max(pick, nonPick);
        prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
};



const arr = [2, 1, 4, 9];

// Call the solve function and print the result
console.log("Using Memoization approach:",robbed(arr));
console.log("Using Tabulation approach:",rob(arr));
console.log("Using Space optimization approach:",houseRobber(arr));