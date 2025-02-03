// Greedy algorithm to find minimum number of coins
// Given an array of coins[] of size n and a target value sum, where coins[i] represent the coins of different denominations. You have an infinite supply of each of the coins. The task is to find the minimum number of coins required to make the given value sum. If it’s not possible to make a change, return -1.
// Examples:  
// Input: coins[] = [25, 10, 5], sum = 30
// Output: 2
// Explanation : Minimum 2 coins needed, 25 and 5  
// Input: coins[] = [9, 6, 5, 1], sum = 19
// Output: 3
// Explanation: 19 = 9 + 9 + 1
// Input: coins[] = [5, 1], sum = 0
// Output: 0
// Explanation: For 0 sum, we do not need a coin
// Input: coins[] = [4, 6, 2], sum = 5
// Output: -1
// Explanation: Not possible to make the given sum.

// Approach
// TC - O(v) or O(n log n) + O(n) and SC - O(1)
// Approach: We will keep a pointer at the end of the array i. Now while(V >= coins[i]) we will reduce V by coins[i] and add it to the ans array.
// We will also ignore the coins which are greater than V and the coins which are less than V. We consider them and reduce the value of V by coins[I].

// Solution
const minCoins = function(coins, sum) {
    // Sort coins in descending order to pick the largest one
    coins.sort((a, b) => b - a);

    let count = 0;
    let i = 0;

    while(sum > 0 && i < coins.length) {
        if(sum >= coins[i]) {
            count += Math.floor(sum / coins[i]); // take as many of this coins as possible
            sum %= coins[i]; // Reduce the sum by value used
        }
        i++; // Move to next smaller coin
    }

    return sum === 0 ? count : -1; // If sum is 0, return count, otherwise return -1 (not possible)
};

console.log(minCoins([25, 10, 5], 30)); // Output: 2
console.log(minCoins([9, 6, 5, 1], 19)); // Output: 3
console.log(minCoins([5, 1], 0)); // Output: 0
console.log(minCoins([4, 6, 2], 5)); // Output: -1