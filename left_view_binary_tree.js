// Left View of Binary Tree
// You are given the root of a binary tree. Your task is to return the left view of the binary tree. The left view of a binary tree is the set of nodes visible when the tree is viewed from the left side.

// If the tree is empty, return an empty list.

// Examples :

// Input: root[] = [1, 2, 3, 4, 5, N, N]

// Output: [1, 2, 4]
// Explanation: From the left side of the tree, only the nodes 1, 2, and 4 are visible.
 
// Input: root[] = [1, 2, 3, N, N, 4, N, N, 5, N, N]

// Output: [1, 2, 4, 5]
// Explanation: From the left side of the tree, the nodes 1, 2, 4, and 5 are visible.

// Input: root[] = [N]
// Output: []

// Problem Statement: Given a Binary Tree, return its left views.

// The Left View of a Binary Tree is a list of nodes that can be seen when the tree is viewed from the left side.

// Approach
// Algorithm for Left View

// Step 1: Initialise an empty vector `res` to store the left view nodes.

// Step 2: Implement a recursive depth-first traversal of the binary tree.

// Base Case: Check if the current node is null, if true, return the function as we have reached the end of that particular vertical level.

// Recursive Function: The recursive function takes in arguments the current node of the Binary Tree, its current level and the result vector.

// We check if the size of the result vector is equal to the current level.
// If true, it means that we have not yet encountered any node at this level in the result vector. Add the value of the current node to the result vector.
// Recursively call the function for the current nodes left then right child with an increased level ie. level + 1.
// We call the left child first as we want to traverse the left most nodes. In cases where there is no left child, the recursion function backtracks and explores the right child.
// Step 3: The recursion continues until it reaches the base case. Return the result vector at the end.

// TC - O(N) and SC - O(H)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const leftView = function(root) {
    // store the res in an arr
    let arr = [];

    function traverse(node, level) {
        // base case
        if(node === null) {
            return;
        }

        if(arr[level] === undefined) {
            arr[level] = node.val;
        }

        traverse(node.left, level + 1);
        traverse(node.right, level + 1)
    }

    traverse(root, 0);
    return arr;
};

// Creating a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(10);
root.left.left.right = new TreeNode(5);
root.left.left.right.right = new TreeNode(6);
root.right = new TreeNode(3);
root.right.right = new TreeNode(10);
root.right.left = new TreeNode(9);

// Print the result for Left View
console.log("Left View Traversal:", leftView(root));   