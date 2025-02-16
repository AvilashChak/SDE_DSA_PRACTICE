// Check if two trees are identical or not
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:

// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Example 2:

// Input: p = [1,2], q = [1,null,2]
// Output: false
// Example 3:

// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// Approach
// To determine if two binary trees are identical, we can follow a recursive approach. We traverse both trees in the preorder manner, meaning that the current node's value is checked before recursively traversing its left and right subtrees.

// The idea is to traverse both trees simultaneously, comparing the values of corresponding nodes at each step. We need to ensure that the left subtree of each node in the first tree is identical to the left subtree of the corresponding node in the second tree, and similarly for the right subtrees.

// Base Case: The base case for recursion is reached when both nodes are null, indicating the end of the subtree. In this case return true. If only one of the nodes in null while the other is not or vice versa, return false since they cannot be identical.

// Recursive Function:

// Check if the values of the current nodes in both tree are equal. If not, return false otherwise check the conditions below.
// Check if the left subtree of both the trees is identical or not by calling the recursive function on the left child.
// Check if the right subtree of both the trees is identical or not by calling the recursive function on the right child.
// If all recursive calls return true, indicating that the values and structures of the subtrees are identical, the function returns true, confirming that the entire trees are identical.

// Algorithm:

// Step 1: Start at the root node of both trees (node1 and node2).

// Step 2: Check if the values of the current nodes in both trees are equal. If not return false.

// Step 3: Recursively check the left then right subtree of the current node in both trees is identical.

// Step 4: If all the recursive checks return true, then return the trees are identical, otherwise they are not.

// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const sameTree = function(p, q) {
    // if both trees are null, they are identical
    if(p === null && q === null) return true;

    // if only one is null, they are not identical
    if(p === null || q === null) return false;

    return p.val === q.val && sameTree(p.left, q.left) && sameTree(p.right, q.right);
};


// Node1
let root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
root1.left.left = new Node(4);

// Node2
let root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
root2.left.left = new Node(4);


console.log("Same tree:", sameTree(root1, root2));