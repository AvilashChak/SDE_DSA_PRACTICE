// Next Permutation

// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

// The replacement must be in place and use only constant extra memory.

// Example 1:

// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:

// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:

// Input: nums = [1,1,5]
// Output: [1,5,1]

// Aprroach
// Identify the Breakpoint: The first step is to find the "dip" in the array, where a number at index i is smaller than the number at i + 1. This "dip" marks the breakpoint, separating the left (i) and right (i + 1) parts.

// Start from the End: To find this breakpoint efficiently, iterate from the second-to-last element (index n - 2) towards the beginning, as this ensures we locate the rightmost dip first.

// Handle No Breakpoint (Highest Permutation): Initialize a variable index to -1. If no dip is found (i.e., the array is already the highest permutation), reverse the entire array to get the smallest permutation.

// Swap with the Smallest Larger Element: Once the breakpoint is identified, locate the smallest number greater than nums[index] in the right portion. Swap these two numbers to ensure the next permutation is slightly larger.

// Reverse the Right Portion: Finally, reverse the portion of the array after the breakpoint (index + 1 to the end) to obtain the next lexicographical permutation. This ensures the smallest possible arrangement of numbers in that part.

// Solution
const nextPermutation = function(nums) {
    let index = -1;
    let n = nums.length;

    for(let i = n - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    }

    if(index === -1) {
        nums.reverse();
        return nums;
    }

    for(let i = n - 1; i > index; i--) {
        if(nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }

    let start = index + 1;
    let end = n - 1;
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }

    return nums;

};

const arr = [1,1,5];
console.log(nextPermutation(arr));