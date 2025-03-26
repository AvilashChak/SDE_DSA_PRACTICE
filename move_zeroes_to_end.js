// Move Zeros to end
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

// Approach
// BF - Using Temp Array

// Solution
// TC - O(n) + O(x) + O(n - x) = O(2n) and SC - O(n)

const move0s = function(arr) {
    let n = arr.length;
    let temp = [];

    // copy the non-zero elements in the temp arr
    for(let i = 0; i < n; i++) {
        if(arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    let nz = temp.length;

    // copy the temp elements in the original arr in the first nz places
    for(let i = 0; i < nz; i++) {
        arr[i] = temp[i];
    }

    // move the 0s in the end
    for(let i = nz; i < n; i++) {
        arr[i] = 0;
    }

    return arr;
};

// Approach
// Optimal - Using Two Pointers

// Solution
// TC - O(n) and SC - O(1)

const moveZeroes = function(arr) {
    let n = arr.length;
    let j = -1;

    // Place the pointer j
    for(let i = 0; i < n; i++) {
        if(arr[i] === 0) {
            j = i;
            break;
        }
    }

    // No non-zero elements
    if(j === -1) return arr;

    // move the pointers i and j and swap accordingly
    for(let i = j + 1; i < n; i++) {
        if(arr[i] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
};

const arr = [0,1,0,3,12];
console.log("Moves 0s:", move0s(arr));
console.log("moveZeroes:", moveZeroes(arr));