// Two Sum

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// Approach
// In the given above problem it may be two things 
// 1. If the sum of two elements = target return yes or no ie true or false if not.
// 2. The other is return the indexes of the elements which sum is equal to the target.

// Bf - TC O(n^2) and SC O(1)
const bfTwoSum = function(nums, target) {
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) { // instead of j = 0 if we take i + 1 we can skip the below line
            //if(i === j) continue; // skip the same element
            if(nums[i] + nums[j] === target) {
                //console.log("Yes");
                console.log(i, j);
                return true;
            }
        }
    }
    console.log("No");
    return false;
};

const arr = [2,7,11,15];
const tar = 9;
console.log(bfTwoSum(arr, tar));

// Better - TC - ordered map - O(n * log n) unordered map - O(n) or O(n2) and SC - O(n)
// We will use Hashing
const hashTwoSum = function(nums, target) {
    let n = nums.length;
    let map = {};
    for(let i = 0; i < n; i++) {
        let a = nums[i];
        let more = target - a;
        if(map.hasOwnProperty(more)) {
            //return true;
            //return "Yes";
            return [map[more], i];
        }
        map[a] = i;
    }
    return false;
    //return "No";
};

console.log("Hashing:", hashTwoSum(arr, tar));

// Optimal - TC - O(N) + O(N*logN) and SC - O(1)
// We will use 2 pointer. We will use greedy approach. We will keep a left pointer at 0 and right pointer at n - 1. And then we will check and see if we get our target.

const twoSum = function(nums, target) {
    let n = nums.length;
    let left = 0, right = n - 1;
    nums.sort((a, b) => a - b);
    while(left < right) {
        let sum = nums[left] + nums[right];
        if(sum === target) {
            return "Yes";
        }
        else if(sum < target) left++;
        else right--;
    }
    return "No";
}; 

console.log("Two Sum: ", twoSum(arr, tar));

// Optimal Solution - using hashMap (if we are required to return the indices)
// TC - O(n) and SC - O(n)

const twoSumUsingHashMap = function(nums, target) {
    let n = nums.length;
    let map = new Map();

    for(let i = 0; i < n; i++) {
        let complement = target - nums[i];

        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

console.log("Two Sum using hashMap (if we are required to return the indices): ", twoSumUsingHashMap(arr, tar));