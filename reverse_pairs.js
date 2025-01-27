// Reverse Pairs

// Given an integer array nums, return the number of reverse pairs in the array.
// A reverse pair is a pair (i, j) where:
// 0 <= i < j < nums.length and
// nums[i] > 2 * nums[j].
// Example 1:
// Input: nums = [1,3,2,3,1]
// Output: 2
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 3, nums[4] = 1, 3 > 2 * 1
// Example 2:
// Input: nums = [2,4,3,5,1]
// Output: 3
// Explanation: The reverse pairs are:
// (1, 4) --> nums[1] = 4, nums[4] = 1, 4 > 2 * 1
// (2, 4) --> nums[2] = 3, nums[4] = 1, 3 > 2 * 1
// (3, 4) --> nums[3] = 5, nums[4] = 1, 5 > 2 * 1

// Approach
// BF - TC - O(n2) and SC - O(1)
// We need to loop the entire array for 2 times and keep iterate over each element and check.

// Solution
const bfReversePairs = function(nums) {
    let count = 0;
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            if(nums[i] > 2 * nums[j]) {
                count++;
            }
        }
    }
    return count;
};

const arr1 =  [1,3,2,3,1];
const bfResult = bfReversePairs(arr1);
console.log("BF result: ", bfResult);

// Optimal - TC - (2n log n) and SC - O(n)
// We will use merge sort algo. And need to add one more function countPairs().
const merge = function(arr, low, mid, high) {
    let n = arr.length;
    let left = low;
    let right = mid + 1;
    // [low...mid]
    // [mid + 1...high]
    let temp = [];
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    while(right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
};

const countPairs = function(arr, low, mid, high) {
    let count = 0;
    let right = mid + 1;
    for(let i = low; i <= mid; i++) {
        while(right <= high && arr[i] > 2 * arr[right]) {
            right++;
        }
        count += (right - (mid + 1));
    }
    return count;
};

const mergeSort = function(arr, low, high) {
    let count = 0;
    if(low >= high) return count;
    let mid = Math.floor((low + high)/2);
    count += mergeSort(arr, low, mid);
    count += mergeSort(arr, mid + 1, high);
    count += countPairs(arr, low, mid, high);
    merge(arr, low, mid, high);
    return count;
};

const reversePairs = function(arr, n) {
    return mergeSort(arr, 0, n - 1);
};

const arr2 = [40,25,19,12,9,6,2]; 
const rp = reversePairs(arr2, 7);
console.log("Output is: ", rp);