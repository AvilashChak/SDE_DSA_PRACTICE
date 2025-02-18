// Construct Binary Search Tree from Preorder Traversal
// Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
// It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
// A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
// A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

// Example 1:
// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]
// Example 2:
// Input: preorder = [1,3]
// Output: [1,null,3]


// Approach
// Preorder Traversal Insight
// The first element in preorder is always the root.
// The next elements belong to the left subtree as long as they are smaller than the current root.
// Once a larger value is found, it belongs to the right subtree.
// Recursive Tree Construction

// We maintain an index i that keeps track of the next node to be inserted.
// We use a bound (bound parameter) to ensure correct placement in the BST.
// Recursively insert elements into left if they are smaller than the current node value.
// Recursively insert elements into right when we find a value greater than the current node.

// TC - O(N) and SC - O(log N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const bstFromPreorder = function(preorder) {
    let i = [0]; // Using an array to keep track of index
    return build(preorder, Number.MAX_SAFE_INTEGER, i);
};

const build = function(preorder, bound, i) {
    if(i[0] === preorder.length || preorder[i[0]] > bound) return null;

    let root = new Node(preorder[i[0]]);
    i[0]++; // Increment the index after using the value

    root.left = build(preorder, root.val, i);
    root.right = build(preorder, bound, i);

    return root;
};


let preorder = [8, 5, 1, 7, 10, 12];
let root = bstFromPreorder(preorder);
console.log(root);