// Kth Smallest and Largest Element in a BST
// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

// Example 1:
// Input: root = [3,1,4,null,2], k = 1
// Output: 1
// Example 2:
// Input: root = [5,3,6,2,4,null,null,1], k = 3
// Output: 3

// Approach
// A more efficient approach for finding the K-th smallest and K-th largest elements in a Binary Search Tree (BST) without using extra space would involve an optimised traversal technique directly targeting the K-th elements without storing all elements in an array. We use two traversal methods (inorder and reverse inorder) to find the Kth smallest and largest elements in the given BST. We maintain a counter variable to track the number of visited nodes, stopping when the Kth element is found in each traversal.

// Algorithm for Kth Smallest Element:

// Step 1: Perform inorder traversal from the root node. At every visited node, increment a counter variable to keep track of visited nodes. Inorder Traversal: Traverse the left subtree, then current node then right subtree.

// Step 2: When the counter reaches K, store the value of the current node as the Kth smallest.

// Step 3: Return this value as the Kth smallest.


// Algorithm for Kth Largest Element:

// Step 1: Perform reverse inorder traversal from the root node. At every visited node, increment a counter variable to keep track of visited nodes. Traverse the right subtree, then current node then left subtree.

// Step 2: When the counter reaches K, store the value of the current node as the Kth smallest.


// Step 3: Return this value as the Kth largest.

// Solution
// TC - O(N) and SC - O(1)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper function to perform reverse inorder traversal to find the kth largest
const reverseInorder = function(node, counter, k, kLargest) {
    // base case
    if(!node || counter.count >= k) return;

    // Traverse the right subtree
    reverseInorder(node.right, counter, k, kLargest);

    // Increment counter after visiting the right subtree
    counter.count++;

    // check if the current node is the kth element
    if(counter.count === k) {
        kLargest[0] = node.val;
        return;
    }

    // Traverse the left subtree if kth largest is not found yet
    reverseInorder(node.left, counter, k, kLargest);
};

// Helper function to perform the inorder traversal for the kth smallest
const inorder = function(node, counter, k, kSmallest) {
    // base case
    if(!node || counter.count >= k) return;

    // Traverse the left subtree
    inorder(node.left, counter, k, kSmallest);

    // Increment the counter after visiting the left subtree
    counter.count++;

    // Check if the current node is the kth element
    if(counter.count === k) {
        kSmallest[0] = node.val;
        return;
    }

    // Traverse the right subtree if kth smallest is not found
    inorder(node.right, counter, k, kSmallest);
};

const findKth = function(root, k) {
    const kSmallest = [Number.MIN_SAFE_INTEGER];
    const kLargest = [Number.MIN_SAFE_INTEGER];

    // Counter to track visited nodes
    let counter = {count: 0};

    // Find kth smallest element perform inorder traversal
    inorder(root, counter, k, kSmallest);

    // Reset counter for kth largest element
    counter.count = 0;

    // Find kth largest element perform reverse inorder traversal
    reverseInorder(root, counter, k, kLargest);

    return [kSmallest[0], kLargest[0]];
};

// Function to perform an in-order traversal
// of a binary tree and print its nodes
function printInOrder(root) {
    // Check if the current node
    // is null (base case for recursion)
    if (root === null) {
        // If null, return and
        // terminate the function
        return;
    }

    // Recursively call printInOrder
    // for the left subtree
    printInOrder(root.left);

    // Print the value of the current node
    console.log(root.val + " ");

    // Recursively call printInOrder
    // for the right subtree
    printInOrder(root.right);
}


// Creating a BST
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(13);
root.left.left = new TreeNode(3);
root.left.left.left = new TreeNode(2);
root.left.left.right = new TreeNode(4);
root.left.right = new TreeNode(6);
root.left.right.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

console.log("Binary Search Tree:");
printInOrder(root);
console.log();

const k = 3;
console.log("k: " + k);
const kthElements = findKth(root, k);

console.log("Kth smallest element: " + kthElements[0]);
console.log("Kth largest element: " + kthElements[1]);