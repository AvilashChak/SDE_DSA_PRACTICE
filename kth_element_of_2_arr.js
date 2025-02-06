// K-th element of two sorted Arrays
// Given two sorted arrays a[] and b[] and an element k, the task is to find the element that would be at the kth position of the combined sorted array.
// Examples :
// Input: a[] = [2, 3, 6, 7, 9], b[] = [1, 4, 8, 10], k = 5
// Output: 6
// Explanation: The final combined sorted array would be [1, 2, 3, 4, 6, 7, 8, 9, 10]. The 5th element of this array is 6.
// Input: a[] = [100, 112, 256, 349, 770], b[] = [72, 86, 113, 119, 265, 445, 892], k = 7
// Output: 256
// Explanation: Combined sorted array is [72, 86, 100, 112, 113, 119, 256, 265, 349, 445, 770, 892]. The 7th element of this array is 256.

// Approach
// BF - TC - O(m + n) and SC - O(m + n)
// In this approach we will use linear search after merging the two arr and find the kth elem.
const bfKthElement = function(arr1, arr2, k) {
    let n1 = arr1.length, n2 = arr2.length;
    let arr3 = [];
    let i = 0, j = 0;

    while(i < n1 && j < n2) {
        if(arr1[i] < arr2[j]) arr3.push(arr1[i++]);
        else arr3.push(arr2[j++]);
    }

    // copy the remaining elems
    while(i < n1) arr3.push(arr1[i++]);
    while(j < n2) arr3.push(arr2[j++]);;

    console.log(arr3);
    return arr3[k - 1];
};

const a = [2, 3, 6, 7, 9], b = [1, 4, 8, 10], k = 5;
console.log("BF:",bfKthElement(a, b, k));

// Better - TC - O(m + n) and SC - O(1);
// in this approach we will try to optimize the space
const betterKthElement = function(arr1, arr2, k) {
    let n1 = arr1.length, n2 = arr2.length;
    let count = 0, elem = -1;
    let i = 0, j = 0;

    while(i < n1 && j < n2) {
        if(arr1[i] < arr2[j]) {
            if(count === k - 1) elem = arr1[i];
            count++;
            i++;
        }
        else {
            if(count === k - 1) elem = arr2[j];
            count++;
            j++;
        }
    }

    // for the remaining elem
    while(i < n1) {
        if(count === k - 1) elem = arr1[i];
        count++;
        i++;
    }

    while(j < n2) {
        if(count === k - 1) elem = arr2[j];
        count++;
        j++;
    }

    return elem;
};

console.log("Better:", betterKthElement(a, b, k));

// Optimal - TC - O(Log(Min(M,N))) and SC - O(1)


// First, we have to make sure that the arr1[] is the smaller array. If not by default, we will just swap the arrays. Our main goal is to consider the smaller array as arr1[].
// Calculate the length of the left half: left = k.
// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to max(0, k-n2), and the high will point to min(k, n1) (i.e. n1 = The size of the smaller array, n2 = the size of the bigger array).
// Calculate the ‘mid1’ i.e. x and ‘mid2’ i.e. left-x: Now, inside the loop, we will calculate the value of ‘mid1’ using the following formula:

// mid1 = (low+high) // 2 ( ‘//’ refers to integer division)

// mid2 = left-mid1

// Calculate l1, l2, r1, and r2: Generally,

// l1 = arr1[mid1-1]
// l2 = arr1[mid2-1]
// r1 = arr1[mid1]
// r1 = arr1[mid2]
// The possible values of ‘mid1’ and ‘mid2’ might be 0 and n1 and n2 respectively. So, to handle these cases, we need to store some default values for these four variables. The default value for l1 and l2 will be INT_MIN and for r1 and r2, it will be INT_MAX.

// Eliminate the halves based on the following conditions:

// If l1 <= r2 && l2 <=r1: We have found the answer. Return max(l1, l2).
// If l1 > r2: This implies that we have considered more elements from arr1[] than necessary. So, we have to take less elements from arr1[] and more from arr2[]. In such a scenario, we should try smaller values of x. To achieve this, we will eliminate the right half (high = mid1-1).
// If l2 > r1: This implies that we have considered more elements from arr2[] than necessary. So, we have to take less elements from arr2[] and more from arr1[]. In such a scenario, we should try bigger values of x. To achieve this, we will eliminate the left half (low = mid1+1).
// Finally, outside the loop, we will include a dummy return statement just to avoid warnings or errors.
// The steps from 4-6 will be inside a loop and the loop will continue until low crosses high.

const kthElement = function(arr1, arr2, k) {
    let n1 = arr1.length, n2 = arr2.length;
    // we will always take the small arr
    if(n1 > n2) return kthElement(arr2, arr1, k);
    let left = k;
    // edge cases
    let low  = Math.max(0, k - n2), high = Math.min(k, n1);

    while(low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;

        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;

        if(mid1 < n1) r1 = arr1[mid1];
        if(mid2 < n2) r2 = arr2[mid2];
        if(mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
        if(mid2 - 1 >= 0) l2 = arr2[mid2 - 1];

        if(l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        }

        // eliminate the halves
        else if(l1 > r2) {
            high = mid1 - 1; // right
        }
        else {
            low = mid1 + 1; // left
        }
    }

    return 0;
};

console.log("Optimal using BS:", kthElement(a, b, k));