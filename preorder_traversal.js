// Binary Tree Preorder Traversal
// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,2,3]

// Explanation:

// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [1,2,4,5,6,7,3,8,9]

// Explanation:

// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

// Approach - Binary tree preorder traversal ---> root > left > right
// TC - O(N) and SC - O(N)
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const preOrderTraversal = function(TreeNode) {
    let arr = [];

    // helper function
    function traverse(node) {
        // base case
        if(node === null) return;

        arr.push(node.val);
        traverse(node.left);
        traverse(node.right);
    }

    traverse(TreeNode);
    return arr;
};


// Manually creating the tree (corresponding to [1,2,3,4,5,null,8,null,null,6,7,9])
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(6);
root.left.right.right = new TreeNode(7);
root.right.right.left = new TreeNode(9);

console.log("Ans:", preOrderTraversal(root));