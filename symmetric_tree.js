// Symmetric Tree
// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false


// Approach
// A tree is said to be symmetric when its structure exhibits a mirroring pattern, meaning that the left and right subtrees of any node are identical or mirror images of each other. In other words, if you could draw a vertical line through the centre of the tree, the nodes on the left side should be symmetrically aligned with the nodes on the right side.

// For a binary tree to be symmetric:

// The root node and its two subtrees (left and right) must have the same value.
// The left subtree of the root should be a mirror image of the right subtree.
// This mirroring should be consistent throughout the entire tree, not just at the root level.
// When recursively checking the left and right subtrees for symmetry in a binary tree, the traversals are mirrored. Specifically, the algorithm compares the left child of the left subtree with the right child of the right subtree and the right child of the left subtree with the left child of the right subtree.

// Algorithm:

// Step 1:Check if the given tree is empty ie. root is null. If the tree is empty, it is considered symmetric by default and we return true.

// Step 2: If the tree is not empty, we call a utility function `isSymmetricUtil`, passing the left and right subtrees of the root. This utility function handles the recursive checks for symmetry.

// Base Case: The base case for recursion is when both the left and right subtrees are empty, indicating a symmetric structure and we return true. If only one of the subtrees is empty (while the other is not), we return false as this violates the conditions of symmetry.

// Check for Symmetry:

// Compare the values of the current nodes from the left and right subtrees. For the binary tree to be symmetric, the corresponding nodes received should have equal values.
// Recursively check the symmetry of these subtrees. We check if the left subtree of the left node is symmetric with the right subtree of the right node.
// Similarly, also check the symmetry of the right subtree of the left node with the left subtree of the right node.
// Hence, we compare the node values and recursively explore the left and right subtrees in a mirrored fashion.

// Step 3:The final result of the isSymmetric function is based on the outcome of the utility function `isSymmetricUtil` recursive function for the roots left and right subtree.

// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const isSymmetricUtil = function(root1, root2) {
    // check if either subtree is null
    if(root1 === null || root2 === null) {
        // if one subtree is null, the other must also be null for symmetry
        return root1 === root2;
    }

    // check if the val in the current nodes are equal and recursively check for symmetry in subtrees
    return (
        root1.val === root2.val &&
        isSymmetricUtil(root1.left, root2.right) &&
        isSymmetricUtil(root1.right, root2.left)
    );
};

const isSymmetric = function(root) {
    // base case
    if(!root) return null;

    // call the utility function to check symmetry of sub trees
    return isSymmetricUtil(root.left, root.right);
};

// Function to print the Inorder Traversal of the Binary Tree
function printInorder(root) {
    if (!root) {
        return;
    }
    printInorder(root.left);
    console.log(root.data + ' ');
    printInorder(root.right);
}

// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.right.right = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);

console.log("Is symmetric?", isSymmetric(root));