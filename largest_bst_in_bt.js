// Size of the largest BST in a Binary Tree
// Maximum Sum BST in Binary Tree
// Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a Binary Search Tree (BST).
// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:
// Input: root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
// Output: 20
// Explanation: Maximum sum in a valid Binary search tree is obtained in root node with key equal to 3.
// Example 2:
// Input: root = [4,3,null,1,2]
// Output: 2
// Explanation: Maximum sum in a valid Binary search tree is obtained in a single root node with key equal to 2.
// Example 3:
// Input: root = [-4,-2,-5]
// Output: 0
// Explanation: All values are negatives. Return an empty BST.


// Approach
// Use postorder traversal (left → right → root) to get information about subtrees.
// For each node, determine:
// The size of the largest BST in its subtree.
// The sum of the largest BST in its subtree.
// The min and max values to ensure it's a valid BST.
// If a subtree is a valid BST, update the global max sum and max size.

// TC - O(N) and SC - O(H)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const maxSumBST = function(root) {
    let maxSum = 0;
    let maxSize = 0;

    function traverse(node) {
        // base case
        if(!node) {
            return { isBst: true, min: Infinity, max: -Infinity, sum: 0, size: 0 };
        }

        // we will do post order traversal ---> left -> right -> node
        let left = traverse(node.left);
        let right = traverse(node.right);

        if(left.isBst && right.isBst && node.val > left.max && node.val < right.min) {
            let sum = node.val + left.sum + right.sum;
            let size = 1 + left.size + right.size;

            maxSum = Math.max(maxSum, sum);
            maxSize = Math.max(maxSize, size);

            return {
                // checking if the bst is valid
                isBst: true,
                min: Math.min(left.min, node.val),
                max: Math.max(right.max, node.val),
                sum: sum,
                size: size
            };
        }

        return { isBst: false, sum: 0, size: 0 };
    };

    traverse(root);
    return { maxSum, maxSize };
};



// Example usage
const root = new TreeNode(1, 
    new TreeNode(4, new TreeNode(2), new TreeNode(4)), 
    new TreeNode(3, new TreeNode(2), new TreeNode(5, new TreeNode(4), new TreeNode(6)))
);
console.log(maxSumBST(root)); // { maxSum: 20, maxSize: 5 }