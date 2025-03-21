// Left and right rotate an array by D places
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

// Approach - BF
// Using an temp array
// For Rotating the Elements to left
// Step 1: Copy the first k elements into the temp array.
// Step 2: Shift the remaining elements to the front.
// Step 3: Copy temp elements to the end of the array.

// Solution
// TC - O(k) + O(n - k) + O(k) = O(n) and SC - O(k)

const leftRotate = function (arr, k) {
  let n = arr.length;
  k = k % n; // we are doing this because if k = n or k is multiple of n, it will rotate and come to the same place
  // base cases
  if(n === 0) return;
  if(k > n) return;
  let temp = new Array(k);
  // Step 1
  for(let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  // Step 2
  for(let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  // Step 3
  for(let i = 0; i < k; i++) {
    arr[n - k + i] = temp[i];
  }
  return arr;
};

// Approach - BF
// Using an temp array
// For Rotating the Elements to right
// Step 1: Copy the last k elements into the temp array.
// Step 2: Shift the remaining elements to the end.
// Step 3: Copy temp elements to the front of the array.

// Solution
// TC - O(k) + O(n - k) + O(k) = O(n) and SC - O(k)

const rightRotate = function(arr, k) {
    let n = arr.length;
    k = k % n;
    // base cases
    if(n === 0) return;
    if(k > n) return;
    let temp = new Array(k);
    // Step 1
    for(let i = n - k; i < n; i++) {
        temp[i - n + k] = arr[i];
    }
    // Step 2
    for(let i = n - k - 1; i >= 0; i--) {
        arr[i + k] = arr[i];
    }
    // Step 3
    for(let i = 0; i < k; i++) {
        arr[i] = temp[i];
    }
    return arr;
};

// Apporach - Optimal
// Using Reversal Algorithm
// For Rotating Elements to left
// Step 1: Reverse the first k elements of the array
// Step 2: Reverse the last n-k elements of the array.
// Step 3: Reverse the whole array.

// Solution
// TC - O(k) + O(n - k) + O(n) = O(2n) = O(n) and SC - O(1)

// Helper function
const reverse = function(arr, start, end) {
    while(start < end) {
        // Swap the elements
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
    return arr;
};

const reverseLeft = function(arr, k) {
    let n = arr.length;
    // base case
    if(n === 0) return arr;
    // to handle k > n
    k = k % n; 
    // no rotation required
    if(k === 0) return arr;

    // Step 1
    reverse(arr, 0, k - 1);

    // Step 2
    reverse(arr, k, n - 1);

    // Step 3
    reverse(arr, 0, n - 1);

    return arr;
};

// Apporach - Optimal
// Using Reversal Algorithm
// For Rotating Elements to right
// Step 1: Reverse the last k elements of the array
// Step 2: Reverse the first n-k elements of the array.
// Step 3: Reverse the whole array.

// Solution
// TC - O(k) + O(n - k) + O(n) = O(2n) = O(n) and SC - O(1)

const reverseRight = function(arr, k) {
    let n = arr.length;
    // base case
    if(n === 0) return arr;
    // to handle k > n
    k = k % n;
    // no rotation required
    if(k === 0) return arr;

    // Step 1
    reverse(arr, 0, n - k - 1);

    // Step 2
    reverse(arr, n - k, n - 1);

    // Step 3
    reverse(arr, 0, n - 1);

    return arr;
};


const arr1 = [1, 2, 3, 4, 5, 6, 7], k = 3;
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const arr3 = [1, 2, 3, 4, 5, 6, 7];
const arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log("Left rotate by k places:", leftRotate(arr1, k));
console.log("Right rotate by k places:", rightRotate(arr2, k));
console.log("Left rotate by k places(optimal):", reverseLeft(arr3, k));
console.log("Right rotate by k places(optimal):", reverseRight(arr3, k));