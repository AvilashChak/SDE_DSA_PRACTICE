// Search a 2D Matrix

// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Approach
// BF - TC - O(n * m) and SC - O(1);
// We need to traverse the whole matrix

// Solution

const bfSearchMatrix = function(matrix, target) {
    let row =  matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i < row - 1; i++) {
        for(let j = 0; j < col - 1; j++) {
            if(matrix[i][j] === target) {
                return true;
            }
        }
    }
    return false;
};

const arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const arr2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
const tar = 3;
const tar2 = 13;
const result = bfSearchMatrix(arr2, tar2);
console.log("Ans is: ", result);

// Approach
// Better - TC - O(n) + (log2 m) and SC - O(1)
// We can traverse through each row and check whether the target is present. and need to do binary serach to get the target

// Solution
const bs = function(matrix, target) {
    let low = 0;
    let high = matrix.length - 1;
    let mid = Math.floor((low + high) / 2);

    while(low <= high) {
        if(matrix[mid] === target) {
            return true;
        }
        else if(matrix[mid] < target) {
            low = mid + 1;
        } 
        else {
            high = mid - 1;
        }
    }
    return false;
};

const bsSearchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    for(let i = 0; i < row; i++) {
        if(matrix[i][0] <= target && target <= matrix[i][col-1]) {
            return bs(matrix[i], target);
        }
    }
};

const bsres = bsSearchMatrix(arr, tar);
console.log("bsres: ", bsres);

// Approach
// Optimal - TC - O(log2 (n*m) and SC - O(1)
// Hypothetically we need to flaten the 2d matrix into 1d. 
// Convert the 1D cordinate to 2D cordinate. Once we convert it then we can do binary search and get our target.
// Formula : row - ind/col , col = ind % col.

// Solution
const searchMatrix = function(matrix, target) {
    let n = matrix.length;
    let m = matrix[0].length;
    let low = 0;
    let high = (n * m) - 1; // in 2D matrix we take high like this
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let row = Math.floor(mid / m);
        let col = mid % m;
        if(matrix[row][col] === target) return true;
        else if(matrix[row][col] < target) low = mid + 1;
        else high = mid - 1;
    }
    return false;
};

const searchMat = searchMatrix(arr2, tar2);
console.log("Target is found: ", searchMat);