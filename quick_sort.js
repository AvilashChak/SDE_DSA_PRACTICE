// Quick Sort
// Implement Quick Sort, a Divide and Conquer algorithm, to sort an array, arr[] in ascending order. Given an array, arr[], with starting index low and ending index high, complete the functions partition() and quickSort(). Use the last element as the pivot so that all elements less than or equal to the pivot come before it, and elements greater than the pivot follow it.

// Note: The low and high are inclusive.

// Examples:

// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]
// Explanation: After sorting, all elements are arranged in ascending order.
// Input: arr[] = [2, 1, 6, 10, 4, 1, 3, 9, 7]
// Output: [1, 1, 2, 3, 4, 6, 7, 9, 10]
// Explanation: Duplicate elements (1) are retained in sorted order.
// Input: arr[] = [5, 5, 5, 5]
// Output: [5, 5, 5, 5]
// Explanation: All elements are identical, so the array remains unchanged.
// Constraints:
// 1 <= arr.size() <= 105
// 1 <= arr[i] <= 105

// Approach
// Quick Sort - Divide and Conquer
// Intuition:

// Quick Sort is a divide-and-conquer algorithm like the Merge Sort. But unlike Merge sort, this algorithm does not use any extra array for sorting(though it uses an auxiliary stack space). So, from that perspective, Quick sort is slightly better than Merge sort.

// This algorithm is basically a repetition of two simple steps that are the following:

// Pick a pivot and place it in its correct place in the sorted array.
// Shift smaller elements(i.e. Smaller than the pivot) on the left of the pivot and larger ones to the right.

// Approach:

// Now, let’s understand how we are going to implement the logic of the above steps. In the intuition, we have seen that the given array should be broken down into subarrays. But while implementing, we are not going to break down and create any new arrays. Instead, we will specify the range of the subarrays using two indices or pointers(i.e. low pointer and high pointer) each time while breaking down the array.

// The algorithm steps are the following for the quickSort() function:

// Initially, the low points to the first index and the high points to the last index(as the range is n i.e. the size of the array). 
// After that, we will get the index(where the pivot should be placed after sorting) while shifting the smaller elements on the left and the larger ones on the right using a partition() function discussed later.
// Now, this index can be called the partition index as it creates a partition between the left and the right unsorted subarrays.
// After placing the pivot in the partition index(within the partition() function specified), we need to call the function quickSort() for the left and the right subarray recursively. So, the range of the left subarray will be [low to (partition index - 1)] and the range of the right subarray will be [(partition index + 1) to high]. 
// This is how the recursion will continue until the range becomes 1.

// Solution
// TC - O(n log n) and SC - O(1) + O(n) auxilary recursive stack space

// for ascending order
const partition = function(arr, low, high) {
    let pivot = arr[low];
    let i = low, j = high;
    while(i < j) {
        // step 1:
        while(arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        // step 2:
        while(arr[j] > pivot && j >= low + 1) {
            j--;
        }
        if(i < j) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // swap
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
};

const quickSort = function(arr, low, high) {
    // checking if the range is > 1
    if(low < high) {
        let pIndex = partition(arr, low, high);
        // left subarray
        quickSort(arr, low, pIndex - 1);
        // right subarray
        quickSort(arr, pIndex + 1, high);
    }
    return arr;
};

// for decending order
const part = function(arr, low, high) {
    let pivot = arr[low];
    let i = low, j = high;
    while(i < j) {
        // step 1:
        while(arr[i] >= pivot && i <= high - 1) i++;
        // step 2:
        while(arr[j] < pivot && j >= low + 1) j--;
        // swap
        if(i < j) [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
    // swap
    [arr[low], arr[j]] = [arr[j], arr[low]];
    return j;
};

const qs = function(arr, low, high) {
    // check if the range is > 1
    if(low < high) {
        let pIndex = part(arr, low, high);
        // left subarray
        qs(arr, low, pIndex - 1);
        // right subarray
        qs(arr, pIndex + 1, high);
    }
    return arr;
};

const arr = [4, 1, 3, 9, 7];
console.log("Quick Sort ascending:", quickSort(arr, 0, arr.length - 1));
console.log("Quick Sort decending:", qs(arr, 0, arr.length - 1));