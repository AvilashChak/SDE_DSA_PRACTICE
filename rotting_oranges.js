// Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.


// Approach
// -> First of all we will create a Queue data structure to store coordinate of Rotten Oranges

//     We will also have variables as:

// Total_oranges - It will store total number of oranges in the grid ( Rotten + Fresh )
// Count - It will store the total number of oranges rotten by us . 
// Total_time - total time taken to rotten.
// -> After this, we will traverse the whole grid and count the total number of oranges in the grid and store it in Total_oranges. Then we will also push the rotten oranges in the Queue data structure as well.

// -> Now while our queue is not empty,  we will pick up each Rotten Orange and check in all its 4 directions whether a Fresh orange is present or not. If it is present we will make it rotten and push it in our queue data structure and pop out the Rotten Orange which we took up as its work is done now.

// -> Also we will keep track of the count of rotten oranges we are getting.

// -> If we rotten some oranges, then obviously our queue will not be empty. In that case, we will increase our total time. This goes on until our queue becomes empty. 

// -> After it becomes empty, We will check whether the total number of oranges initially is equal to the current count of oranges. If yes, we will return the total time taken, else will return -1 because some fresh oranges are still left and can’t be made rotten.

// Solution
// TC - O(m * n) and SC - O(m * n)

const orangesRotting = function(grid) {
    let m = grid.length; // row
    let n = grid[0].length; // col
    let t = 0,  total = 0, count = 0;
    let queue = [];

    // create a copy of the grid as the visited row
    let visited = grid.map((row) => [...row]);

    // count total oranges and rotten one in the queue
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(grid[i][j] !== 0) total++;
            if(grid[i][j] === 2) queue.push([i, j]);
        }
    }

    let drow = [-1, 0, 1, 0];
    let dcol = [0, 1, 0, -1];

    while(queue.length > 0) {
        let size = queue.length;
        count = count + size;

        for(let i = 0; i < size; i++) {
            let [r, c] = queue.shift();

            for(let j = 0; j < 4; j++) {
                let nr = r + drow[j];
                let nc = c + dcol[j];

                if(nr < 0 || nc < 0 || nr >= m || nc >= n || visited[nr][nc] !== 1) continue;

                visited[nr][nc] = 2;
                queue.push([nr, nc]);
            }
        }

        if(queue.length !== 0) t++;
    }

    return total === count ? t : -1;

};

let grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];

let rotting = orangesRotting(grid);
console.log("Minimum Number of Minutes Required:", rotting);