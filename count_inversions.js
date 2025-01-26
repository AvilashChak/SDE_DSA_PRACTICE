// Count Inversions

// Problem statement
// For a given integer array/list 'ARR' of size 'N' containing all distinct values, find the total number of 'Inversions' that may exist.
// An inversion is defined for a pair of integers in the array/list when the following two conditions are met.
// A pair ('ARR[i]', 'ARR[j]') is said to be an inversion when:
// 1. 'ARR[i] > 'ARR[j]' 
// 2. 'i' < 'j'
// Where 'i' and 'j' denote the indices ranging from [0, 'N').

// Sample Input 1 :
// 3
// 3 2 1
// Sample Output 1 :
// 3
// Explanation of Sample Output 1:
// We have a total of 3 pairs which satisfy the condition of inversion. (3, 2), (2, 1) and (3, 1).

// Approach
// BF - TC - O(n2) and SC- O(1)
const bfCountInversion = function(arr) {
    let n = arr.length;
    let count = 0;
    for(let i = 0; i <= n; i++) {
        for(let j = i + 1; j <= n; j++) {
            if(arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
};

const nums = [5,4,2,4,1];
const result = bfCountInversion(nums);
console.log("Bf Result is: ", result);

// Optimal - TC - O(n log n) and SC - O(n)
// We need to use Merge sort algo to get the count.
const merge = function(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    // Here we need two arr :
    // [low...mid]
    // [mid + 1...high]
    let count = 0;
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            // so when we are on the left arr
            temp.push(arr[left]);
            left++
        } else{
            // when we are in the right arr
            temp.push(arr[right]);
            count += (mid - left + 1);
            right++;
        }
    }

    while(left <= mid) {
        // remianing elements in the left arr
        temp.push(arr[left]);
        left++;
    }

    while(right <= high) {
        // remaining elements in the right arr
        temp.push(arr[right]);
        right++;
    }

    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }

    return count;

};

const mergeSort = function(arr, low, high) {
    let count = 0;
    if(low >= high) return count;
    let mid = Math.floor((low + high) / 2);
    count += mergeSort(arr, low, mid);
    count += mergeSort(arr, mid + 1, high);
    count += merge(arr, low, mid, high);
    return count;
};

const countInversion = function(arr, n) {
    let count = 0;
    count = mergeSort(arr, 0, n - 1);
    return count;
};

const res = countInversion(nums, 5);
console.log("Answer is: ", res)