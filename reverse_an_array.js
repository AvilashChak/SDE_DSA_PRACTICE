// Reverse an Array
// You are given an array of integers arr[]. Your task is to reverse the given array.

// Note: Modify the array in place.

// Examples:

// Input: arr = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]
// Explanation: The elements of the array are 1 4 3 2 6 5. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is 5 6 2 3 4 1.
// Input: arr = [4, 5, 2]
// Output: [2, 5, 4]
// Explanation: The elements of the array are 4 5 2. The reversed array will be 2 5 4.
// Input: arr = [1]
// Output: [1]
// Explanation: The array has only single element, hence the reversed array is same as the original.

// Solution
// Approach - sort method
// Here it will sort the arr in ascending/descending order. But it's useful when the arr is sorted and also it takes extra space. But we need to do in place
// TC - O(n log n) and SC - O(n)

const sortArr = function(arr) {
    arr.sort((a, b) => b - a);
    return arr;
};

// Solution
// Approach - using reverse method
// This approach doesn't take extra space and reverse in place
// TC - O(n) and SC - O(1)

const reverseArr = function(arr) {
    arr.reverse();
    return arr;
};

// Solution
// Approach - using Two pointers (optimal)
// This approach is better than reverse method as it takes less time and doesn't take extra space and reverse in place
// TC - O(n) and SC(1)

const revArr = function(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start < end) {
        // swap elements at start and end
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // move towards the middle
        start++;
        end--;
    }

    return arr;
};

// Solution
// Approach - using Recursion Two pointers 
// TC - O(n) and SC(n)

const revArrRecursion = function(arr) {
    return revRecursion(0, arr.length - 1, arr);
};

const revRecursion = function(l, r, arr) {
    // base case
    if(l >= r) return;

    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    revRecursion(l + 1, r - 1, arr);

    return arr;
};

// Solution
// Approach - using Recursion One pointer 
// TC - O(n) and SC(n)

const revArrRecursion1 = function(arr) {
    return revRecursion1(0, arr);
};

const revRecursion1 = function(i, arr) {
    let n = arr.length;
    // base case
    if(i >= n/2) return;

    let temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;

    revRecursion1(i + 1, arr);

    return arr;
};

const arr = [1, 4, 3, 2, 6, 5];
const arr1 = [1, 4, 3, 2, 6, 5];
const arr2 = [1, 4, 3, 2, 6, 5];
const arr3 = [1, 4, 3, 2, 6, 5];
const arr4 = [1, 4, 3, 2, 6, 5];

console.log("Using sort method:", sortArr(arr));
console.log("Using reverse method:", reverseArr(arr1));
console.log("Using Two pointers (optimal) method:", revArr(arr2));
console.log("Using Recursion Two pointers method:", revArrRecursion(arr3));
console.log("Using Recursion Two pointers method:", revArrRecursion1(arr4));