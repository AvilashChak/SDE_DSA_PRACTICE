// Lowest Common Ancestor of a Binary Tree
// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
// Example 3:

// Input: root = [1,2], p = 1, q = 2
// Output: 1


// Intuition:
// The very first thing we can observe from the question is that we can find the LCA of 2 given nodes from 

// i) Left subtree or in

// ii)Right subtree, if not in both the subtrees then root will be the  LCA.

// Approach:
// If root is null or if root is x or if root is y then return root
// Made a recursion call for both
// i) Left subtree 

// ii)Right subtree

// Because we would find LCA in the left or right subtree only.

// If the left subtree recursive call gives a null value that means we haven’t found LCA in the left subtree, which means we found LCA on the right subtree. So we will return right.
// If the right subtree recursive call gives null value, that means we haven’t found LCA on the right subtree, which means we found LCA on the left subtree. So we will return left .
// If both left & right calls give values (not null)  that means the root is the LCA.


// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const lowestCommonAncestor = function(root, p, q) {
    // base case
    if(root === null || root === p || root === q) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // result
    if(left === null) {
        return right;
    }
    else if(right === null) {
        return left;
    }
    else {
        // both left and right are not null we found our result
        return root;
    }
};

// Construct the given binary tree
const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.left = new Node(0);
root.right.right = new Node(8);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

const p = root.left, q = root.right;

console.log("Lowest Common Ancestors:", lowestCommonAncestor(root, p, q));