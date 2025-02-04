// M-Coloring Problem
// You are given an undirected graph consisting of v vertices and a list of edges, along with an integer m. Your task is to determine whether it is possible to color the graph using at most m different colors such that no two adjacent vertices share the same color. Return true if the graph can be colored with at most m colors, otherwise return false.
// Note: The graph is indexed with 0-based indexing.
// Examples:
// Input: v = 4, edges[] = [(0,1),(1,2),(2,3),(3,0),(0,2)], m = 3
// Output: true
// Explanation: It is possible to color the given graph using 3 colors, for example, one of the possible ways vertices can be colored as follows:
// Vertex 0: Color 3
// Vertex 1: Color 2
// Vertex 2: Color 1
// Vertex 3: Color 2
// Input: v = 3, edges[] = [(0,1),(1,2),(0,2)], m = 2
// Output: false
// Explanation: It is not possible to color the given graph using only 2 colors because vertices 0, 1, and 2 form a triangle.

// Approach
// TC - O(N^m) and SC - O(N) + O(N)
// Basically starting from vertex 0 color one by one the different vertices. 
// Base condition: If I have colored all the N nodes return true.
// Recursion: Trying every color from 1 to m with the help of a for a loop. 
// Is safe function returns true if it is possible to color it with that color i.e none of the adjacent nodes have the same color.
// In case this is an algorithm and follows a certain intuition, please mention it. 
// Color it with color i then call the recursive function for the next node if it returns true we will return true.
// And If it is false then take off the color.
// Now if we have tried out every color from 1 to m and it was not possible to color it with any of the m colors then return false.

// Solution
const graphColoring = function(v, edges, m) {
    // create a adjancency list
    let adj = new Array(v).fill(null).map(() => []);
    for(let [u, w] of edges) {
        adj[u].push(w);
        adj[w].push(u);
    }

    // create a arr to store colors assigned to vertices
    let colors = new Array(v).fill(0);

    // helper function to check if a color assignment is valid
    function isSafe(node, color) {
        for(let neighbour of adj[node]) {
            if(colors[neighbour] === color) {
                return false;
            }
        }

        return true;
    };

    // recursive function to assign colors
    function solve(node) {
        // handle the base case
        if(node === v) return true; // All nodes are colored successfully

        for(let c = 1; c <= m; c++) {
            if(isSafe(node, c)) {
                colors[node] = c;
                if(solve(node + 1)) return true; // recur for the next node
                colors[node] = 0; // Backtrack if coloring is not possible
            }
        }

        return false; // no valid color assignment possible
    };

    return solve(0);
};

console.log(graphColoring(4, [[0,1],[1,2],[2,3],[3,0],[0,2]], 3)); // true
console.log(graphColoring(3, [[0,1],[1,2],[0,2]], 2)); // false