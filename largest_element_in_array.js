// Largest Element in Array
// Given an array arr[]. The task is to find the largest element and return it.
// Examples:
// Input: arr[] = [1, 8, 7, 56, 90]
// Output: 90
// Explanation: The largest element of the given array is 90.
// Input: arr[] = [5, 5, 5, 5]
// Output: 5
// Explanation: The largest element of the given array is 5.
// Input: arr[] = [10]
// Output: 10
// Explanation: There is only one element which is the largest.

// Approach
// Brutte Force - TC - O(N log N) and SC - O(1)
// In this approach we will sort the arr and the last element will be the largest.

// Solution
const bfLargestElementInArray = function(arr) {
    arr.sort((a, b) => a- b);
    let n = arr.length - 1;
    console.log("BF largest element in a array is: ", arr[n]);
};

const nums = [1, 8, 7, 56, 90];
bfLargestElementInArray(nums);

// Optimal - TC - O(N) and SC - O(1)
// We will take a variable largest and traverse the arr and check with the index. When we find the largest we will return.
const largestElementInArray = function(arr) {
    let n = arr.length;
    let largest = arr[0];

    for(let i = 0; i < n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
};

console.log("Largest: ", largestElementInArray(nums));