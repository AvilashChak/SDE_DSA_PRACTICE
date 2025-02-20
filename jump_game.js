// Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.


// Optimal Approach
// Algorithm / Intuition
// A greedy algorithm makes a series of choices, each of which looks the best at the moment, with the hope that these local optimizations will lead to a globally optimal solution. The key idea is to make the best possible choice at each step without considering the overall problem.

// For this problem, we keep track of the farthest position we can reach at any point in time. We iterate over the array and keep making the greedy choice of reaching the farthest by comparing if the current index can be reached by the previous indices or not.

// If we reach an index that is beyond the farthest position we can reach, we return false. Else, we keep updating the farthest position with the maximum index we can reach from the current index.

// Algorithm:
// Step 1:Initialise a variable maxIndex to keep track of the farthest index we can reach from the start

// Step 2: Iterate through each index of the array and at each interaction check if the current index is greater than the maximum index we can reach so far.

// Step 3: If the current index is greater than maxIndex, it means the current index is not reachable hence we return false.

// Step 4: But if current index is reachable we update the maxIndex to be the maximum of the current value of maxIndex and maximum index we can reach from current index ie. i + nums[i].

// Step 5: If we exit the loop without returning false, it means we have reached the last index, therefore we can return a true.

// Solution
// TC - O(N) and SC - O(1)

const canJump = function(arr) {
    let n = arr.length;

    // we will take a var maxIndex which we will keep on updating after each jump
    let maxIndex = 0;

    // Iterate
    for(let i = 0; i < n; i++) {
        if(i > maxIndex) return false; // edge case : we cannot reach the end index

        maxIndex = Math.max(maxIndex, i + arr[i]);
    }

    return true;
};

const nums1 = [2,3,1,1,4];
const nums2 = [3,2,1,0,4];

console.log("Can Jump:", canJump(nums1));
console.log("Can Jump:", canJump(nums2));