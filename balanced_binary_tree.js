// Check if the Binary tree is height-balanced or not
// Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:
// Input: root = []
// Output: true

// Approach
// BF - TC - O(N^2) and SC - O(N) 
// Base Case:If the root node is null, signifying an empty tree, return true as an empty tree is considered balanced.

// Recursive Algorithm: The `isBalanced` function is used to check if a Binary Tree is balanced, accepting a `root` node. Calculate the height of the left subtree and store it in a variable. Calculate the height of the right subtree and store it in a variable. Check if the absolute difference in heights of the left and right subtree is less than or equal to 1. If true then call the `isBalanced` recursive function for both the left and right child.

// If the condition is satisfied and both the left and right subtrees are balanced (recursive calls to isBalanced return true), return true, indicating a balanced tree.
// If the absolute difference of heights is greater than 1 or the recursive calls to left and right subtrees return false then return false.

// Algorithm:

// Step 1: Check if the root is null. If so, return true as an empty tree is balanced.

// Step 2: Recursively calculate the height of the left and right subtrees using the `getHeight` function and store them. If their absolute height difference is greater than 1, return false.

// Step 3: If their absolute height difference is less than or equal to 1, recursively call the isBalanced function on the left and right children as well. If the left and right children are also balanced, return true.

// Step 4: If any of the conditions in Step 2 and Step 3 fail, return false.

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bfIsBalanced = function(root) {
    // if the tree is empty
    if(root === null) return true;

    // calculate the height of left and right subtree
    let lh = bfGetHeight(root.left);
    let rh = bfGetHeight(root.right);

    // check if the absolute difference in heights of left and right subtree is <= 1
    if(Math.abs(lh - rh) <= 1 && bfIsBalanced(root.left) && bfIsBalanced(root.right)) {
        return true;
    }

    // if any conditions fails root is unbalanced
    return false;
};

const bfGetHeight = function(root) {
    if(root === null) return 0;

    // recursively calculate the height of left and right subtrees
    let lh = bfGetHeight(root.left);
    let rh = bfGetHeight(root.right);

    // return the max height of left and right subtrees plus 1 (to account for the current node) 
    return 1 + Math.max(lh, rh);
};


// Optimal Approach
// The O(N*N) time complexity of the previous approach can be optimised by simultaneously checking the balance condition while traversing the tree. Instead of repeatedly calculating the heights of left and right subtrees at each node, we can compute these heights in a bottom-up manner. The Postorder method allows us to validate balance conditions efficiently during the traversal. The postorder traversal operates in a bottom-up manner, calculating subtree information before moving to the parent node. We save on time complexity of calling the height of children over and over again as we have access to the height information of both subtrees when evaluating the balance condition at the parent.

// This also allows early detection of unbalanced nodes without unnecessary height calculate if a subtree is already found to be unbalanced, hence avoiding unnecessary function calls.

// Algorithm:

// Step 1: Traverse the Binary Tree is post-order manner using recursion. Visit left subtree, then right subtree, and finally the root node.

// Step 2:During the traversal, for each node, calculate the heights of the its left and right subrees. Use the obtained subtree heights to validate the balance conditions for the current node.

// Step 3: At each node, if the absolute difference between the heights of the left and right subtrees is greater than 1 or if any subtree is unbalanced (returns -1), return -1 immediately indicating an unbalanced tree.

// Step 4: If the tree is balanced, return the height of the current node by considering the maximum height of its left and right subtree plus 1 accounting for the current node.

// Step 5: Complete the traversal until all nodes are visited and return the final result - either the height of the entire tree if balanced or -1 if unbalanced.

// TC - O(N) and SC - O(N)
const isBalanced = function(root) {
    // base case
    if(!root) return true;

    // calculate the height of left and right subtrees
    let leftHeight = isBalanced(root.left);
    let rightHeight = isBalanced(root.right);

    // calculate the absolute difference of left and right subtrees is <= 1
    if(Math.abs(leftHeight - rightHeight) <= 1 && leftHeight && rightHeight) {
        // return the max left and right height of subtrees plus 1 to account for the current node
        return 1 + Math.max(leftHeight, rightHeight);
    }

    // if any condition fails 
    return false;
};



// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

console.log("BF balanced binary tree:", bfIsBalanced(root));
console.log("Balanced binary tree (optimal):", isBalanced(root));