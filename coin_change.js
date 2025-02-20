// Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

 

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1
// Example 3:

// Input: coins = [1], amount = 0
// Output: 0


// Tabulation Approach - DP
// Algorithm / Intuition

// First, we need to initialize the base conditions of the recursive solution.
// At ind==0, we are considering the first element, if the target value is divisible by the first coin’s value, we set the cell's value as 1 or else 0.
// Next, we are done for the first row, so our ‘ind’ variable will move from 1 to n-1, whereas our ‘target’ variable will move from 0 to ‘T’. We will set the nested loops to traverse the dp array.
// Inside the nested loops, we will apply the recursive logic to find the answer of the cell.
// When the nested loop execution has ended, we will return dp[n-1][T] as our answer.

// Solution
// TC - O(n * T) and SC - O(n * T)

const coinChangeAndWays = function(arr, n, T) {
    // Create a 2D arr 'ways' to count the number of ways to make each amount
    const ways = Array.from({ length: n }, () => Array(T + 1).fill(0));

    // Create a 1D arr 'minCoins' to store the min coins required to make each amount
    const minCoins = new Array(T + 1).fill(Infinity);

    // base case: 0 coins needed to make amount 0
    minCoins[0] = 0;

    // Initializing base condition for ways: Only the first coin considered
    for(let i = 0; i <= T; i++) {
        if(i % arr[0] === 0) {
            ways[0][i] = 1;
        }
    }

    // Filling dp table for ways
    for(let ind = 1; ind < n; ind++) {
        for(let target = 0; target <= T; target++) {
            const notTaken = ways[ind - 1][target];

            let taken = 0;
            if(arr[ind] <= target) {
                taken = ways[ind][target - arr[ind]];
            }

            ways[ind][target] = notTaken + taken;
        }
    }

    // Filling dp table for minCoins
    for(let coin of arr) {
        for(let i = coin; i <= T; i++) {
            minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
        }
    }

    // The final values
    const minCoinsResult = minCoins[T] === Infinity ? -1 : minCoins[T];
    const waysResult = ways[n - 1][T];

    return { minCoins: minCoinsResult, ways: waysResult };
};


// Space Optimization Approach
// Algorithm / Intuition
// If we closely look the relation,

// dp[ind][target] =  dp[ind-1][target] ,dp[ind-1][target-arr[ind]]

// We see that to calculate a value of a cell of the dp array, we need only the previous row values (say prev). So, we don’t need to store an entire array. Hence we can space optimize it.

// Note: We first need to initialize the first row as we had done in the tabulation approach.

// Solution
// TC - O(n * T) and SC - O(T)

const coinChangeAndWaysOptimized = function(arr, n, T) {
    // 1D DP arr to count no of ways to make amount T
    let ways = new Array(T + 1).fill(0);

    // base case: 1 way to make amount 0(by choosing nothing)
    ways[0] = 1; 

    // 1D Dp arr to store the min no of coins to make the amount T
    let minCoins = new Array(T + 1).fill(Infinity);

    // base case: 0 coins needed for amount 0
    minCoins[0] = 0;

    // compute the no of ways to make each amount
    for(let coin of arr) {
        for(let i = coin; i <= T; i++) {
            ways[i] = ways[i] + ways[i - coin];
        }
    }

    // compute min coins to make amount
    for(let coin of arr) {
        for(let i = coin; i <= T; i++) {
            minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
        }
    }

    // Final result
    const minCoinsResult = minCoins[T] === Infinity ? -1 : minCoins[T];
    const waysResult = ways[T];

    return { minCoins: minCoinsResult, ways: waysResult };
};



// Example usage:
console.log(coinChangeAndWays([1, 2, 5], 3, 11)); // { minCoins: 3, totalWays: 11 }
console.log(coinChangeAndWays([2], 1, 3)); // { minCoins: -1, totalWays: 0 }
console.log(coinChangeAndWays([1, 2, 3], 3, 4)); // { minCoins: 2, totalWays: 4 }
console.log("Below is the optimized approach result:");
console.log(coinChangeAndWaysOptimized([1, 2, 5], 3, 11)); // { minCoins: 3, totalWays: 11 }
console.log(coinChangeAndWaysOptimized([2], 1, 3)); // { minCoins: -1, totalWays: 0 }
console.log(coinChangeAndWaysOptimized([1, 2, 3], 3, 4)); // { minCoins: 2, totalWays: 4 }