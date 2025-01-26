// Merge Sort --- Divide and Merge

// Given an array arr[], its starting position l and its ending position r. Sort the array using the merge sort algorithm.

// Examples:

// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]
// Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Input: arr[] = [1, 3 , 2]
// Output: [1, 2, 3]

// Solution
const merge = function(arr, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    // Our array will be
    // [low...mid]
    // [mid + 1...high]
    while(left <= mid && right <= high) {
        if(arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    while(left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    
    while(right <= high) {
        temp.push(arr[right]);
        right++
    }

    for(let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
};

const ms = function(arr, low, high) {
    if(low === high) return;
    let mid = Math.floor((low + high) / 2);
    ms(arr, low, mid);
    ms(arr, mid + 1, high);
    merge(arr, low, mid, high);
};

const mergeSort = function(arr, n) {
    ms(arr, 0, n - 1);
    return arr;
};

const nums = [4, 1, 3, 9, 7];
const result = mergeSort(nums, 5);
console.log("Result is: ", result);