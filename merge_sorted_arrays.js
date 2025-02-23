// Merge Sorted Array

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// Approach

// BF - TC - O(m + n) and SC - O(m + n)

const mergeBF = function(arr1, m, arr2, n) {
    // Declare a 3rd arr and two pointers
    let arr3 = new Array(m + n);
    let left = 0, right = 0;

    let index = 0;

    // Insert the elements from the 2 arrays into the 3rd arr using left and right pointers
    while(left < m && right < n) {
        if(arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++;
            index++;
        }
        else {
            arr3[index] = arr2[right];
            right++;
            index++;
        }
    }

    // if the left pointer reaches the end
    while(left < m) {
        arr3[index] = arr1[left];
        left++;
        index++;
    }

    // if the right pointer reaches the end
    while(right < n) {
        arr3[index] = arr2[right];
        right++;
        index++;
    }

    // fill back the elements from arr3 to arr1 and arr2
    for(let i = 0; i < m + n; i++) {
        arr1[i] = arr3[i];
    }
};

let arr3 = [1,2,3,0,0,0];
let m3 = 3; 
let arr4 = [2,5,6];
let n4 = 3;
mergeBF(arr3, m3, arr4, n4);
console.log("Using BF approach:", arr3);


// Solution
// Optimal - TC - O(m + n) and SC - O(1)
const merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    
    while(p1 >= 0 && p2 >= 0) {
        if(nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--; 
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while(p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
};

let arr1 = [1,2,3,0,0,0];
let m = 3; 
let arr2 = [2,5,6];
let n = 3;
merge(arr1, m, arr2, n);
console.log("Using Optimal approach:",arr1);









// Using gap method

const swapIfGreater = function(arr1, arr2, ind1, ind2) {
    if(arr1[ind1] > arr2[ind2]) {
        [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
}

const mergeGap = function(arr1, m, arr2, n) {
    let len = (m + n);
    let gap = Math.ceil(len / 2);
    while(gap > 0) {
        let left = 0;
        let right = left + gap;
        while(right < len) {
            // I am in arr1 and arr2
            if(left < m && right >= m) {
                swapIfGreater(arr1, arr2, left, right - m);
            } 
            // I am in arr2 and arr2
            else if(left >= m) {
                swapIfGreater(arr2, arr2, left - m, right - m);
            } 
            // I am in arr1 and arr1
            else {
                swapIfGreater(arr1, arr1, left, right);
            }
            left++;
            right++;
        }
        if(gap === 1) {
            break;
        } else {
            gap = Math.ceil(gap / 2);
        }
    }
    // Copying remaining elements of arr2 to arr1
    for (let i = 0; i < n; i++) {
        arr1[m + i] = arr2[i];
    }
};

// const ar1 = [1, 3, 5, 7];
// const ar2 = [0, 2, 6, 8, 9];
// let m1 = 4;
// let n2 = 5;
// mergeGap(ar1, m1, ar2, n2);
// console.log("res:", JSON.stringify(ar1));
// console.log("resL:", ar1.length);