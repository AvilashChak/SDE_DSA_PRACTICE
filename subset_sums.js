// Subset Sums
// Given a array arr of integers, return the sums of all subsets in the list.  Return the sums in any order.
// Examples:
// Input: arr[] = [2, 3]
// Output: [0, 2, 3, 5]
// Explanation: When no elements are taken then Sum = 0. When only 2 is taken then Sum = 2. When only 3 is taken then Sum = 3. When elements 2 and 3 are taken then Sum = 2+3 = 5.
// Input: arr[] = [1, 2, 1]
// Output: [0, 1, 1, 2, 2, 3, 3, 4]
// Explanation: The possible subset sums are 0 (no elements), 1 (either of the 1's), 2 (the element 2), and their combinations.
// Input: arr[] = [5, 6, 7]
// Output: [0, 5, 6, 7, 11, 12, 13, 18]
// Explanation: The possible subset sums are 0 (no elements), 5, 6, 7, and their combinations.

// Approach
// Brute - TC - and SC -
// Generate all the subsets (Power Set - 2 to the power n * N times).
// Instead of (1 << n) we can use Math.pow(2 , n)

// Solution
const subset = function(arr) {
    let result = [];
    let n = arr.length;

    // Generate all the subsets using bitwise representation
    for(let i = 0; i < (1 << n); i++) { // Loop through all subsets
        let sum = 0;
        for(let j = 0; j < n; j++) { // Check each element
            if(i & (1 << j)) { // If j-th bit is set, include arr[j]
                sum += arr[j];
            }
        }
        result.push(sum);
    }
    return result;
};

console.log(subset([2, 3]));

// Optimal - TC - O(2 pow n + 2 pow n log(2 pow n)) and SC - O(2 pow n + 2 pow n log(2 pow n))
// We will use recursion and will have two conditions 
// 1. pick it up
// 2. not pick it up

// Solution
const subsetSums = function (arr) {
    let result = [];

    function findSubSets(index, sum) {
        // handle the base case
        if(index === arr.length) {
            result.push(sum);
            return;
        }

        // pick it up
        findSubSets(index + 1, sum + arr[index]);

        // not pick it up
        findSubSets(index + 1, sum);
    }

    findSubSets(0, 0);
    return result.sort((a, b) => a- b);
};

console.log("Optimal: ", subsetSums([2, 3]));