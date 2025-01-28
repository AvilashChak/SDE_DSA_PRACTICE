// 4 Sum

// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Approach
// BF - TC - O(n4) and SC - O(no. of unq quads) * 2;
// In this approach we will iterate for 4 times.

// Solution
const bf4Sum = function(nums) {
    let n = nums.length;

    let set = new Set();
    let ans = [];
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            for(let k = j + 1; k < n; k++) {
                for(let l = k + 1; l < n; l++) {
                    if(nums[i] + nums[j] + nums[k] + nums[l] === 0) {
                        let temp = [nums[i], nums[j], nums[k], nums[l]];
                        temp.sort((a , b) => a - b);
                        set.add(JSON.stringify(temp));
                    }
                }
            }
        }
    }
    ans = Array.from(set).map(JSON.parse);
    return ans;
};

const arr = [1,0,-1,0,-2,2];
console.log("BF 4 sum: ", bf4Sum(arr));

// Better - TC - O(n3) * log (m) and SC - O(n) + O(quads) * 2
// We will use Hashing similar approach what we have used for 3 sum. We will eliminate the fourth loop and store it as a variable by taking the sum of other the i, j, k and subtract from target. And also store the unique elements in the Hashset. So that if it's in the hashset we can get the fourth index.

// Solution
const hash4Sum = function(nums, target) {
    let n = nums.length;
    let set = new Set();
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let hashSet = new Set();
            for(let k = j + i; k < n; k++) {
                let fourth = target - (nums[i] + nums[j] + nums[k]);
                if(hashSet.has(fourth)) {
                    let temp = [nums[i], nums[j], nums[k], fourth];
                    temp.sort((a, b) => a - b);
                    set.add(JSON.stringify(temp));
                }
                hashSet.add(nums[k]);
            }
        }
    }
    let ans = Array.from(set).map(JSON.parse);
    return ans;
};

const tar = 0;
console.log("Hash 4 Sum: ", hash4Sum(arr, tar));

// Optimal - TC - O(n3) and SC - O(no of quads)
// In this approach we will use the 2 pointer approach. First we need to sort the array and then keep the i to 0 index j to i+1, k to j+1, and l to n-1. Now we will move the pointers if the we are < target and we will increment and decrement if we are > target. After that we will repeat it for all the indexes and when one index cross each other we will stop. we will store the element between k and l.

// Solution
const fourSum = function(nums, target) {
    let n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = [];
    for(let i = 0; i < n; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue; //skip the step to avoid duplicate
        for(let j = i + 1; j < n; j++) {
            if(j > i + 1 && nums[j] === nums[j - 1]) continue; // skip the step to avoid duplicate
            let k = j + 1;
            let l = n - 1;
            while(k < l) {
                let sum = (nums[i] + nums[j]);
                sum += nums[k] + nums[l];
                if(sum === target) {
                    let temp = [nums[i], nums[j], nums[k], nums[l]];
                    ans.push(temp);
                    k++;
                    l--;
                    while(k < l && nums[k] === nums[k - 1]) k++;
                    while(k < l && nums[l] === nums[l + 1]) l--;
                }
                else if(sum < target) {
                    k++;
                }
                else {
                    l--;
                }
            }
        }
    }
    return ans;
};

console.log("Four Sum: ", fourSum(arr, tar));