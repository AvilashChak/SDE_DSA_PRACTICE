// Rat in a Maze
// Consider a rat placed at position (0, 0) in an n x n square matrix mat. The rat's goal is to reach the destination at position (n-1, n-1). The rat can move in four possible directions: 'U'(up), 'D'(down), 'L' (left), 'R' (right).
// The matrix contains only two possible values:
// 0: A blocked cell through which the rat cannot travel.
// 1: A free cell that the rat can pass through.
// Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list.+
// The task is to find all possible paths the rat can take to reach the destination, starting from (0, 0) and ending at (n-1, n-1), under the condition that the rat cannot revisit any cell along the same path. Furthermore, the rat can only move to adjacent cells that are within the bounds of the matrix and not blocked.
// Return the final result vector in lexicographically smallest order.
// Examples:
// Input: mat[][] = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]]
// Output: ["DDRDRR", "DRDDRR"]
// Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.
// Input: mat[][] = [[1, 0], [1, 0]]
// Output: []
// Explanation: No path exists and the destination cell is blocked.
// Input: mat = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
// Output: ["DDRR", "RRDD"]
// Explanation: The rat has two possible paths to reach the destination: 1. "DDRR" 2. "RRDD", These are returned in lexicographically sorted order.


// Intuition:
// The best way to solve such problems is using recursion.

// Approach:
// Start at the source(0,0) with an empty string and try every possible path i.e upwards(U), downwards(D), leftwards(L) and rightwards(R).
// As the answer should be in lexicographical order so it's better to try the directions in lexicographical order i.e (D,L,R,U)
// Declare a 2D-array named visited because the question states that a single cell should be included only once in the path,so it's important to keep track of the visited cells in a particular path.
// If a cell is in path, mark it in the visited array.
// Also keep a check of the “out of bound” conditions while going in a particular direction in the matrix. 
// Whenever you reach the destination(n,n) it's very important to get back as shown in the recursion tree.
// While getting back, keep on unmarking the visited array for the respective direction.Also check whether there is a different path possible while getting back and if yes, then mark that cell in the visited array.


// Solution
// TC - O(4^m*n) and SC - O(4M)

const findPath = function(mat) {
    let n = mat.length;
    let result = [];

    // Base case: and to avoid unnecessary rescursion calls and processing
    if(mat[0][0] === 0 || mat[n-1][n-1] === 0) return result; // empty arr
    
    // first we will create a visited 2D arr where we will track the moves
    let visited = Array.from({length: n}, () => Array(n).fill(0));

    // store the directions in lexicographical order in a string
    let directions = "DLRU";
    // store the indexes of i and j in a arr
    let di = [1, 0, 0, -1]; // D L R U
    let dj = [0, -1, 1, 0];

    // recursive func
    function solve(i, j, move) {
        // handle the base case
        if(i === n - 1 && j === n - 1) {
            result.push(move);
            return;
        }

        // loop through the ind
        for(let ind = 0; ind < 4; ind++) {
            let nexti = i + di[ind];
            let nextj = j + dj[ind];

            // we will check the out of bounds, visited = 0 and mat indexes = 1 or not
            if(nexti >= 0 && nextj >= 0 && nexti < n && nextj < n && visited[nexti][nextj] === 0 && mat[nexti][nextj] === 1) {
                visited[i][j] = 1;
                solve(nexti, nextj, move + directions[ind]);
                visited[i][j] = 0; // bactrack
            }
        }
    };

    if(mat[0][0] === 1) solve(0, 0, "");
    return result;
};

const mat = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]];
console.log("Ans:", findPath(mat));