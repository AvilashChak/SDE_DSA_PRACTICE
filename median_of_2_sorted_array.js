// Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).
// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Approach
// BF - TC - O(N1 + N2) and SC - O(N1 + N2)
// We will merge the two arr in a new arr and then we will return the median.

const bfMedian = function(arr1, arr2) {
    let n1 = arr1.length, n2 = arr2.length;
    // let arr3 = [...arr1, ...arr2];

    // using merge sort
    let arr3 = [];
    let i = 0, j = 0;
    while(i < n1 && j < n2) {
        if(arr1[i] < arr2[j]) {
            arr3.push(arr1[i]);
            i++;
        }
        else {
            arr3.push(arr2[j]);
            j++;
        }
    }

    while(i < n1) { // for the remaining elements
        arr3.push(arr1[i]);
        i++;
    }

    while(j < n2) { // for the remaining elements
        arr3.push(arr2[j]);
        j++;
    }

    let median = 0;
    let n = (n1 + n2);
    if(n % 2 === 1) { // if n is odd
        median =  arr3[Math.floor(n/2)];
    }
    else { // when even
        median = (arr3[Math.floor(n/2)] + arr3[Math.floor((n/2) - 1)]) / 2;
    }

    return median;
};

const nums1 = [1,2], nums2 = [3,4]
console.log("BF:", bfMedian(nums1, nums2));

// Better - TC - O(N1 + N2) and SC - O(1)
// 

const betterMedian = function(arr1, arr2) {
    let n1 = arr1.length, n2 = arr2.length;
    let n = (n1 + n2);
    let i = 0, j = 0;
    let ind2 = Math.floor(n / 2);
    let ind1 = ind2 - 1;
    let count = 0;
    let ind1el = -1, ind2el = -1;

    while(i < n1 && j < n2) {
        if(arr1[i] < arr2[j]) {
            if(count === ind1) ind1el = arr1[i];
            if(count === ind2) ind2el = arr1[i];
            count++;
            i++;
        }
        else {
            if(count === ind1) ind1el = arr2[j];
            if(count === ind2) ind2el = arr2[j];
            count++;
            j++;
        }
    }

    while(i < n1) {
        if(count === ind1) ind1el = arr1[i];
        if(count === ind2) ind2el = arr1[i];
        count++;
        i++;
    }

    while(j < n2) {
        if(count === ind1) ind1el = arr2[j];
        if(count === ind2) ind2el = arr2[j];
        count++;
        j++;
    }

    let median;
    if(n % 2 === 1) {
        // when odd
        median = ind2el;
    }
    else {
        // when even
        median = Math.floor(ind1el + ind2el) / 2;
    }

    return median;
};


console.log("Better:", betterMedian(nums1, nums2));

// Optimal - TC - and SC - 
// In this approach BS will be on the basis of symmetry (the state of having two halves that match each other exactly in size)
// 1. We need to determine the how many elem will be there from arr1 in the left and how many from arr2 in the right.
// 2. We determine by comparing if the entire left is smaller than the right by checking the diagonals or cross.

// First, we have to make sure that the arr1[] is the smaller array. If not by default, we will just swap the arrays. Our main goal is to consider the smaller array as arr1[].
// Calculate the length of the left half: left = (n1+n2+1) / 2.
// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to 0 and the high will point to n1(i.e. The size of arr1[]).
// Calculate the ‘mid1’ i.e. x and ‘mid2’ i.e. left-x: Now, inside the loop, we will calculate the value of ‘mid1’ using the following formula:
// mid1 = (low+high) // 2 ( ‘//’ refers to integer division)
// mid2 = left-mid1
// Calculate l1, l2, r1, and r2: Generally,
// l1 = arr1[mid1-1]
// l2 = arr2[mid2-1]
// r1 = arr1[mid1]
// r2 = arr2[mid2]
// The possible values of ‘mid1’ and ‘mid2’ might be 0 and n1 and n2 respectively. So, to handle these cases, we need to store some default values for these four variables. The default value for l1 and l2 will be INT_MIN and for r1 and r2, it will be INT_MAX.
// Eliminate the halves based on the following conditions:
// If l1 <= r2 && l2 <= r1: We have found the answer.
// If (n1+n2) is odd: Return the median = max(l1, l2).
// Otherwise: Return median = (max(l1, l2)+min(r1, r2)) / 2.0
// If l1 > r2: This implies that we have considered more elements from arr1[] than necessary. So, we have to take less elements from arr1[] and more from arr2[]. In such a scenario, we should try smaller values of x. To achieve this, we will eliminate the right half (high = mid1-1).
// If l2 > r1: This implies that we have considered more elements from arr2[] than necessary. So, we have to take less elements from arr2[] and more from arr1[]. In such a scenario, we should try bigger values of x. To achieve this, we will eliminate the left half (low = mid1+1).
// Finally, outside the loop, we will include a dummy return statement just to avoid warnings or errors.
// The steps from 4-6 will be inside a loop and the loop will continue until low crosses high.

// Solution - TC - O(Log(Min(M,N))) and SC- O(1)
const median = function(arr1, arr2) {
    let n1 = arr1.length, n2 = arr2.length;
    let n = n1 + n2;
    // we need to take the smallest arr
    if(n1 > n2) return median(arr2, arr1);
    // how much elem we need from left
    let left = Math.floor((n1 + n2 + 1) / 2);
    // search space is the smallest arr 
    let low = 0, high = n1; 

    while(low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;

        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER; // we will take if no l1 or l2 is there
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;

        if(mid1 < n1) r1 = arr1[mid1];
        if(mid2 < n2) r2 = arr2[mid2];

        if(mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
        if(mid2 - 1 >= 0) l2 = arr2[mid2 - 1];

        // formula to find the median for odd and even
        if(l1 <= r2 && l2 <= r1) {
            if(n % 2 === 1) return Math.max(l1, l2);
            return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves
        else if(l1 > r2) high = mid1 - 1; // right
        else low = mid1 + 1; // left
    }

    return 0;
};

console.log("Optimal using BS:", median(nums1, nums2));
