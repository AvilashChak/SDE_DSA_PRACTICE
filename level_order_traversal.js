// Level order Traversal / Level order traversal in spiral form
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:
// Input: root = [1]
// Output: [[1]]
// Example 3:
// Input: root = []
// Output: []


// Apporach
// To perform a level-order traversal on a binary tree and store the nodes’ values in a 2D vector representing each level, start by initialising an empty queue to hold the level by level nodes.Enqueue the root node into the queue and traverse until the queue is empty. For each level, track the number of nodes in that level, creating a temporary vector to deque and store them. At each node, store its value in the temporary vector and enqueue its left and right children if they exist.Once all the nodes at a level are processed add this 1D temporary vector to the final 2D vector, representing that level. This process repeats until all levels are traversed. Finally, return this 2D vector containing the level order traversal of the binary tree.

// Step 1: nitialise an empty queue data structure to store the nodes during traversal. Create a 2D array or a vector of a vector to store the level order traversal. If the tree is empty, return this empty 2D vector.
// Step 2: Enqueue the root node ie. Add the root node of the binary tree to the queue.
// Step 3: Iterate until the queue is empty:
// Get the current size of the queue. This size indicates the number of nodes at the current level.
// Create a vector ‘level’ to store the nodes at the current level.
// Iterate through ‘size’ number of nodes at the current level:
// Pop the front node from the queue.
// Store the node’s value in the level vector.
// Enqueue the left and right child nodes of the current node (if they exist) into the queue.
// After processing all the nodes at the current level, add the ‘level’ vector to the ‘ans’ 2D vector, representing the current level.
// Step 4: Once the traversal loop completes ie. all levels have been processed, return the ‘ans’ 2D vector containing the level-order traversal.


// Solution
// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const levelOrder = function(root) {
    let ans = [];

    // base case
    if(!root) return ans;

    // we will take a queue to store the nodes
    let queue = [root];

    while(queue.length > 0) {
        let size = queue.length;
        // where we will store the levels
        let level = [];
        
        for(let i = 0; i < size; i++) { 
            let node = queue.shift();

            level.push(node.val);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        ans.push(level);
    }

    return ans;
};


// Creating a sample binary tree
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Level Order Traversal:", levelOrder(root));