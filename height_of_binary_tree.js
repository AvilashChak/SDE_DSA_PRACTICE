// Height / Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
// Example 2:
// Input: root = [1,null,2]
// Output: 2


// Approach
// To find the maximum depth of the binary tree using level order traversal, we employ a breadth-first approach. Initialise a queue and push the root node. Traverse through the levels and track the depth by counting the number of levels traversed. At each level pop the nodes and push their left and right children, incrementing the depth counter as we explore.This process continues until all levels are traversed at which point the depth variable holds the maximum depth of the tree.
// Algorithm
// Step 1: Initialise a queue for level order traversal and a variable `level` to track the depth.Check if the root is null, if so return the answer as 0 indicating an empty tree.
// Step 2: Insert the root of the Binary Tree into the queue and set the level as 0.
// Step 3: Begin a loop that continues until the queue becomes empty where at each level:
// Increment `level` by 1, indicating we are moving to the next level.
// Determine the number of nodes at the current level by storing the size of the queue.
// Iterate over the number of nodes equal to the size of the queue and at each node, Pop it from front of the queue and push its left and right children (if they exist).
// Step 4: After the queue loop gets over, return the `level` variable representing the maximum depth of the tree calculated during the level order traversal.

// Solution
// TC - O(N) and SC - O(N)


class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const height = function(root) {
    // base case
    if(!root) return 0;

    let queue = []; // we will take a queue and store the nodes
    let level = 0;

    queue.push(root);

    while(queue.length > 0) {
        let size = queue.length;

        for(let i = 0; i < size; i++) {
            let node = queue.shift(); // get the front node in the queue

            // enqueue the left and right child if they exists
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        // increment level to move to the next level
        level++;
    }
    
    return level;
};


// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

console.log("Height of a Binary Tree:", height(root));