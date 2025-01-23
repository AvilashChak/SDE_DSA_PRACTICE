// Maximum Subarray

// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Approach

// In this solution, we are using Kadane's Algorithm to find the subarray with the maximum sum. The idea behind this approach is simple:

// Start iterating through the array while maintaining a running sum (currentSum) of the subarray.
// If at any point, adding the current element (nums[i]) to the running sum results in a smaller value than the current element itself or it's negative, reset the running sum to the current element. This effectively starts a new subarray at the current index.
// Keep track of the maximum sum encountered so far (maxSum) and update it whenever the running sum exceeds it.
// To identify the subarray corresponding to the maximum sum:
// Use a start pointer to mark the beginning of the subarray.
// Use an end pointer to mark the end of the subarray.
// Use a tempStart pointer to track where a potential new subarray might start whenever the running sum is reset.
// Return both the maxSum and the subarray corresponding to it.
// This approach ensures we avoid subarrays that would reduce the overall sum (i.e., subarrays with negative cumulative sums) and focuses on finding the optimal subarray in O(n) time complexity.



// Solution
const maxSubArray = function(nums) {
    if(nums.length === 0) {
        return {
            maxSum: 0,
            subArray: []
        };
    }

    let maxSum = nums[0];
    let currentSum = nums[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for(let i = 1; i < nums.length; i++) {
        if(currentSum + nums[i] > nums[i]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
            tempStart = i;
        }

        if(currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: maxSum,
        subArray: nums.slice(start, end + 1)
    };
};


const arr = [-2,1,-3,4,-1,2,1,-5,4];
const result = maxSubArray(arr);
console.log(result);
console.log("MaxSum: ", result.maxSum);
console.log("MaxSum SubArray", result.subArray);