// Max width of a Binary Tree
// Given the root of a binary tree, return the maximum width of the given tree.
// The maximum width of a tree is the maximum width among all levels.
// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
// It is guaranteed that the answer will in the range of a 32-bit signed integer.

// Example 1:
// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
// Example 2:
// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
// Example 3:
// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).


// Approach
// To determine the maximum width of a tree, an effective strategy would be to assign and identify indexes for the leftmost and rightmost nodes at each level. Using these indexes, we can calculate the width for each level by subtracting the index of the leftmost node from that of the rightmost node.


// Start by assigning an index to the root node as 0. For each level, the left child gets an index equal to 2 * parent index, and the right child gets an index equal to 2 * parent index + 1. Using a level order traversal, we use the leftmost and rightmost nodes at each level and using their indices, get the width at that level. Keep track of the maximum width encountered during the traversal. Whenever a wider level is found, update the maximum width.


// Algorithm:

// Step 1:Initialize a variable `ans` to store the maximum width. If the root is null, return 0 as the width of an empty tree is zero.

// Step 2: Create a queue to perform level-order traversal and each element of this queue would be a pair containing a node and its vertical index. Push the root node and its position (initially 0) into the queue.

// Step 3: While the queue is not empty, perform the following steps:

// Get the number of nodes at the current level (size).
// Get the position of the front node in the current level which is the leftmost minimum index at that level.
// Initialize variables first and last to store the first and last positions of nodes in the current level.
// Step 4: Backtracking: For each node in the current level:

// Calculate the current position relative to the minimum position in the level.
// Get the current node (node) from the front of the queue.
// If this is the first node in the level, update the first variable.
// If this is the last node in the level, update the last variable.
// Enqueue the left child of the current node with index: 2 x current index - 1.
// Enqueue the right child of the current node with index: 2 x current index + 1.

// Step 5: Update the maximum width (ans) by calculating the difference between the first and last positions, and adding 1.

// Step 6: Repeat the level-order traversal until all levels are processed. The final value of `ans` represents the maximum width of the binary tree, return it.


// Solution
// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const maxWidth = function(root) {
    if(!root) return 0; // if the root is null return 0

    let ans = 0;

    let queue = [[root, 0]]; // queue with nodes and its position

    while(queue.length > 0) {
        let size = queue.length;
        let minIndex = queue[0][1]; // get the left most min index
        let first = 0, last = 0;

        for(let i = 0; i < size; i++) {
            let [node, index] = queue.shift();
            let curIndex = index - minIndex; // Normalize index to overflow

            if(i === 0) {
                first = curIndex;
            }

            if(i === size - 1) {
                last = curIndex;
            }

            // enque left and right child
            if(node.left) {
                queue.push([node.left, curIndex * 2]);
            }

            if(node.right) {
                queue.push([node.right, curIndex * 2 + 1]);
            }
        }

        ans = Math.max(ans, last - first + 1);
    }

    return ans;
};


// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);

console.log(maxWidth(root)); // Output: 4