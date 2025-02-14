// Morris Inorder Traversal
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]

// Output: [1,3,2]

// Explanation:

// Example 2:

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]

// Output: [4,2,6,5,7,1,3,9,8]

// Explanation:

// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

// Problem Statement: Given a Binary Tree, implement Morris Inorder Traversal and return the array containing its inorder sequence.
// Morris Inorder Traversal is a tree traversal algorithm aiming to achieve a space complexity of O(1) without recursion or an external data structure. The algorithm should efficiently visit each node in the binary tree in inorder sequence, printing or processing the node values as it traverses, without using a stack or recursion.

// Approach - Binary tree inorder traversal ---> left > root > right
// Step 1:Initialise a current to traverse the tree. Set current to the root of the Binary Tree.

// Step 2: While the current is not null: If the current node has no left child, print the current node's value and move to the right child ie. set the current to its right child.


// Step 3: If the current node has a left child, we find the in-order predecessor of the current node. This in-order predecessor is the rightmost node in the left subtree or the left subtree's rightmost node.

// If the right child of the in-order predecessor is null:

// Set the right child to the current node.
// Move to the left child (i.e., set current to its left child).
// If the right child of the in-order predecessor is not null:

// Revert the changes made in the previous step by setting the right child as null.
// Print the current node's value.
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

const inOrderTraversal = function(root) {
    // arr to store the result
    let arr = [];
    // Pointer to the current node starting from the root
    let cur = root;

    // Loop till the current node is not null
    while(cur !== null) {
        // Step 1: if the cur node left child is null
        if(cur.left === null) {
            // add the value of the cur node in the arr
            arr.push(cur.val);

            // move to the right child
            cur = cur.right;
        }
        else {
            // Step 2: if the left child is not null find the rightmost node in the left subtree
            let prev = cur.left;
            while(prev.right && prev.right !== cur) {
                prev = prev.right;
            }

            // if the right child is null establish a temp link and move to the left child
            if(prev.right === null) {
                prev.right = cur;
                cur = cur.left;
            }
            else {
                // if the right child is already linked remove the link and add the cur node to the arr and move to the right child
                prev.right = null;
                arr.push(cur.val);
                cur = cur.right;
            }
         }
    }

    return arr;
}


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

console.log("Ans:", inOrderTraversal(root));