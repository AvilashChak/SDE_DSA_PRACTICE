// Check is a BT is BST or not
// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [2,1,3]
// Output: true
// Example 2:
// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


// Approach
// This approach uses a recursive depth-first traversal with min-max constraints:
// Start with the entire range 
// (− ∞ , + ∞)
// (−∞,+∞).
// At each node:
// The left subtree must have values less than the current node’s value.
// The right subtree must have values greater than the current node’s value.
// Recursively check left and right subtrees by updating the min/max constraints.
// If any condition fails, return false.
// If all nodes satisfy the BST property, return true.

// TC - O(N) and SC - O(1)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const isValidBst = function(root) {
    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

const isValid = function(root, minVal, maxVal) {
    // base case
    if(root === null) return true;
    if(root.val >= maxVal || root.val <= minVal) return false;

    return isValid(root.left, minVal, root.val) && isValid(root.right, root.val, maxVal);
};


// Construct the BST for testing
const root = new Node(2, new Node(1), new Node(3));
console.log("Is Valid BST:", isValidBst(root)); // Output: true

const invalidRoot = new Node(5, new Node(1), new Node(4, new Node(3), new Node(6)));
console.log("Is Valid BST:", isValidBst(invalidRoot)); // Output: false