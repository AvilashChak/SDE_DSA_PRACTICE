// Unique Paths

// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
// The test cases are generated so that the answer will be less than or equal to 2 * 109.
// Example 1:
// Input: m = 3, n = 7
// Output: 28
// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Approach 
// BF - TC - exponential as we gonna try out all posible combination and SC - will also be exponential as we gonna use stack space in recursion
// We need to do recurssion where we will try to find the unique paths. 
// We know that we can move only in the right and bottom direction.
// So we will start from (0,0) and make the recursive tree so the first will be (1,0) and (0,1). So new know in recurssion we start from the left. So whenever we reach outside the matrix we can say that there is no possible paths and we will return 0. And the paths we can reach we will return 1. The paths we get from left and right we will combine them ie add them. Also we need i = 0 and j = 0 to be passed in the parameter.
// The first index is (i,j) and when we move one level down it will be (i + i, j) and (i, j + 1).
// next step is to think the base case :
// 1. i > n and j > m it will give us 0 and
// 2. i == n - 1 and j == m - 1
// and then we need to add left + right

// Solution
const bfUniquePaths = function(n, m, i=0, j=0) {
    if(i === n - 1 && j === m - 1) return 1;
    if(i >= n || j >= m) return 0;
    else {
        return bfUniquePaths(n, m, i + 1, j) + bfUniquePaths(n, m, i, j + 1);
    }
};

const n1 = 3, m1 = 7;
const bfResult = bfUniquePaths(n1, m1);
console.log("Bf Result: ", bfResult);

// DP - TC (n * m) and SC - O(n * m)
// We need to create a Hash matrix of n * m.
// We need to let go the extra recursive function. as we already found out (1,1) and again we don't need  beyond (1,1) from the right side. We can use the past data ie is called DP. Then in the n * m matrix where we first initialize with -1. Then when we get we will omit -1 and 1 to track the unique paths.

// Solution
const dPUnqiuePaths = function(n, m, i=0, j=0, dp=[]) {
    if (dp.length === 0) {
        dp = Array.from({ length: n }, () => Array(m).fill(-1));
    }

    if(i === n - 1 && j === m - 1) return 1;
    if(i >= n || j >= m) return 0;

    if(dp[i][j] !== -1) return dp[i][j];
    else {
        return dp[i][j] = dPUnqiuePaths(n, m, i + 1, j, dp) + dPUnqiuePaths(n, m, i, j + 1, dp);
    }
}

const dPResult = dPUnqiuePaths(n1, m1);
console.log("DP Result: ", dPResult);

// Optimal - TC - O(n - 1) or O(m - 1) and SC - O(1)
// For the optimal soltion we will use combination. RRD, RDR, DRR if the matrix is 2*3 matrix.
// So the Obj 1 is that we took 3 steps. The other obj is that the total number of directions is m - 1 in right and n - 1 in bottom. ie m + n -2.
// Obj 2 if do 3c2 or 3c1 (c is combination) here. Therefore m + n - 2 c m -1 or m + n -2 c n -1.

// Solution
const uniquePaths = function(n, m) {
    let N = n + m - 2; // as we can move (m -1) and (n -1) directions
    let r = m - 1;  // either m-1 or n-1 we can take for the denominator
    let res = 1;

    for(let i = 1; i <= r; i++) {
        res = res * (N - r + i) / i;
    }
    return res;
};

const up = uniquePaths(n1, m1);
console.log("Unique Paths: ", up);
