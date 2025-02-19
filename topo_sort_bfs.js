// Topological Sort (BFS)
// Given an adjacency list for a Directed Acyclic Graph (DAG) where adj[u] contains a list of all vertices v such that there exists a directed edge u -> v. Return topological sort for the given graph.

// Topological sorting for Directed Acyclic Graph (DAG) is a linear ordering of vertices such that for every directed edge u -> v, vertex u comes before v in the ordering.
// Note: As there are multiple Topological orders possible, you may return any of them. If your returned Topological sort is correct then the output will be 1 else 0.

// Examples:

// Input: adj = [[], [0], [0], [0]] 

// Output: 1
// Explanation: The output 1 denotes that the order is valid. Few valid Topological orders for the given graph are:
// [3, 2, 1, 0]
// [1, 2, 3, 0]
// [2, 3, 1, 0]
// Input: adj = [[], [3], [3], [], [0,1], [0,2]]

// Output: 1
// Explanation: The output 1 denotes that the order is valid. Few valid Topological orders for the graph are:
// [4, 5, 0, 1, 2, 3]
// [5, 2, 4, 0, 1, 3]


// Intuition: 

// The question states that if there is an edge between u and v then u should appear before v, Which means we have to start this question from a node that doesn't have any previous edges. But how to find that node that has no edge before if? Here, we use the concept of in-degree (Number of edges pointing toward a node). We find an in-degree which has indegree=0 and we start from this. We use the Indegree concept to find topological sorting. Let’s see how.

//Approach:

// In order to maintain the In-degree of each and every node, we take an array of size v( where v is the number of nodes).
// Find in-degree of all nodes and fill them in an array
// Now take Queue data structure and add nodes that have in-degree is 0 (as we discussed in the intuition), and simply apply bfs on queue with some condition.
// Take the top/peek node from Queue ( let the popped node be x), add this x to our answer. (If you can observe clearly the above step is nothing but Normal BFS traversal).

// We'll apply some conditions to the BFS:
// Now take neighbour nodes of popped nodes and reduce their in-degree by 1.
// Check if any of the popped element nodes in degree becomes 0, after reducing in-degree by 1 if it happens then add this neighbour element to the queue for which the in-degree became zero.
// Repeat step 4 till the queue becomes empty.
//      We’ll apply some conditions to the BFS:

//   a) Now take neighbour nodes of popped nodes and reduce their indegree by 1.

//   b) Check if any of popped element nodes in degree become 0, after reducing in-degree by 1, if it happens then add this neighbour element which in-degree became 0 to the queue.

// Solution
// TC - O(V + E) and SC - O(V + E)

const topologicalSort = function(V, adj) {
    // Step 1: Create an array to store in-degree (number of incoming edges) for each node
    let indegree = new Array(V).fill(0);
    let queue = []; // Queue for processing nodes with 0 in-degree
    let topoOrder = []; // Array to store the topological order

    // Step 2: Calculate in-degree for each node
    for(let i = 0; i < V; i++) {
        for(let neighbour of adj[i]) {
            indegree[neighbour]++; // Increase in-degree for the neighboring node
        }
    }

    // Step 3: Push nodes with in-degree 0 into the queue (starting points)
    for(let i = 0; i < V; i++) {
        if(indegree[i] === 0) {
            queue.push(i);
        }
    }

    // Step 4: Process nodes in the queue using BFS
    while(queue.length > 0) {
        let node = queue.shift(); // Dequeue a node with 0 in-degree
        topoOrder.push(node); // Add it to the topological order

        // Step 5: Reduce in-degree of all its adjacent nodes
        for(let neighbour of adj[node]) {
            indegree[neighbour]--; // Reduce in-degree as we processed the node
            
            // Step 6: If in-degree becomes 0, add the node to the queue
            if(indegree[neighbour] === 0) {
                queue.push(neighbour);
            }
        }
    }

    // Step 7: If all nodes are processed, return the topological order
    // If the number of processed nodes is less than V, a cycle exists, return an empty array
    return topoOrder.length === V ? topoOrder : [];
};

// Function to verify if the given topological order is valid
const isValidTopologicalOrder = function(V, adj, topoOrder) {
    // Step 1: Create an array to store the position of each node in the given topological order
    let pos = new Array(V);
    for(let i = 0; i < V; i++) {
        pos[topoOrder[i]] = i; // Store position index of each node in the order
    }

    // Step 2: Check if every directed edge u -> v satisfies pos[u] < pos[v]
    for(let u = 0; u < V; u++) {
        for(let v of adj[u]) {
            if(pos[u] > pos[v]) {
                return 0; // If any edge is in reverse order, it's invalid
            }
        }
    }

    return 1; // Valid topological order
};



// Test Cases
let adj1 = [[], [0], [0], [0]];
let result1 = topologicalSort(4, adj1);
console.log("Topological order:", result1);
console.log(isValidTopologicalOrder(4, adj1, result1)); // Output: 1

let adj2 = [[], [3], [3], [], [0, 1], [0, 2]];
let result2 = topologicalSort(6, adj2);
console.log(isValidTopologicalOrder(6, adj2, result2)); // Output: 1

let adj3 = [[1, 2], [3], [3], []];
let result3 = topologicalSort(4, adj3);
console.log(isValidTopologicalOrder(4, adj3, result3)); // Output: 1