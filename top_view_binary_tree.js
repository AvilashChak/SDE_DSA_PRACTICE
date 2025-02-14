// Top View of Binary Tree
// You are given a binary tree, and your task is to return its top view. The top view of a binary tree is the set of nodes visible when the tree is viewed from the top.

// Note: 

// Return the nodes from the leftmost node to the rightmost node.
// If two nodes are at the same position (horizontal distance) and are outside the shadow of the tree, consider the leftmost node only. 
// Examples:

// Input: root[] = [1, 2, 3] 
 
// Output: [2, 1, 3]
// Input: root[] = [10, 20, 30, 40, 60, 90, 100]
 
// Output: [40, 20, 10, 30, 100]
// Explaination: The root 10 is visible.
// On the left, 40 is the leftmost node and visible, followed by 20.
// On the right, 30 and 100 are visible. Thus, the top view is 40 20 10 30 100.
// Input: root[] = [1, 2, 3, N, 4, N, N, N, 5, N, 6]
//        1
//      /   \
//     2     3
//      \   
//       4
//        \
//         5
//          \
//           6
// Output: [2, 1, 3, 6]
// Explaination: Node 1 is the root and visible.
// Node 2 is the left child and visible from the left side.
// Node 3 is the right child and visible from the right side.
// Nodes 4, 5, and 6 are vertically aligned, but only the lowest node 6 is visible from the top view. Thus, the top view is 2 1 3 6.

// Approach
// Algorithm / Intuition
// To imagine the Binary Tree from above, we visualise vertical lines passing through the tree. Each vertical line represents a unique vertical position. Nodes to the right of the tree’s centre are assigned positive vertical indexes. As we move to the right, the vertical index increases. Nodes to the left of the tree’s centre are assigned negative vertical indexes. As we move to the left, the vertical index decreases.


// We use a map data structure to store the nodes corresponding to each vertical level of the tree as the map automatically sorts the elements based on their ascending value. Against each vertical level, the node highest in the tree at that vertical level is added by traversing the tree level order wise (BFS).


// Algorithm:

// Step 1: Create a vector `ans` to store the result. Check if the tree is empty. If it is, return an empty vector.

// Step 2: Create a map to store the top view of nodes based on their vertical positions. The key of this map is the vertical index and the value is the node’s data.

// Step 3: Initialise a queue to perform breadth first traversal. Each element of this queue is the node of the binary tree along with its vertical coordinate. Enqueue the root node into the queue with its vertical position initialised to 0.


// Step 4: While the queue is not empty, pop the front node of the queue and for this node:

// Get its vertical position. If this vertical position is not in the map, add the node’s data to the map. This means that this node is the first node encountered at this vertical position during the traversal.
// If the vertical position of this node is already a key in the map, it implies that a node higher in the tree with the same vertical position has already been processed.
// Enqueue the left child with a decreased vertical position ie. current vertical index -1. As when we move to the left child, we are moving towards the left column in the vertical order traversal.
// Enqueue the right child with an increased vertical position ie. current vertical index + 1. As when we move to the right child, we are moving towards the right column in the vertical order traversal.

// Step 5: Iterate over the map and push the values of each node into the top view traversal.

// Since the keys of the map are sorted based on their keys (vertical positions), the nodes added to the `ans` vector will be sorted left to right.
// Return the ‘ans’ vector.

// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const topView = function(root) {
    // store res in a empty arr
    let arr = [];

    // check if tree is empty
    if(root === null) return arr;

    // map where we will store the line and node.data
    let map = new Map();

    // queue where we will store the node and line
    let q = [];

    // intialize the queue with root 0
    q.push([root, 0]);

    // bfs
    while(q.length > 0) {
        // retreive the node and line from the front
        let [node, line] = q.shift();

        // we will check in map if it has the line if not then add
        if(!map.has(line)) {
            map.set(line, node.val);
        }

        // process the left child
        if(node.left !== null) {
            q.push([node.left, line - 1]);
        }

        // process the right child
        if(node.right !== null) {
            q.push([node.right, line + 1]);
        }
    }

    let sortedKeys = [...map.keys()].sort((a, b) => a- b);
    for(let val of sortedKeys) {
        arr.push(map.get(val));
    }

    return arr;
};


// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(6);
root.right = new Node(3);
root.right.right = new Node(7);

console.log("Top View:", topView(root));