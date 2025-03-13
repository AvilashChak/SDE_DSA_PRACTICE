// Frequency of the Most Frequent Element

//The frequency of an element is the number of times it occurs in an array.

// You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

// Return the maximum possible frequency of an element after performing at most k operations.

// Example 1:

// Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.
// Example 2:

// Input: nums = [1,4,8,13], k = 5
// Output: 2
// Explanation: There are multiple optimal solutions:
// - Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
// - Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
// - Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
// Example 3:

// Input: nums = [3,9,6], k = 2
// Output: 1

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 1 <= k <= 105

// Solution

// Approach
// This problem can be solved efficiently using sorting and a sliding window (or two-pointer technique).
// We sort the array first.
// We use a sliding window to track the range of elements we can increment (spending at most k operations).

// TC - O(n log n) + O(n) = O(n log n) and SC - O(1) 

const maxFreq = function(arr, k) {
    let n = arr.length;
    arr.sort((a, b) => a - b);

    let left = 0;
    let total = 0;  // Total increments needed to bring all numbers in window to nums[right]
    let maxFreq = 1;

    for(let right = 1; right < n; right++) {
        // Increment total by the difference between nums[right] and nums[right - 1]
        // multiplied by the window size (right - left)
        total = total + ((arr[right] - arr[right - 1]) * (right - left));

        // If total > k, shrink the window from the left
        while(total > k) {
            total = total - (arr[right] - arr[left]);
            left++;
        }

        maxFreq = Math.max(maxFreq, right - left + 1);
    }

    // Update max frequency found so far
    return maxFreq;
};

const nums = [1,2,4], k = 5;
console.log("Max Frequency is:", maxFreq(nums, k));