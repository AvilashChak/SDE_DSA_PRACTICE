// Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.
// Example 1:
// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:
// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

// Approach
// BF - TC - O(2^t * k + n log n) and SC - O(k * x)
// It's same as the combination sum one just as we need only unique backTrack(index + 1, sum + candidates[index], arr); 
// change we need to make

const combinationSumTwo = function(candidates, target) {
    let result = [];

    // sort the arr to handle duplicates easily
    candidates.sort((a, b) => a - b);

    function backTrack(start, sum, arr) {
        // base case
        if(sum === target) {
            result.push([...arr]);
            return;
        }

        if(sum > target) return;

        for(let i = start; i < candidates.length; i++) {
            // to skip duplicates
            if(i > start && candidates[i] === candidates[i - 1]) continue;

            arr.push(candidates[i]);
            backTrack(i + 1, sum + candidates[i], arr); // if we pick
            arr.pop(); // undo the choice
        }
    };

    backTrack(0, 0, []);
    return result;
};

console.log(combinationSumTwo([10,1,2,7,6,1,5], 8));