// Lowest Common Ancestor of a Binary Search Tree
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2


// Approach
// Base Case: If the root is null, return null (i.e., BST is empty).
// Check the values of p and q relative to the root:
// If both p and q are greater than root.val, the LCA must be in the right subtree. So, recurse on root.right.
// If both p and q are less than root.val, the LCA must be in the left subtree. So, recurse on root.left.
// Otherwise, if p and q are on different sides of root or one of them is the root itself, then root is the LCA.

// TC - O(N) and SC - O(1) Space Complexity Improved to O(1) (iterative approach eliminates recursion stack).

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const lcaBst = function(root, p, q) {
    while(root !== null) {
        cur = root.val;

        if(cur < p.val && cur < q.val) {
            root = root.right; // Move to the right
        }
        else if(cur > p.val && cur > q.val) {
            root = root.left; // Move to the left
        }
        else {
            return root; // Found LCA
        }
    }

    return null;
};

const root = new Node(6, 
    new Node(2, 
        new Node(0), 
        new Node(4, new Node(3), new Node(5))
    ), 
    new Node(8, new Node(7), new Node(9))
);

console.log(lcaBst(root, new Node(2), new Node(8)).val); // Output: 6
