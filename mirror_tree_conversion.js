// Mirror Tree
// Given a binary tree, convert the binary tree to its Mirror tree.
// Mirror of a Binary Tree T is another Binary Tree M(T) with left and right children of all non-leaf nodes interchanged.     

// Examples:
// Input: root[] = [1, 2, 3, N, N, 4]
// Output: [1, 3, 2, N, 4]
// Explanation: 
// In the inverted tree, every non-leaf node has its left and right child interchanged.
// Input: root[] = [1, 2, 3, 4, 5]
// Output: [1, 3, 2, N, N, 5, 4]
// Explanation:
// In the inverted tree, every non-leaf node has its left and right child interchanged.


// Approach to Convert a Binary Tree to Its Mirror Tree
// 1. Understand the Problem Statement
// A mirror tree is obtained by swapping the left and right children of all non-leaf nodes in a binary tree.
// Given a binary tree, we need to modify it so that it becomes its mirror image.
// 2. Key Observations
// Every non-leaf node must have its left and right children swapped.
// A recursive approach is well-suited since each subtree should also be mirrored.
// Approach: Recursive Solution
// We use Depth-First Search (DFS) (Postorder Traversal) to traverse the tree and swap left and right children at each node.

// Steps
// Base Case

// If the node is null, return (no changes needed).
// Recursive Calls

// Recursively call mirror() on node.left and node.right.
// Swap Process

// Swap the left and right child of the current node.
// Return the Modified Tree

// The tree is modified in place, so no extra space is required.


// Solution
// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const mirrorTree = function(node) {
    // base case
    if(!node) return null;

    // Swap the left and right nodes
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // we will make recursive calls of left and right subtree
    mirrorTree(node.left);
    mirrorTree(node.right);

    return node;
};

// Utility function to print inorder traversal
function inorder(root) {
    if (root == null) return;
    inorder(root.left);
    console.log(root.val + " ");
    inorder(root.right);
}


// Creating tree nodes
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

root = mirrorTree(root);

inorder(root);