// Sort an array of 0's, 1's and 2's

// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Approach
// In Javascript we can achieve this by using in built function ie Array.sort()
// But without using the in built function we can use the Dutch National Flag algorithm which is the optimal way to achieve this problem statement. The algo revolves in 3 rules ie
// [0... low -1] -> 0 extreme left
// [low... mid -1] -> 1 
// [high + 1... n -1] -> 2 extreme right
// So this has 3 pointers we need to have namely low, mid and high
// So we can say that mid to high is the unsorted part of the array which we need to sort
// Therefore we can say that the start point is mid and end is high. We can also state that the start is low and then we observe that a[mid] == 0 -> here we wil swap a[low],a[mid] and move forwards/increment low++ and mid++; a[mid] == 1 -> here we will move forwards mid++, a[mid] == 2 -> here we will swap a[mid],a[high] and shrink/decrement high--.


// Solution
// Better - O(n + n) and SC - O(1)

const sortArraysBetter = function(arr) {
    let cnt0 = 0, cnt1 = 0, cnt2 = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) cnt0++;
        else if(arr[i] === 1) cnt1++;
        else cnt2++;
    }

    // replace the places in the original arr
    for(let i = 0; i < cnt0; i++) arr[i] = 0;
    for(let i = cnt0; i < cnt0 + cnt1; i++) arr[i] = 1;
    for(let i = cnt0 + cnt1; i < arr.length; i++) arr[i] = 2;

    return arr;
};

// Solution
// Optimal Solution - TC - O(N) and SC - O(1)
const sortArrays = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if(nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
};




const arr1 = [2,0,2,1,1,0];
console.log("Using better approach:", sortArraysBetter(arr1));
console.log();
const arr = [2,0,2,1,1,0];
const result = sortArrays(arr);
console.log(result);
