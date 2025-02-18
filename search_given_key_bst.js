// Search in a Binary Search Tree
// You are given the root of a binary search tree (BST) and an integer val.

// Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

// Example 1:
// Input: root = [4,2,7,1,3], val = 2
// Output: [2,1,3]
// Example 2:
// Input: root = [4,2,7,1,3], val = 5
// Output: []


// Approach
// This algorithm follows the Binary Search Tree (BST) properties:
// If val == root.val, return the node.
// If val < root.val, search in the left subtree.
// If val > root.val, search in the right subtree.
// We implement this using an iterative approach to optimize space. It keeps reassigning root instead of using recursion.

// TC - O(Log N) and SC - O(1)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const searchBst = function(root, val) {
    while(root !== null) {
        if(root.val === val) {
            return root;
        }
        else if(val < root.val) {
            root = root.left;
        }
        else {
            root = root.right;
        }
    }

    return null;
};

// Constructing the BST manually
const root = new Node(4, 
    new Node(2, new Node(1), new Node(3)), 
    new Node(7)
);

const val = 2;
console.log("Subtree is", searchBst(root, val));