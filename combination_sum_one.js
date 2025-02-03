// Combination sum-1
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
// frequency of at least one of the chosen numbers is different.
// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
// Example 1:
// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:
// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:
// Input: candidates = [2], target = 1
// Output: []

// Approach
// TC - O(2^t * k) and SC - O(k * x)
// We will use pick and not pick method. 
// Solution
const combinationSumOne = function(candidates, target) {
    let result = [];

    // recursive function
    function backTrack(index, sum, arr) {
        // Base case: if the sum reaches the target, store the combination
        if(sum === target) {
            result.push([...arr]);
            return;
        }

        // if the sum exceeds the target or index is out of bounds, return
        if(sum > target || index >= candidates.length) {
            return;
        }

        // pick the current number which can be selected multiple times
        arr.push(candidates[index]);
        backTrack(index, sum + candidates[index], arr); // if we pick
        arr.pop(); // undo the choice

        // not pick the current number and move to the next one
        backTrack(index + 1, sum, arr); // if we not pick
    }

    backTrack(0, 0, []);
    return result;
};

console.log(combinationSumOne([2, 3, 6, 7], 7)); 