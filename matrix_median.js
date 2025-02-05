// Matrix Median - Median of row wise sorted matrix
// Given a row-wise sorted matrix where the number of rows and columns is always odd, find the median of the matrix.
// Examples:
// Input: mat = [[1, 3, 5], [2, 6, 9], [3, 6, 9]]
// Output: 5
// Explanation: Sorting matrix elements gives us {1,2,3,3,5,6,6,9,9}. Hence, 5 is median. 
// Input: mat = [[1], [2], [3]]
// Output: 2
// Explanation: Sorting matrix elements gives us {1,2,3}. Hence, 2 is median
// Input: mat = [[3], [5], [8]]
// Output: 5
// Explanation: Sorting matrix elements gives us {3,5,8}. Hence, 5 is median.

// Approach
// BF - TC - O(N x M) + O(N x M(log(N x M))) and SC - O(N x M)
// In this approach we will convert the 2D matrix in 1D array. And then we will sort the array and the we will n*m / 2 to get the median.

const bfMedian = function(matrix, n, m) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            arr.push(matrix[i][j]); // converted the 2D matrix to 1D array
        }
    }

    // sort the arr
    arr.sort((a, b) => a - b);
    let median = arr[Math.floor((n * m) / 2)];
    return median;
};

const matrix = [[1, 3, 5], [2, 6, 9], [3, 6, 9]];
const n = matrix.length;
const m = matrix[0].length;
console.log("BF Ans:", bfMedian(matrix, n, m));


// Optimal - TC - O(mlognlog(max−min)) and SC - O(1)
// Algorithm / Intuition
// Now, if we wish to further optimize the previous approach we cannot afford to check every element. So, we have to eliminate some parts to reduce the time complexity under O(MXN). This is where the binary search algorithm comes in

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// Observations:

// What is the search space where we will apply binary search?

// If we carefully observe, our answer lies between the smallest and the largest number in the given matrix. So, the search space will be [min(matrix), max(matrix)].
// While applying binary search how to check if an element ‘x’ is a possible median?

// If ‘x’ is the median, the number of elements smaller or equal to ‘x’ will be surely greater than (MXN) // 2 (integer division).
// How to check how many numbers are smaller or equal to an element ‘mid’?

// One of the ways is to traverse the whole matrix and count the numbers. But in that case, the time complexity will be high. So, we have to find other ways. It is given that the matrix is row-wise sorted. So, we can apply the concept of upper bound
// For every particular row, we will find the upper bound of the current element ‘mid’. The index returned will be the number of smaller or equal elements in that row.
// We will do it for each row and add them to get the total number for the whole matrix.
// Mathematically, smaller_equal_in_row = upperBound(matrix[row], mid)
// We will just convert the above observation into code.

// Algorithm:

// Calculate min(matrix) and max(matrix): As the given matrix is row-wise sorted the minimum element will be the minimum element in the first column and the maximum will be the maximum in the last column.
// Place the 2 pointers low and high: Initially, we will place the pointers. The pointer low will point to min(matrix) and the high will point to max(matrix).
// Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula: mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Use the calculateSmallEqual() function to get the number of elements <= mid: Inside the function, we will use the above-mentioned upper bound formula for each row and calculate the total number of elements <= mid. Then we will return the total number from the function calculateSmallEqual().
// If smallEqual <= (M*N) // 2: We can conclude that our median must be a bigger number. So, we will eliminate the left i.e. the smaller half (low = mid+1).
// If smallEqual > (M*N) // 2: We can conclude that the element mid might be the median. But we have to reach the smallest number to find the actual median. So, in this case, we will remove the right half( i.e. high = mid-1).
// The steps from 3-6 will be inside a loop and the loop will continue until low crosses high

// Solution
const upperBound = function(arr, x, n) {
    let low = 0, high = n - 1;
    let ans = n;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an ans
        if(arr[mid] > x) {
            ans = mid; // found a bigger number
            // look for a smaller index in the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }

    return ans;
};

const countSmallEqual = function(matrix, m, n, x) {
    let count = 0;
    for(let i = 0; i < m; i++) {
        count = count + upperBound(matrix[i], x, n);
    }

    return count;
};

const median = function(matrix, m, n) {
    // we need our low and high
    let low = Number.MAX_SAFE_INTEGER, high = Number.MIN_SAFE_INTEGER;

    // now we need to loop the row to get the low and high index of the matrix
    for(let i = 0; i < m; i++) {
        low = Math.min(low, matrix[i][0]); // first/ smallest index
        high = Math.max(high, matrix[i][n - 1]); // last/ largest index
    }

    let req = Math.floor((m * n) / 2); // median

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let smallEqual = countSmallEqual(matrix, m, n, mid);
        if(smallEqual <= req) low = mid + 1;
        else high = mid - 1;
    }

    return low;
};

console.log("Optimal Ans:", median(matrix, n, m));