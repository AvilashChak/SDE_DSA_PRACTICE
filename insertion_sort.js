// Insertion Sort
// The task is to complete the insertsort() function which is used to implement Insertion Sort.

// Examples:

// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]
// Explanation: The sorted array will be [1, 3, 4, 7, 9].
// Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Explanation: The sorted array will be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
// Input: arr[] = [4, 1, 9]
// Output: [1, 4, 9]
// Explanation: The sorted array will be [1, 4, 9].
// Constraints:
// 1 <= arr.size() <= 1000
// 1 <= arr[i] <= 1000

// Approach 
// Insertion Sort - Takes an element and places it in it's correct order

// Solution
// TC - O(n^2) for worst and average cases and O(n) for best case (if arr is sorted) and SC - O(1) + O(n) auxilary recursive stack space

const insertionSort = function(arr) {
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        let j = i;
        while(j > 0 && arr[j - 1] > arr[j]) {
            // swap
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--;
            console.log(`${i}Runs`);
        }
    }
    return arr;
};

// Solution - Using Recursion: Recursive Insertion Sort
// TC - O(n^2) for worst and average cases and O(n) for best case and SC - O(1) + O(n) auxilary recursive stack space

const insertionSortRecursive = function(arr, i, n) {
    // base case
    if(i === n) return;
    let j = i;
    while(j > 0 && arr[j - 1] > arr[j]) {
        // swap
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        j--;
    }
    insertionSortRecursive(arr, i + 1, n);
    return arr;
};

const arr1 = [4, 1, 3, 9, 7];
const arr2 = [1, 2, 3, 4, 5];

console.log("Insertion Sort:", insertionSort(arr1));
console.log();
console.log("Insertion Sort:", insertionSort(arr2));
console.log();
console.log("Recursive Insertion Sort:", insertionSortRecursive(arr1, 0, 5));