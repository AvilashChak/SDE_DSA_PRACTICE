// N queens Problem
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
// Example 1:
// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:
// Input: n = 1
// Output: [["Q"]]

// Approach - TC - O(N!) and SC - O(N^2)
// Approach: Backtracking with Optimized Conflict Tracking
// We use recursion and backtracking to place queens column by column while ensuring no two queens attack each other.
// 1️⃣ Data Structures for Conflict Tracking
// We use three sets to track conflicts efficiently in O(1) time:
// rows → Tracks occupied rows.
// upperDiag (row + col) → Tracks anti-diagonal (↙↗).
// lowerDiag (row - col) → Tracks main diagonal (↘↖).
// 2️⃣ Backtracking Function (backtrack(col))
// Base Case: If col == n, add the board configuration to results.
// Try placing a queen in each row (row = 0 to n-1):
// If rows, upperDiag, or lowerDiag contains the position, skip it.
// Otherwise, place the queen and update the sets.
// Recur to place the next queen (backtrack(col + 1)).
// Backtrack (remove the queen and restore the state).

// Solution
const solveQueens = function(n) {
    let result = [];
    // temporary board to track queen placements 
    let board = new Array(n).fill().map(() => new Array(n).fill('.'));

    let rows = new Set(); // track rows with placed queens
    let upperDiag = new Set(); // row + col (antiDiag)
    let lowerDiag = new Set(); // row - col (mainDiag)

    function backTrack(col) {
        // handle the base case
        if(col === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        // iterate over the rows
        for(let row = 0; row < n; row++) {
            // skip the invalid placements of Q
            if(rows.has(row) || upperDiag.has(row + col) || lowerDiag.has(row - col)) {
                continue;
            }

            // Place the queen
            board[row][col] = 'Q';
            rows.add(row);
            upperDiag.add(row + col);
            lowerDiag.add(row - col);

            // recur to place next queen in next col
            backTrack(col + 1);

            // Backtrack: remove the queen and restore the state
            board[row][col] = '.';
            rows.delete(row);
            upperDiag.delete(row + col);
            lowerDiag.delete(row - col);
        }
    };

    backTrack(0);
    return result;
};

console.log(solveQueens(4));