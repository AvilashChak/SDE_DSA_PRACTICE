// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// Approach
// BF - TC - O(3N) = O(N) and SC - O(N) + O(N) 
// Take 2 array prefix and suffix array and precompute the leftMax and rightMax for each index beforehand. Then use the formula min(prefix[I], suffix[i])-arr[i] to compute water trapped at each index.

// Solution
const bfTrap = function(arr) {
    let n = arr.length;
    let prefix = [], suffix = [];

    prefix[0] = arr[0];
    for(let i = 1; i < n; i++) {
        prefix[i] = Math.max(prefix[i - 1], arr[i]);
    }

    suffix[n -1] = arr[n - 1];
    for(let i = n - 2; i >= 0; i--) {
        suffix[i] = Math.max(suffix[i + 1], arr[i]);
    }

    let watterLogged = 0;
    for(let i = 0; i < n; i++) {
        watterLogged += Math.min(prefix[i], suffix[i]) - arr[i];
    }

    return watterLogged;
};


// Optimal - TC - O(N) and SC - O(1)
// Take 2 pointers l(left pointer) and r(right pointer) pointing to 0th and (n-1)th index respectively. Take two variables leftMax and rightMax and initialize them to 0. If height[l] is less than or equal to height[r] then if leftMax is less than height[l] update leftMax to height[l] else add leftMax-height[l] to your final answer and move the l pointer to the right i.e l++. If height[r] is less than height[l], then now we are dealing with the right block. If height[r] is greater than rightMax, then update rightMax to height[r] else add rightMax-height[r] to the final answer. Now move r to the left. Repeat these steps till l and r crosses each other.

// Solution
const trap = function(height) {
    let leftMax = 0, rightMax = 0, total = 0;
    let l = 0;
    let r = height.length - 1;

    while(l <= r) {
        if(height[l] <= height[r]) {
            if(height[l] >= leftMax) {
                leftMax = height[l];
            }
            else {
                total += leftMax - height[l];
            }
            l++;
        }
        else {
            if(height[r] >= rightMax) {
                rightMax = height[r];
            }
            else {
                total += rightMax - height[r];
            }
            r--;
        }
    } 


    return total;
};



const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log("BF ans is: ",bfTrap(height));
console.log("Optimal ans is: ",trap(height));