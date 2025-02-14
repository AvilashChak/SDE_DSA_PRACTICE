// Bottom View of Binary Tree
// Given a binary tree, return an array where elements represent the bottom view of the binary tree from left to right.

// Note: If there are multiple bottom-most nodes for a horizontal distance from the root, then the latter one in the level traversal is considered. For example, in the below diagram, 3 and 4 are both the bottommost nodes at a horizontal distance of 0, here 4 will be considered.

// 20
// /    \
// 8       22
// /   \     /   \
// 5      3 4     25
// /    \      
// 10       14

// For the above tree, the output should be 5 10 4 14 25.

// Examples :

// Input:
// 1
// /   \
// 3     2
// Output: 3 1 2
// Explanation: First case represents a tree with 3 nodes and 2 edges where root is 1, left child of 1 is 3 and right child of 1 is 2.

// Thus bottom view of the binary tree will be 3 1 2.
// Input:
// 10
// /    \
// 20    30
// /  \
// 40   60
// Output: 40 20 60 30
// Input:
// 1
// /   
// 2
// Output: 2 1

// Approach - Level Order traversal
// To imagine the Binary Tree from above, we visualise vertical lines passing through the tree. Each vertical line represents a unique vertical position. Nodes to the right of the tree’s centre are assigned positive vertical indexes. As we move to the right, the vertical index increases. Nodes to the left of the tree’s centre are assigned negative vertical indexes. As we move to the left, the vertical index decreases.
// We use a map data structure to store the nodes corresponding to each vertical level of the tree as the map automatically sorts the elements based on their ascending value. Against each vertical level, the node lowest in the tree at that vertical level is added by traversing the tree level order wise (BFS).

// Algorithm:

// Step 1: Create a vector `ans` to store the result. Check if the tree is empty. If it is, return an empty vector.

// Step 2: Create a map to store the top view of nodes based on their vertical positions. The key of this map is the vertical index and the value is the node’s data.

// Step 3:Initialise a queue to perform breadth first traversal. Each element of this queue is the node of the binary tree along with its vertical coordinate. Enqueue the root node into the queue with its vertical position initialised to 0.


// Step 4: While the queue is not empty, pop the front node of the queue and for this node:

// Get its vertical position. If this vertical position is not in the map, add the node’s data to the map. This means that this node is the first node encountered at this vertical position during the traversal.
// If the vertical position of this node is already a key in the map, it implies that a node higher in the tree with the same vertical position has already been processed. Overwrite this position with the current node as we want to get the lowest node of that vertical index.
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

const bottomView = function(root) {
    // store res in an empty arr 
    let arr = [];

    // check if the tree is empty
    if(root === null) return arr;

    // we need a map where we will store the line as key and node.val as value
    let map = new Map();

    // we need a queue where we will store the node and line 
    let q = [];

    // push the root node with its vertical postion (0) into the queue
    q.push([root, 0]);

    // BFS traversal
    while(q.length > 0) {
        // retrieve node and vertical position from the front of the queue
        let [node, line] = q.shift();

        // update the map with node's data and vertical position
        map.set(line, node.val);

        // Process the left child
        if(node.left !== null) {
            // push left child with decreased vertical position in the queue
            q.push([node.left, line - 1]);
        }

        // Process the right child
        if(node.right !== null) {
            // push the right child with increased vertical position in the queue
            q.push([node.right, line + 1]);
        }

    }
    // trasfer from map to res arr
    let sortedKeys = [...map.keys()].sort((a, b) => a - b);
    for(let val of sortedKeys) {
        arr.push(map.get(val));
    }

    return arr;
};




// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.left.left.right = new Node(5);
root.left.left.right.right = new Node(6);
root.right = new Node(3);
root.right.right = new Node(10);
root.right.left = new Node(9);

console.log("Bottom View:", bottomView(root));