// Bubble sort
// Given an array, arr[]. Sort the array using bubble sort algorithm.

// Examples :

// Input: arr[] = [4, 1, 3, 9, 7]
// Output: [1, 3, 4, 7, 9]
// Input: arr[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Input: arr[] = [1, 2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5]
// Explanation: An array that is already sorted should remain unchanged after applying bubble sort.
// Constraints:
// 1 <= arr.size() <= 103
// 1 <= arr[i] <= 103

// Approach 
// Bubble sort - Push the max to the last by adjacent swaps

// Solution - Worst and Average case
// TC - O(n^2) and SC - O(1)

const bubbleSort = function(arr) {
    let n = arr.length;
    for(let i = n - 1; i >= 1; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

// Solution - Best case (Optimized)
// TC - O(n) and SC - O(1)

const bubble = function(arr) {
    let n = arr.length;
    let didSwap = 0;

    for(let i = n - 1; i >= 1; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                didSwap = 1;
            }
        }
        if(didSwap === 0) {
            break;
        }
        console.log(`${i}Runs`);
    }
    return arr;
};

const arr = [4, 1, 3, 9, 7];
const arr1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arr2 = [1, 2, 3, 4, 5]

console.log("Bubble sort (worst and average case):", bubbleSort(arr));
console.log("Bubble sort optimized (best case):", bubble(arr1));
console.log("Bubble sort optimized (best case):", bubble(arr2));