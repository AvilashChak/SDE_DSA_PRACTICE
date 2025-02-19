// Course Schedule - I and II
// Course Schedule I and II | Pre-requisite Tasks | Topological Sort: G-24
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take. 
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


// Approach
// We will apply the BFS(Breadth First Search) traversal technique. Breadth First Search or BFS is a traversal technique where we visit the nodes level-wise, i.e., it visits the same level nodes simultaneously, and then moves to the next level.

// Initial Configuration:

// Indegree Array: Initially all elements are set to 0. Then, We will count the incoming edges for a node and store it in this array. For example, if the indegree of node 3 is 2, indegree[3] = 2.

// Queue: As we will use BFS, a queue is required. Initially, the node with indegree 0 will be pushed into the queue.

// Answer array: Initially empty and is used to store the linear ordering.

// The algorithm steps are as follows:

// First, we will form the adjacency list of the graph using the pairs. For example, for the pair {u, v} we will add node v as an adjacent node of u in the list.
// Then, we will calculate the in-degree of each node and store it in the indegree array. We can iterate through the given adj list, and simply for every node u->v, we can increase the indegree of v by 1 in the indegree array. 
// Initially, there will be always at least a single node whose indegree is 0. So, we will push the node(s) with indegree 0 into the queue.
// Then, we will pop a node from the queue including the node in our answer array, and for all its adjacent nodes, we will decrease the indegree of that node by one. For example, if node u that has been popped out from the queue has an edge towards node v(u->v), we will decrease indegree[v] by 1.
// After that, if for any node the indegree becomes 0, we will push that node again into the queue.
// We will repeat steps 3 and 4 until the queue is completely empty. Now, completing the BFS we will get the linear ordering of the nodes in the answer array.
// For the first problem(Course Schedule): We will return the answer array if the length of the ordering equals the number of tasks. Otherwise, we will return an empty array.
// For the Second problem(Prerequisite tasks): We will return true if the length of the ordering equals the number of tasks. otherwise, we will return false.

// Solution
// TC - O(V + E) and SC - O(V + E)

const canFinish = function(numCourses, prerequisites) {
    // Step 1: Create an adjacency list, indegree arr and empty queue
    let adj = new Array(numCourses).fill(0).map(() => []);
    let indegree = new Array(numCourses).fill(0);
    let queue = [];

    // Step 2: Build the adjacency list and in-degree array
    for(let [course, prereq] of prerequisites) {
        adj[prereq].push(course);
        indegree[course]++;
    }

    // Step 3 : Add all cources with in-degree 0 in the queue
    for(let i = 0; i < numCourses; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0; // to count the processed nodes

    // Step 4: Process courses using BFS
    while(queue.length > 0) {
        let node = queue.shift(); // dequeue with 0 in-degree
        count++; // one course processed

        for(let neighbour of adj[node]) {
            indegree[neighbour]--; 
            if(indegree[neighbour] === 0) {
                queue.push(neighbour);
            }
        }
    }
    
    // Step 5: if all courses are processed return true(no cycle)
    return count === numCourses;
};



console.log(canFinish(4, [[1, 0], [2, 3]])); // true
console.log(canFinish(3, [[0, 1], [1, 2], [2, 0]])); // false