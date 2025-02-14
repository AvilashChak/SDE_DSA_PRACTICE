// Morris Preorder Traversal
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

// Problem Statement: Given a Binary Tree, implement Morris Preorder Traversal and return the array containing its preorder sequence.

// Morris Preorder Traversal is a tree traversal algorithm aiming to achieve a space complexity of O(1) without recursion or an external data structure. The algorithm should efficiently visit each node in the binary tree in preorder sequence, printing or processing the node values as it traverses, without using a stack or recursion.

// Approach - Binary tree preorder traversal ---> root > left > right
// Step 1:Initialise a current to traverse the tree. Set current to the root of the Binary Tree.

// Step 2: While the current is not null: If the current node has no left child, print the current node's value and move to the right child ie. set current to its right child.


// Step 3: If the current node has a left child, we find the in-order predecessor of the current node. This in-order predecessor is the rightmost node in the left subtree or the left subtree's rightmost node.

// If the right child of the in-order predecessor is null:

// Set the right child to the current node.
// Print the value of the current node as preorder traverses the tree in the inorder: Root, Left then Right.
// Move to the left child (i.e., set current to its left child).
// If the right child of the in-order predecessor is not null:

// Revert the changes made in the previous step by setting the right child as null.
// Move to the right child (i.e., set current to its right child).
// Repeat steps 2 and 3 until the end of the tree is reached.

// TC - O(N) and SC - O(1)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


const preOrderTraversal = function(root) {
    // an arr to store the result
    let arr = [];

    // cur pointer pointing to the root
    let cur = root;

    while(cur !== null) {
        // Step 1: if the left child is null
        if(cur.left === null) {
            arr.push(cur.val);
            // move the cur to the right child of the left sub tree
            cur = cur.right;
        }
        else {
            // Step 2: we will find the rightmost child 
            let prev = cur.left;
            while(prev.right && prev.right !== cur) {
                prev = prev.right;
            }

            // right child is null we will establish a temp link poiting to cur
            if(prev.right === null) {
                prev.right = cur;
                arr.push(cur.val);
                cur = cur.left;
            }
            else {
                // right is linked to cur we will remove the link and move to the right
                prev.right = null;
                cur = cur.right;
            }
        }
    }

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