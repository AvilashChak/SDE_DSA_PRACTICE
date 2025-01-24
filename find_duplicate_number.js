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
// The brute force to solve this problem is by first sorting the given array. After sorting we can see that when we traverse the array by linear approach there will be one point where i == i + 1. then there we can say that that is our duplicate array. This will take the time complexity of O(n log n) and take extra space of O(1) and this will distort the array.
// Better - Then to optimize  we will create an frequency array of simillar size and initialize all with 0. So now we will update the frequecy array index by 1 with from the actual array. For say the 1st element of the array is 2 then we will update the 2nd index of the frequency array by 1. So by doing this process there will be a point when we will find the duplicate element as that element's index will already be updated by 1. Time and space complexity will be O(n) and O(n).
//  0,1,2,3,4,5,6,7,8,9 -----> index  
// [2,5,9,6,9,3,8,9,7,1]
// Optimal - The optimal approach is to use Linked List Cycle method. So we will start from 2 and we will go to the 2nd index and write down the element i.e 9. if we continue the pattern/cycle we will reach to a point when we colide with 9. 
// So after creating this cycle we will use the tortoise method. Here we take 2 pointers one is the slow pointer and the fast pointer. the slow pointer always moves 1 step and the fast moves 2 steps ahead. So after continuing this pattern we will reach to a stage where both the pointers colide with each other and stops moving. And then we need to take the fast pointer and place it in the first number and after that we will not follow the tortoise method. We will move both the pointers with 1 step and then we will get the point where they colide and say that, that element is our duplicate number. TC O(n) SC O(n). We are not actually creating the cycle and travesering the given array to move the slow and fast pointers.

// Solution
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