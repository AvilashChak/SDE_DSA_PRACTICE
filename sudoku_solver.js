// Sudoku Solver
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.
// Example 1:
// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]

// Approach - TC - O(9(n^2)) and SC - O(1)
// Since we have to fill the empty cells with available possible numbers and we can also have multiple solutions, the main intuition is to try every possible way of filling the empty cells. And the more correct way to try all possible solutions is to use recursion. In each call to the recursive function, we just try all the possible numbers for a particular cell and transfer the updated board to the next recursive call.

// Solution
const solveSudoku = function(board) {
    // iterate in the 9 * 9 size board
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            if(board[i][j] === '.') { // we will start filling the empty spaces
                for(let c = 1; c <= 9; c++) {
                    let char = c.toString(); // convert the number to string
                    if(isValid(board, i, j, char)) {
                        board[i][j] = char;

                        // now we will call the recursive func
                        if(solveSudoku(board)) {
                            return true;
                        }
                        else {
                            board[i][j] = '.'; // backtrack
                        }
                    }
                }
                return false; // no valid number found, backtrack
            }
        }
    }
    return true;
};

// Helper function
const isValid = function(board, row, col, c) {
    // check the row and col simultaneously
    for(let i = 0; i < 9; i++) {
        // check if the number is in the same row and col
        if(board[row][i] === c || board[i][col] === c) {
            return false;
        }
        
        // Check 3x3 grid
        let ri = Math.floor(row / 3) * 3 + Math.floor(i / 3);
        let ci = Math.floor(col / 3) * 3 + (i % 3);
        if(board[ri][ci] === c) {
            return false;
        }
    }

    return true; // valid placement
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]];

console.log("Ans: ", solveSudoku(board));