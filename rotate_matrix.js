// Rotate Matrix

// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Approach
// So by BF we observed that the martix index is changing in the below 
//  i  j      j
// [0][0] -> [0][2] 
// [0][1] -> [1][2] 
// [0][2] -> [2][2]
// so from the above we can observe j is swaping it's place and how the i is constant when changed the second is constant too. so from here we can say that (n - 1) - i. 
// so in this approach we need to run two loops i and j. which will have more time and space complexity

// Solution
// TC - O(n^2) and SC - O(n)

var rotateMatrix = function(matrix) {
    let n = matrix.length;
    let rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            rotated[j][n - i - 1] = matrix[i][j];
        }
    }

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            matrix[i][j] = rotated[i][j]
        }
    }

    return matrix;
};


// the optimal approach will be 
// first we need to transpose(col becomes row, row becomes col) and then we need to reverse
// after transpose the diagonal will be same and below are the indexes that we observe
//  i  j
// [0][1] -> [1][0] 
// [0][2] -> [2][0] 
// [1][2] -> [2][1]
// (1 to 2)
// i+1   n-1

// Solution 
// TC - O(n^2) and SC - O(1)
const rotate = function(matrix) {
    let n = matrix.length;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for(let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};

const mat = [[1,2,3],[4,5,6],[7,8,9]];
const mat1 = [[1,2,3],[4,5,6],[7,8,9]];
console.log("Using BF:", rotateMatrix(mat1));
console.log();
const result = rotate(mat);
console.log(mat);