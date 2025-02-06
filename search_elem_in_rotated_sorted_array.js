// Search element in a sorted and rotated array/ find pivot where it is rotated
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:
// Input: nums = [1], target = 0
// Output: -1

// Approach
// BF - TC - O(N) and SC - O(1)
// We will use linear search
const bfSearchElement = function(arr , target) {
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        if(arr[i] === target) {
            return i;
        }
    }

    return -1;
};

const nums = [4,5,6,7,0,1,2], target = 0;
console.log("BF:", bfSearchElement(nums, target));

// Optimal - TC - O(log N) and SC - O(1)
// Optimal Approach(Using Binary Search): 
// Here, we can easily observe, that we have to search in a sorted array. That is why, we can think of using the Binary Search algorithm to solve this problem.

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.
//Observation: 
// To utilize the binary search algorithm effectively, it is crucial to ensure that the input array is sorted. By having a sorted array, we guarantee that each index divides the array into two sorted halves. In the search process, we compare the target value with the middle element, i.e. arr[mid], and then eliminate either the left or right half accordingly. This elimination becomes feasible due to the inherent property of the sorted halves(i.e. Both halves always remain sorted).

// However, in this case, the array is both rotated and sorted. As a result, the property of having sorted halves no longer holds. This disruption in the sorting order affects the elimination process, making it unreliable to determine the target's location by solely comparing it with arr[mid]. To illustrate this situation, consider the following example:


// Key Observation: Though the array is rotated, we can clearly notice that for every index, one of the 2 halves will always be sorted. In the above example, the right half of the index mid is sorted.

// So, to efficiently search for a target value using this observation, we will follow a simple two-step process. 

// First, we identify the sorted half of the array. 
// Once found, we determine if the target is located within this sorted half. 
// If not, we eliminate that half from further consideration. 
// Conversely, if the target does exist in the sorted half, we eliminate the other half.
// Algorithm:
// The steps are as follows:

// Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index, and high will point to the last index.
// Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Check if arr[mid] == target: If it is, return the index mid.
// Identify the sorted half, check where the target is located, and then eliminate one half accordingly:
// If arr[low] <= arr[mid]: This condition ensures that the left part is sorted.
// If arr[low] <= target && target <= arr[mid]: It signifies that the target is in this sorted half. So, we will eliminate the right half (high = mid-1).
// Otherwise, the target does not exist in the sorted half. So, we will eliminate this left half by doing low = mid+1.
// Otherwise, if the right half is sorted:
// If arr[mid] <= target && target <= arr[high]: It signifies that the target is in this sorted right half. So, we will eliminate the left half (low = mid+1).
// Otherwise, the target does not exist in this sorted half. So, we will eliminate this right half by doing high = mid-1.
// Once, the ‘mid’ points to the target, the index will be returned.
// This process will be inside a loop and the loop will continue until low crosses high. If no index is found, we will return -1.

const searchElement = function(arr, k) {
    let n = arr.length;
    let low = 0; high = n - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        // if mid is the target
        if(arr[mid] === target) return mid;

        // if left part is sorted
        if(arr[low] <= arr[mid]) {
            if(arr[low] <= target && target <= arr[mid]) {
                high = mid - 1; // element exists
            }
            else {
                low = mid + 1; // element doesn't exists
            }
        }
        else { // if right part is sorted
            if(arr[mid] <= target && target <= arr[high]) {
                // element exists
                low = mid + 1;
            }
            else {
                high = mid - 1; // element doesn't exists
            }
        }
    }

    return -1;
};

console.log("Optimal using BS:", searchElement(nums, target));