// Check if Array Is Sorted and Rotated
// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
// There may be duplicates in the original array.
// Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
// Example 2:
// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:
// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

// Approach - TC - O(N) and SC - O(1)
// We need to traverse the arr and need to check if arr[1] <= arr[0].

// Solution
const sorted = function(arr) {
    let n = arr.length;
    for(let i = 1; i < n; i++) {
        if(arr[i] >= arr[i - 1]) {
            return true;
        }
        else {
            return false;
        }
    }
    return true;
};

// Solution
const sortedAndRotated = function(arr) {
    let n = arr.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }
    return count <= 1;
}

const nums = [3,4,5,1,2];
const nums1 = [2,1,3,4];
console.log("Is sorted? ", sorted(nums));
console.log("Is sorted and rotated? ", sortedAndRotated(nums1));