// Missing Number in an array
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation:
// n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation:
// n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation:
// n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.


// Approach
// Brute - TC - O(N * N) and SC - O(1)
// In this appraoch we will do linear search and see if the number exists between our 0 to n.
const bfMissingNumber = function(arr) {
    let n = arr.length + 1;
    for(let i = 0; i <= n; i++) {
        let flag = 0;
        for(let j = 0; j < n; j++) {
            if(arr[j] === i) {
                flag = 1;
                break;
            }
        }
        if(flag === 0) return i;
    }
};

const nums = [3,0,1];
console.log("BF: ", bfMissingNumber(nums));

// Better - TC - O(2N) and SC - O(N)
// Using hashing.
const betterMissingNumber = function(arr) {
    let n = arr.length;
    let hash = new Array(n + 1).fill(0);

    // for storing
    for(let i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    // checking from 1 to n
    for(let i = 0; i <= n; i++) {
        if(hash[i] === 0) return i;
    }
};

console.log("Better: ", betterMissingNumber(nums));

// Optimal - TC - O(N) and SC - O(1)
// In this approach we will use Summation.
const missingNumber = function(arr) {
    let n = arr.length;
    let sum = (n * (n + 1));
    sum = sum/2;
    let s2 = 0;

    for(let i = 0; i < n; i++) {
        s2 += arr[i];
    }

    let missing = sum - s2;
    return missing;
};


const nums2 = [9,6,4,2,3,5,7,0,1];
console.log("Optimal: ", missingNumber(nums2));

// Optimal 2 - TC - and SC -
// using XOR.
const xorMissingNumber = function(arr) {
    let n = arr.length;
    let l = n - 1;
    let xor1 = 0;
    let xor2 = 0;

    for(let i = 0; i < l; i++) {
        xor2 = xor2 ^ arr[i];
        xor1 = xor1 ^ (i + 1);
    }
    xor1 = xor1 ^ n;
    return xor1 ^ xor2;
};


const nums3 = [9,6,4,2,3,5,7,0,1];
console.log("Optimal xor: ", missingNumber(nums3));