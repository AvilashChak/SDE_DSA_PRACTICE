// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Approach
// Initialize minPrice:
// Start with the first price in the array (prices[0]) as the initial minimum price since no prices before it exist.
// Initialize maxProfit:
// Set it to 0 initially since, at the start, no profit has been made (no transactions yet).
// Iterate Over Prices (Day 1 to n-1):
// Case 1: If the current price (prices[i]) is less than the current minPrice:
// Update minPrice to the current price since this is a better buying opportunity.
// Case 2: If the difference between the current price and minPrice is greater than the current maxProfit:
// Update maxProfit to this new difference since it represents a better selling opportunity for maximum profit.
// Return maxProfit:
// After looping through the entire array, return the maxProfit, which will represent the maximum achievable profit.

// Solution
const maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < minPrice) {
            minPrice = prices[i];
        } else if(prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

const pricesArr = [7,1,5,3,6,4];
const result = maxProfit(pricesArr);
console.log(result);