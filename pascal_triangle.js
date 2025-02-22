// Problem statement
// You are given an integer ‘N’. You need to return the first ‘N’ rows of Pascal’s triangle.

// Example:

// Input:
// N = 4
// Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// Explanation: The output matrix has the first four rows of Pascal’s Triangle. 

// We always need to take the col with 0 indexing approach
// hence the ans will always divide by col and multiply by (row - col)

// Solution
// TC - O(n^2) and SC - O(1)
const generateRows = function(row) {
    let ans = 1;
    let ansRow = [];
    ansRow.push(ans);
    for(let col = 1; col < row; col++) {
        ans = ans * (row - col);
        ans = ans / (col);
        ansRow.push(ans);
    }
    return ansRow;
};

const generate = function(numRows) {
    let ans = [];
    for(let i = 1; i <= numRows; i++) {
        ans.push(generateRows(i));
    }
    return ans;
};

const result = generate(5);
console.log("Answer is: ", result);