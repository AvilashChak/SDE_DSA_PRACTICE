// Construct Binary Tree from Inorder and Postorder Traversal
// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
// Output: [3,9,20,null,null,15,7]
// Example 2:
// Input: inorder = [-1], postorder = [-1]
// Output: [-1]


// Approach
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const buildTree = function(inorder, postorder) {
    // base case
    if(!inorder || !postorder || inorder.length !== postorder.length) return null;

    // we will take a map
    let inMap = new Map();

    // populate the indices of elements from the inorder traversal
    inorder.forEach((value, index) => {
        inMap.set(value, index);
    });

    // we will call the recursive function to build the tree
    const root = buildTreeHelper(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1, inMap);

    return root;
};

const buildTreeHelper = function(inorder, inStart, inEnd, postorder, postStart, postEnd, inMap) {
    // base case if starts exceeds ends
    if(inStart > inEnd || postStart > postEnd) return null;

    // create a new node with the value at current index of postorder
    let root = new Node(postorder[postEnd]);

    // find the inRoot from the inMap
    let inRoot = inMap.get(root.val);

    // number of elements in the left
    let numsLeft = inRoot - inStart;

    // recursively build the left and right subtree
    root.left = buildTreeHelper(inorder, inStart, inRoot - 1, postorder, postStart, postStart + numsLeft - 1, inMap);

    root.right = buildTreeHelper(inorder, inRoot + 1, inEnd, postorder, postStart + numsLeft, postEnd - 1, inMap);

    return root;
};

const inOrderTraversal = function(root) {
    if(!root) return null;

    inOrderTraversal(root.left);
    console.log(root.val + " ");
    inOrderTraversal(root.right);
};

// Sample Input
const inorder = [40, 20, 50, 10, 60, 30];
const postorder = [40, 50, 20, 60, 30, 10];

// Build Tree and Print Output
const root = buildTree(inorder, postorder);
console.log("Inorder of Unique Binary Tree Created:", inOrderTraversal(root));