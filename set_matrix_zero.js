// Set Matrix Zeroes

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Intuition:
// We need to modify the matrix in-place, so we can't use an auxiliary matrix or hash table. We can instead use the first row and first column of the original matrix as a replacement for the auxiliary array. This way, we can save the extra space required for the auxiliary arrays and also set the values in the first row and column to zero if any element in the corresponding row or column is zero.

// Approach:
// First, the code initializes two dummy vectors, dummyRow and dummyCol, with initial values of -1. These vectors will be used to mark the rows and columns that need to be set to zero.
// The code then iterates through each element of the matrix and checks if it is zero. If an element is zero, it updates the corresponding indices in dummyRow and dummyCol to 0.
// After marking the rows and columns, the code iterates through the matrix again. For each element, it checks if the corresponding row index or column index in dummyRow or dummyCol is zero. If either of them is zero, it sets the current element to zero.
// Finally, the matrix will have rows and columns set to zero based on the values in dummyRow and dummyCol.

// Complexity:
// Time complexity: O(mn), where m and n are the number of rows and columns in the matrix, respectively. We have to traverse the matrix twice.
// Space complexity: O(m+n), where m and n are the number of rows and columns in the matrix, respectively. We are using two auxiliary vectors of size m and n to keep track of the rows and columns that contain zero elements.


// Solution:
const setZeroes = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const dummyRow = new Array(row).fill(-1);
    const dummyCol = new Array(col).fill(-1);

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(matrix[i][j] == 0) {
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(dummyRow[i] == 0 || dummyCol[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};

// Optimal Approach - for constant space
// TC - O(m * n)  and SC - O(1)

const zeroMatrix = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;

    let col0 = 1; // Flag to track if the first column should be zeroed

    // Step 1: Traverse the matrix and mark the first row and column accordingly
    for (let i = 0; i < row; i++) {
        if (matrix[i][0] === 0) col0 = 0; // Track if the first column needs to be zeroed
        
        for (let j = 1; j < col; j++) { // Start from j = 1 to avoid marking col0 incorrectly
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0; // Mark row
                matrix[0][j] = 0; // Mark column
            }
        }
    }

    // Step 2: Zero out cells based on markers (from bottom-right to top-left, skipping first row & col)
    for (let i = row - 1; i > 0; i--) {
        for (let j = col - 1; j > 0; j--) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // Step 3: Zero out the first row if needed
    if (matrix[0][0] === 0) {
        for (let j = 0; j < col; j++) {
            matrix[0][j] = 0;
        }
    }

    // Step 4: Zero out the first column if needed
    if (col0 === 0) {
        for (let i = 0; i < row; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
};


const mat = [[1,1,1],[1,0,1],[1,1,1]];
const mat1 = [[1,1,1],[1,0,1],[1,1,1]];
const result = setZeroes(mat);
console.log("result is: " , result);
console.log("Using optimal approach:", zeroMatrix(mat1));