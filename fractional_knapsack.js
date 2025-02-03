// Fractional Knapsack Problem
// Given two arrays, val[] and wt[], representing the values and weights of items, and an integer capacity representing the maximum weight a knapsack can hold, determine the maximum total value that can be achieved by putting items in the knapsack. You are allowed to break items into fractions if necessary.
// Return the maximum value as a double, rounded to 6 decimal places.
// Examples :
// Input: val[] = [60, 100, 120], wt[] = [10, 20, 30], capacity = 50
// Output: 240.000000
// Explanation: Take the item with value 60 and weight 10, value 100 and weight 20 and split the third item with value 120 and weight 30, to fit it into weight 20. so it becomes (120/30)*20=80, so the total value becomes 60+100+80.0=240.0 Thus, total maximum value of item we can have is 240.00 from the given capacity of sack. 
// Input: val[] = [60, 100], wt[] = [10, 20], capacity = 50
// Output: 160.000000
// Explanation: Take both the items completely, without breaking. Total maximum value of item we can have is 160.00 from the given capacity of sack.
// Input: val[] = [10, 20, 30], wt[] = [5, 10, 15], capacity = 100
// Output: 60.000000
// Explanation: In this case, the knapsack capacity exceeds the combined weight of all items (5 + 10 + 15 = 30). Therefore, we can take all items completely, yielding a total maximum value of 10 + 20 + 30 = 60.000000.

// Approach - TC - O(N log N) + O(N) and SC - O(1)
// The greedy method to maximize our answer will be to pick up the items with higher values. Since it is possible to break the items as well we should focus on picking up items having higher value /weight first. To achieve this, items should be sorted in decreasing order with respect to their value /weight. Once the items are sorted we can iterate. Pick up items with weight lesser than or equal to the current capacity of the knapsack. In the end, if the weight of an item becomes more than what we can carry, break the item into smaller units. Calculate its value according to our current capacity and add this new value to our answer.

// Solution
const fractionalKnapsack = function(val, wt, capacity) {
    // create an array of items with val, weight and ratio of val/weight
    let items = val.map((val, i) => ({
        val: val,
        wt: wt[i],
        ratio: val / wt[i]
    }));

    // sort the arr in decreasing order of val/weight ratio
    items.sort((a, b) => b.ratio - a.ratio);

    let totalValue = 0.0;

    for(let i = 0; i < items.length; i++) {
        if(capacity === 0) break; // If knapsack is full stop

        if(items[i].wt <= capacity) {
            // take the whole item
            totalValue += items[i].val;
            capacity -= items[i].wt;
        }
        else {
            // take the fraction of the item
            totalValue += items[i].ratio * capacity;
            capacity = 0;
        }
    }

    return totalValue.toFixed(6);
};


let val = [60, 100, 120];
let wt = [10, 20, 30];
let capacity = 50;

console.log(fractionalKnapsack(val, wt, capacity));

