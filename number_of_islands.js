// Number of islands(Do in Grid and Graph Both)
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3


// Approach
// Create a visited array:
// This will be a 2D array of the same size as the grid, initialized with false.
// Iterate through the grid:
// If a land cell ("1") is unvisited, start a BFS traversal.
// Mark it as visited and process all connected land cells.
// BFS Traversal:
// Use a queue to explore the four adjacent cells (up, down, left, right).
// If an adjacent cell is land ("1") and not visited, mark it and add it to the queue.
// Count the islands:
// Every BFS traversal corresponds to one island.
// Increment islandCount for each BFS call.

// Solution
// TC - O(n^2) and SC - O(n^2)

const numIslands = function(grid) {
    // base case
    if(!grid || grid.length === 0) return 0;

    let n = grid.length;
    let m = grid[0].length;
    let islandCount = 0;

    // We will create a visited arr to track the visited cells
    let visited = Array.from({ length: n }, () => Array(m).fill(false));

    for(let row = 0; row < n; row++) {
        for(let col = 0; col < m; col++) {
            if(!visited[row][col] && grid[row][col] === '1') {
                islandCount++;
                bfs(row, col, visited, grid);
            }
        }
    }
    return islandCount;
};

const bfs = function(row, col, visited, grid) {
    let n = grid.length;
    let m = grid[0].length;
    visited[row][col] = 1;
    let q = [];
    q.push([row, col]);

    while(q.length > 0) {
        let [row, col] = q.shift();

        // traverse the neighbours and mark them if it's a land
        for(let delrow = -1; delrow <= 1; delrow++) {
            for(let delcol = -1; delcol <= 1; delcol++) {
                let nrow = row + delrow;
                let ncol = col + delcol;

                if(nrow > 0 && nrow < n && ncol > 0 && ncol < m &&
                    !visited[nrow][ncol] && grid[nrow][ncol] === '1') {
                        visited[nrow][ncol] = 1;
                        q.push([nrow, ncol]);
                }
            }
        }
    }
};

const grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log("No of Islands:", numIslands(grid));