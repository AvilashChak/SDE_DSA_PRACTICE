// Find the duplicate in an array of N+1 integers

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and using only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

// Approach

// Brute Force Approach

// Using sorting

// TC - O(n log n) + O(n) and SC - O(n) 
var findDuplicate = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a - b);

    for(let i = 0; i < n; i++) {
        if(nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};

const nums1 = [2,5,9,6,9,3,8,9,7,1];
console.log("BF approach:", findDuplicate(nums1));


// Better - Approach

// Approach to Finding the Duplicate Number (Using a Set)
// Since we need to find the duplicate number without modifying the array and using a simple method, we can use a Hash Set to track seen numbers.

// Steps to Solve the Problem
// Initialize an empty Set to keep track of numbers we have already seen.
// Iterate through the array:
// If a number is already present in the set, return it immediately (this is the duplicate).
// Otherwise, add the number to the set.
// If no duplicate is found, return null (this is just a safeguard, though the problem guarantees a duplicate).




// Solution
// BF - TC - O(n) and SC - O(n)

const duplicate = function(arr) {
    let n = arr.length;

    let set = new Set();

    for(let i = 0; i < n; i++) {
        if(set.has(arr[i])) {
            return arr[i]; // return the first duplicate found
        }
        set.add(arr[i]);
    }
    return null; // if no duplicates are found
};

const nums = [2,5,9,6,9,3,8,9,7,1];
console.log("Better approach:", duplicate(nums));



// Optimal Approach

// The optimal approach is to use Linked List Cycle method. So we will start from 2 and we will go to the 2nd index and write down the element i.e 9. if we continue the pattern/cycle we will reach to a point when we colide with 9. 
// So after creating this cycle we will use the tortoise method. Here we take 2 pointers one is the slow pointer and the fast pointer. the slow pointer always moves 1 step and the fast moves 2 steps ahead. So after continuing this pattern we will reach to a stage where both the pointers colide with each other and stops moving. And then we need to take the fast pointer and place it in the first number and after that we will not follow the tortoise method. We will move both the pointers with 1 step and then we will get the point where they colide and say that, that element is our duplicate number. TC O(n) SC O(n). We are not actually creating the cycle and travesering the given array to move the slow and fast pointers.



// Solution
// TC - O(n) and SC - O(1)
const findDuplicates = function(arr) {
    let slow = arr[0];
    let fast = arr[0];

    while(true) {
        slow = arr[slow];
        fast = arr[arr[fast]];

        if(slow === fast) {
            break;
        }
    }

    fast = arr[0];

    while(slow !== fast) {
        slow = arr[slow];
        fast = arr[fast];
    }

    return slow;
};

const numArr = [2,5,9,6,9,3,8,9,7,1];
const result = findDuplicates(numArr);
console.log("The duplicate is: ", result);