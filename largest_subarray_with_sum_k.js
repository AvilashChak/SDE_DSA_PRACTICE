// Largest Subarray with K sum

// Given an array arr containing both positive and negative integers, the task is to compute the length of the largest subarray that has a sum of 0.
// Examples:
// Input: arr[] = [15, -2, 2, -8, 1, 7, 10, 23]
// Output: 5
// Explanation: The largest subarray with a sum of 0 is [-2, 2, -8, 1, 7].
// Input: arr[] = [2, 10, 4]
// Output: 0
// Explanation: There is no subarray with a sum of 0.
// Input: arr[] = [1, 0, -4, 3, 1, 0]
// Output: 5
// Explanation: The subarray is [0, -4, 3, 1, 0].

// Approach
// BF - TC - O(n2) and SC - O(n)
//  We need to generate all the sub arrays. And we can say that j always start from i ie the first index.

// Solution
const bf = function(nums, k) {
    let len = 0;
    let n = nums.length;
    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let j = i; j < n; j++) {
            sum += nums[j];
            if(sum === k) {
                len = Math.max(len, j - i + 1);
            }
        }
    }
    return len;
};

const arr1 = [1,2,3,1,1,1,1,4,2,4];
const k = 3;
console.log("BF is:", bf(arr1, k));

// Better - TC - O(n) and SC - O(n)
// We will use Hashing for the better approach. And till we do hashing we will take the prefix sum. Initially we will take sum and length as 0. when we move we will sum up the elements and when and store the sum and index in the hashmap. and when we get the k(len) we will increase the length. 

// Solution - This solution is the optimal if the arr has -ve and 0's
const betterLongestConsSubArr = function(nums, k) {
    let n = nums.length;
    let preSumMap = {};
    let sum = 0;
    let maxLen = 0;

    for(let i = 0; i < n; i++) {
        sum += nums[i];
        if(sum === k) {
            maxLen = Math.max(maxLen, i + 1);
        }

        let rem = sum - k;
        if(preSumMap.hasOwnProperty(rem)) {
            let len = i - preSumMap[rem];
            maxLen = Math.max(maxLen, len);
        }
        if(!preSumMap.hasOwnProperty(sum)) { // first or the left most occurence of sum
            preSumMap[sum] = i;
        }
    }

    return maxLen;
};

const arr2 = [2, 0, 0, 3];
console.log("Better is:", betterLongestConsSubArr(arr2, k));

// Optimal - TC - O(2n) and SC - O(1)
// This will be optimal only when the arr includes +ve and 0's. Here we will use two pointers. Both will start from first and we will move the right till we get our sum. We will keep on adding the sum with the index. Once we exceed we will stop and shrink. And we will continue this process till right goes out of the boundary.

// Solution
const largestSubArrayWithSumK = function(nums, k) {
    let n = nums.length;
    let left = 0;
    let right = 0;
    let sum = nums[0]; // we will initiate sum with the 0 index
    let maxLen = 0;
    
    while(right < n) {
        while(left <= right && sum > k) {
            sum -= nums[left];
            left++;
        }

        if(sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        right++;
        if(right < n) {
            sum += nums[right];
        }
    }
    
    return maxLen;
};

const arr3 = [1,2,3,1,1,1,1,3,3];
const k1 = 6;
const LSAWSK = largestSubArrayWithSumK(arr3, k1);
console.log("largestSubArrayWithSumK is:", LSAWSK);
