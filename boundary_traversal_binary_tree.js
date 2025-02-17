// Boundary Traversal of a Binary Tree
// Problem Statement: Given a Binary Tree, perform the boundary traversal of the tree. The boundary traversal is the process of visiting the boundary nodes of the binary tree in the anticlockwise direction, starting from the root.

// Algorithm / Intuition
// The boundary traversal algorithm should be divided into three main parts traversed in the anti-clockwise direction:

// Left Boundary: Traverse the left boundary of the tree. Start from the root and keep moving to the left child; if unavailable, move to the right child. Continue this until we reach a leaf node.

// Bottom Boundary: Traverse the bottom boundary of the tree by traversing the leaf nodes using a simple preorder traversal. We check if the current node is a leaf, and if so, its value is added to the boundary traversal array.

// Right Boundary: The right boundary is traversed in the reverse direction, similar to the left boundary traversal starting from the root node and keep moving to the right child; if unavailable, move to the left child. Nodes that are not leaves are pushed into the right boundary array from end to start to ensure that they are added in the reverse direction.

// Algorithm:

// Step 1: Initialise an empty array to store the boundary traversal nodes.

// Step 2: Create a helper function to check if a node is a leaf. This is to avoid cases where there will be an overlap in the traversal of nodes. We exclude leaf nodes when adding left and right boundaries as they will already be added when in the bottom boundary.

// Step 3: Initialise a recursive function `addLeftBoundary` and a vector to store the left traversal.

// Start from the root of the tree.
// Traverse down the left side of the tree until we reach a leaf node. For each non-leaf node, add its value to the result list.
// Traverse to its left child. If unavailable, call the recursion function to its right child.

// Step 4: Implement a recursive function `addLeafNodes` and a vector to store the bottom traversal.

// If the current node is a leaf, add its value to the result list.
// Recursively travel to the current nodes left and right subtrees in a preorder fashion.

// Step 5: Implement a recursive function `addRightBoundary` and a vector to store the right traversal.

// Start from the root of the tree.
// Traverse to the right most side of the tree until we reach a leaf node.
// For each non-leaf node, call the recursive function to its right child; if unavailable, call to its left child.
// While the recursion backtracks, add the current node’s value to the result list.

// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to check if a node is a leaf
const isLeaf = function(root) {
    return !root.left && !root.right;
};

// Function to add the left boundary of the tree
const addLeftBoundary = function(root, res) {
    let cur = root.left;
    while(cur) {
        // if the current node is not leaf add to the result
        if(!isLeaf(cur)) {
            res.push(cur.val);
        }
        // move to the left child if exists otherwise move to the right child
        if(cur.left) {
            cur = cur.left;
        }
        else {
            cur = cur.right;
        }
    }
};

// Function to add the right boundary of the tree in a reverse order
const addRightBoundary = function(root, res) {
    let cur = root.right;
    let temp = [];
    while(cur) {
        // if the cur node is not leaf add to res
        if(!isLeaf(cur)) {
            temp.push(cur.val);
        }
        // move to the right child if exists otherwise move to the left child
        if(cur.right) {
            cur = cur.right;
        }
        else {
            cur = cur.left;
        }
    }
    // reverse and add the value of temp to the res
    for(let i = temp.length - 1; i >=0; --i) {
        res.push(temp[i]);
    }
};

// Function to add the leaves of the tree
const addLeaves = function(root, res) {
    // if the current node is leave add to the result
    if(isLeaf(root)) {
        res.push(root.val);
        return;
    }
    // if not recursively add the leaves of the left and right subtree
    if(root.left) {
        addLeaves(root.left, res);
    }
    if(root.right) {
        addLeaves(root.right, res);
    }
};

// Main function to perform the boundary traversal of the binary tree
const printBoundary = function(root) {
    let res = [];
    // base case
    if(!root) return res;

    // if the root is not a leaf add its value to the result
    if(!isLeaf(root)) {
        res.push(root.val);
    }

    // add left, leaves and right boundary in order
    addLeftBoundary(root, res);
    addLeaves(root, res);
    addRightBoundary(root, res);

    return res;
};




// Creating a sample binary tree
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Boundary Traversal of a Binary Tree:", printBoundary(root));