// 3 Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:
// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Approach
// BF - TC - O(n3) and SC - (n)
// In this approach we will iterate over the elements for 3 times to return the result.

// Solution
const bf3Sum = function(nums) {
    let n = nums.length;
    let set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i+1; j < n; j++) {
            for(let k = j +1; k < n; k++) {
                if(nums[i] + nums[j] + nums[k] === 0) {
                    let temp = [];
                    temp = [nums[i], nums[j], nums[k]];
                    temp.sort((a, b) => a -b);
                    set.add(JSON.stringify(temp));
                }
            }
        }
    }
    let ans = Array.from(set).map(JSON.parse);
    return ans;
};

const arr = [-1,0,1,2,-1,-4];
console.log("bf 3 sum is: ", bf3Sum(arr));

// Better - TC - O(n2 log m) and SC - O(n) + O(No. of unique triplets) * 2
// In this solution we need to get rid of the 3rd loop. We use Hashing
// So we know to get the triplet we do arr[i] + arr[j] + arr[k]. Now if we want the 3rd element removing the 3rd loop we can write it like arr[k] = -(arr[i] + arr[j]). So we will run the loops and store the unique in the Hash Set.

// Solution
const hash3Sum = function(nums) {
    let n = nums.length;
    let set = new Set();
    for(let i = 0; i < n; i++) {
        let hashSet = new Set();
        for(let j = i + 1; j < n; j++) {
            let third = - (nums[i] + nums[j]);
            if(hashSet.has(third)) {
                let temp = [nums[i], nums[j], third];
                temp.sort((a, b) => a - b);
                set.add(JSON.stringify(temp));
            }
            hashSet.add(nums[j]);
        }
    }
    let ans = Array.from(set).map(JSON.parse);
    return ans;
};

console.log("Hash set: ", hash3Sum([-1, 0, 1, 2, -1, -4]));

// Optimal - TC - (n log n) + O(n * n) and SC - O(no of unq el) 
// In this approach first we need a sorted array. Then we use two pointers. We know we need arr[i]+arr[j]+arr[k] =0. So we will keep i as constant in the 0 index and will start j from i+1 and k from the end ie n-1. And we will increment if we are less and decrement if we are in more. So once we get the triplet we will store it and move our j to an diff element other than the one we got for the triplet same thing we will do for the k as well and once k crosses/intersect j we will stop. Beacasue at that point the arr will not be in the sorted order. Then we will move i but not to the same element and do the process again.

const threeSum = function(nums) {
    let n = nums.length;
    nums.sort((a, b) => a- b);
    let ans = [];
    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] === nums[i -1]) {
            continue;
        }
        let j = i + 1;
        let k = n - 1;
        while(j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if(sum < 0) {
                j++;
            }
            else if(sum > 0) {
                k--;
            }
            else {
                let temp = [nums[i], nums[j], nums[k]];
                ans.push(temp);
                j++;
                k--;
                while(j < k && nums[j] === nums[j - 1]) j++;
                while(j < k && nums[k] === nums[k + 1]) k--;
            }
        }
    }

    return ans;
};

console.log("3 sum:", threeSum(arr));