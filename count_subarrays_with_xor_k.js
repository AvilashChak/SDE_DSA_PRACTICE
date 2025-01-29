// Count number of subarrays with given xor K

//Given an array of integers A and an integer B.
//Find the total number of subarrays having bitwise XOR of all elements equals to B.
// Example
// Input 1:
//  A = [4, 2, 2, 6, 4]
//  B = 6
// Input 2:
//  A = [5, 6, 7, 8, 9]
//  B = 5
// Example Output
// Output 1:
//  4
// Output 2:
//  2

// Approach
// BF - TC - O(n3) and SC - O(n)
// We will generate all the subarrays. And then iterate over each and loop over the subarray to get the count.

// Solution
const bf = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            let xor = 0;
            for(let k = i; k <= j; k++) {
                xor = xor ^ nums[k];
                if(xor === k) {
                    count++;
                }
            }
        }
    }

    return count;
};

const arr = [4,2,2,6,4];
let k = 6;
console.log("BF:", bf(arr, k));

// Better - TC - O(n2) and SC - O(1)
// We will try to optimize it. Here we will not include the 3rd loop.
const better = function(nums, k) {
    let n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++) {
        let xor = 0;
        for(let j = i; j < n; j++) {
            xor = Math.max(xor ^ nums[j]);
            if(xor === k) {
                count++;
            }
        }
    }

    return count;
};

console.log("Better:", better(arr, k));

// Optimal - TC - O(n) and SC - O(n) 
// In the optimal approach we will use hashmap. And store the xor 1st in the map which we will be (0,1).
const subarrayWithSumK = function(nums, k) {
    let n = nums.length;
    let xr = 0;
    let map = {0: 1};
    let count = 0;

    for(let i = 0; i < n; i++) {
        xr = xr ^ nums[i];
        // k to find k
        x = xr ^ k;

        if(map[x] !== undefined) {
            count += map[x];
        }

        map[xr] = (map[xr] || 0) + 1;
    }

    return count;
}; 

console.log("Optimal:", subarrayWithSumK(arr, k));