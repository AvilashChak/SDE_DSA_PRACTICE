// Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:
// Input: root = [1,2]
// Output: 1


// Approach
// BF - TC - O(N) and SC - O(N)
// The O(N2) time complexity of the previous approach can be optimised by eliminating the steps of repeatedly calculating subtree heights. The heights of the left and right subtrees are computed multiple times for each node, which leads to redundant calculations.Instead, we can compute these heights in a bottom-up manner. The Postorder method allows us to validate balance conditions efficiently during the traversal.
// The postorder traversal operates in a bottom-up manner, calculating subtree information before moving to the parent node. We efficiently compute the heights of both the subtrees and at the same time calculate the diameter and update the maximum diameter encountered.

// Algorithm:
// Step 1: Initialise a variable `diameter` to store the diameter of the tree. Create a function height that takes a node and a reference to the diameter variable as input.
// Step 2: Base Case: If the node is null, return 0 indicating the height of an empty tree.
// Step 3: Recursive Function:
// Recursively calculate the height of the left subtree then height of the right subtree.
// Set the current diameter as the sum of left subtree, right subtree + 1 for the current level.
// Update the diameter with the maximum of the current diameter and the global diameter.
// Step 4: After the traversal if complete, return the maximum diameter found during the traversal as the result.

// Solution

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bfCalculateHeight = function(node, diameter) {
    // base case
    if(!node) return 0;

    const lh = bfCalculateHeight(node.left, diameter);
    const rh = bfCalculateHeight(node.right, diameter);

    diameter.max = Math.max(diameter.max, lh + rh);

    return 1 + Math.max(lh, rh);
};

const bfFindDiameter = function(node) {
    let diameter = {max: 0}; // use an object to track max diameter
    bfCalculateHeight(node, diameter);
    return diameter.max;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

console.log("BF diameter of binary tree:", bfFindDiameter(root));