// Root to Node Path in Binary Tree
// Given a Binary Tree, you need to find all the possible paths from the root node to all the leaf nodes of the binary tree.

// Note: The paths should be returned such that paths from the left subtree of any node are listed first, followed by paths from the right subtree.

// Examples:

// Input: root[] = [1, 2, 3, 4, 5]
// ex-3
// Output: [[1, 2, 4], [1, 2, 5], [1, 3]] 
// Explanation: All possible paths: 1->2->4, 1->2->5 and 1->3
// Input: root[] = [1, 2, 3]
//        1
//     /     \
//    2       3
// Output: [[1, 2], [1, 3]] 
// Explanation: All possible paths: 1->2 and 1->3
// Input: root[] = [10, 20, 30, 40, 60]
//          10
//        /    \
//       20    30
//      /  \
//     40   60
// Output: [[10, 20, 40], [10, 20, 60], [10, 30]]
// Explanation: All possible paths: 10->20 ->40, 10->20->60 and 10->30

// Approach

// To find the path from the root to the given node in the tree we use a Depth-First Traversal. We initialise a vector to store the current path and recursively travel to each node in the tree. At each step, we check if the current node is null, if it is we return false and if the data value of the current node is equal to the given node, we return true signifying the end of the traversal search.


// During the recursive calls, we append the current node’s data value to the vector and explore the left and right children. We backtrack if the target value is not found as the children return ‘false’ and remove the last node from the path vector. In the end, we return the vector containing the path from the root to the given node.

// Algorithm:

// Step 1:Initialise an empty vector to store the current path.

// Step 2: Initialise a recursive function to explore the Binary Tree using Depth First Search. Starting from the root node, we traverse the tree using the inorder sequence.


// Base Case: If the current node is null then we return false, indicating the end of the path. If the current node’s data value is equal to the given node then we return the true, signifying the completion of the path.

// Step 3: Recursive Calls:

// During the recursive exploration, the recursive function appends the current node's data value to the vector arr.
// It checks if the current node's value matches the target value x. If it does, the function returns true, indicating the completion of the path to the target node.
// We then call the function on the left and right children of the current node.

// Step 4: Backtracking:

// If the target value x is not found in the current path, the function backtracks by removing the last node from the path vector arr.
// This means the current node is not part of the valid path from the root to the given node ensuring that the algorithm explores all possible paths and doesn't miss any valid routes to the target node.
// Step 5: In the end, we return the vector containing the path from the root to the given node.


// Solution
// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const getPath = function(root, target) {
    let path = [];

    function findPath(node) {
        // base case
        if(node === null) return false;

        path.push(node.val); // add current node to the path

        if(node.val === target) return true;

        if(findPath(node.left) || findPath(node.right)) return true; // recursively search in left and right subtree

        // backtrack
        path.pop();
        return false;
    };

    return findPath(root) ? path : [];
};


// Example Usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(getPath(root, 5)); // Output: [1, 2, 5]
console.log(getPath(root, 7)); // Output: [1, 3, 7]
console.log(getPath(root, 10)); // Output: []