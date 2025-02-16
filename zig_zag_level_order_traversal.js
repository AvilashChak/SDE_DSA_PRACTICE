// Zig Zag Traversal of Binary Tree
// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []


// Approach
// Zigzag traversal is a modification of the traditional level order traversal in a binary tree. Level Order Traversal explores does at each level from left or right but zigzag traversal adds a twist by alternating the direction of exploration. At odd levels, we proceed from left to right but for even levels the order is reversed, from right to left. This is achieved by introducing a `leftToRight` flag which controls the order in which nodes are processed at each level. When `leftToRight` is true, nodes are inserted into the level vector from left to right and when its false, nodes are inserted right to left.

// Algorithm:

// Step 1: Initialise an empty queue data structure to store the nodes during traversal. Create a 2D array or a vector of a vector to store the level order traversal. If the tree is empty, return this empty 2D vector.

// Step 2: Create a `leftToRight` flag to keep track of the direction of traversal. When `leftToRight` is true, nodes are inserted into the level vector from left to right and when its false, nodes are inserted right to left.

// Step 3: Enqueue the root node ie. Add the root node of the binary tree to the queue.

// Step 4: Iterate until the queue is empty:

// Get the current size of the queue. This size indicates the number of nodes at the current level.
// Create a vector ‘level’ to store the nodes at the current level.
// Step 5: Iterate through ‘size’ number of nodes at the current level:

// Pop the front node from the queue.
// Store the node’s value in the level vector. Determine the index to insert the node’s value based on the traversal direction ‘leftToRight’.
// If ‘leftToRight’ is true, the index is set to ‘i’ which means the node’s value will be inserted form left to right. If ‘rightToLeft’ is false, the index is set to size - 1 - i, meaning the node’s value will be inserted from right to left.
// Step 6: Enqueue the left and right child nodes of the current node (if they exist) into the queue.

// Step 7: After processing all the nodes at the current level, add the ‘level’ vector to the ‘ans’ 2D vector, representing the current level. Reverse the direction of traversal for the next level by updating the ‘leftToRight’ flag to its opposite value. This toggling ensures that the nodes at the next level will be processed in the opposite direction, alternating between left-to-right and right-to-left.

// Step 8: Once the traversal loop completes ie. all levels have been processed, return the ‘ans’ 2D vector containing the level-order traversal.


// Solution
// TC - O(N) and SC - O(N)

// Node structure for the binary tree
class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const zigzagLevelOrder = function(root) {
    let result = [];
    // base case
    if(!root) return result;

    // we will take a queue to store the nodes and perform level order traversal
    let queue = [];
    queue.push(root);

    // flag to determine direction traversal (left to right or right to left)
    let leftToRight = true;

    while(queue.length > 0) {
        let size = queue.length;
        // arr to store the values of nodes at the current level
        let level = [];

        for(let i = 0; i < size; i++) {
            // get the front node from the queue
            let node = queue.shift();

            // determine the index to insert the node's value based on the traversal direction
            let index = leftToRight ? i : (size - 1 - i);

            // insert nodes value at the determine index
            level[index] = node.val;

            // enqueue the left and right child if they exists
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        // switch the traversal for the next level
        leftToRight = !leftToRight;

        // Add the current level's values to the result array
        result.push(level);
    }

    // Return the final result of zigzag level order traversal
    return result;
    
};


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Zig Zag Traversal:", zigzagLevelOrder(root));