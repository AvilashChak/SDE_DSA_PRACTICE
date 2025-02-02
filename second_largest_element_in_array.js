// Second Largest Element in a Array
// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.
// Note: The second largest element should not be equal to the largest element.
// Examples:
// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.
// Input: arr[] = [10, 5, 10]
// Output: 5
// Explanation: The largest element of the array is 10 and the second largest element is 5.
// Input: arr[] = [10, 10, 10]
// Output: -1
// Explanation: The largest element of the array is 10 and the second largest element does not exist.

// Approach 
// Note : In case arr contains -ve integer then we need to take Number.MIN_VALUE in place of -1.

// Brute - TC - O(N log N){for sorting} + O(N) and SC - O(1)
const bfSecondLargestElement = function(arr) {
    let n = arr.length;
    let largest = arr[0], secondLargest = -1;
    arr.sort((a, b) => a - b);

    for(let i = n - 2; i >= 0; i--) {
        if(arr[i] !== largest) {
            secondLargest = arr[i];
            break;
        }
    }
    return secondLargest;
};

const nums = [10, 5, 10];
console.log("BF second largest is: ", bfSecondLargestElement(nums));

// Better - TC - O(N) + O(N) = O(2N) and SC - O(1)
// We will do first pass and find out the largest element. And then we will do second pass and find out the second largest.
const betterSecondLargestElement = function(arr) {
    let n = arr.length;
    let largest = arr[0], secondLargest = -1;

    // first pass
    for(let i = 0; i < n; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    // second pass
    for(let i = 0; i < n; i++) {
        if(arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
};

console.log("Better: ", betterSecondLargestElement(nums));

// Optimal - TC - O(N) and SC - O(1)
// Find the Second largest and smallest.
const secondLargest = function(arr, n) {
    let largest = arr[0];
    let slargest = Number.MIN_VALUE;

    for(let i = 1; i < n; i++) {
        if(arr[i] > largest) {
            slargest = largest;
            largest = arr[i];
        }
        else if(arr[i] < largest && arr[i] > slargest) {
            slargest = arr[i];
        }
    }

    return slargest;
}
const secondSmallest = function(arr, n) {
    let smallest = arr[0];
    let ssmallest = Number.MAX_VALUE;

    for(let i = 1; i < n; i++) {
        if(arr[i] < smallest) {
            ssmallest = smallest;
            smallest = arr[i];
        }
        else if(arr[i] !== smallest && arr[i] < ssmallest) {
            ssmallest = arr[i];
        }
    }

    return ssmallest;
};
const getSecondOrderElements = function(arr, n) {
    let slargest = secondLargest(arr, n);
    let ssmallest = secondSmallest(arr, n);
    return {slargest, ssmallest};
};

console.log("Optimal: ", getSecondOrderElements(nums, 3));