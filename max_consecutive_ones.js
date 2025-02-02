// Max Consecutive Ones
// Given a binary array nums, return the maximum number of consecutive 1's in the array.
// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

// Approach
// It's straight forward. We will take a var max = 0. And return it.
const maxConsecutive = function(arr) {
    let n = arr.length;
    let max = 0, count = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] === 1) {
            count++;
            max = Math.max(max, count);
        }
        else {
            count = 0;
        }
    }

    return max;
};

const nums = [1,1,0,1,1,1];
console.log("Ans is: ", maxConsecutive(nums));