// Binary Tree Maximum Path Sum
// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

// The path sum of a path is the sum of the node's values in the path.

// Given the root of a binary tree, return the maximum path sum of any non-empty path.

// Example 1:

// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
// Example 2:

// Input: root = [-10,9,20,null,null,15,7]
// Output: 42
// Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.


// Approach
// To find the diameter of a binary tree, we can think of every node as a potential `Curving Point` of the path along which we find the sum. The maximum sum of a path through a turning point (like a curve) can be found by adding the maximum sum achievable in the left subtree, the right subtree, and the value of the turning point.

// We can recursively traverse the tree, considering each node as a potential turning point and storing the maximum value (our final answer) in a reference variable. The recursive function should be defined in such a way that we consider both the possibilities:

// When the current node is the turning point and in this scenario we calculate the maximum path sum taking into sum contributions from both the left and right subtrees along with the value of the current node.
// When the current node is not the turning point, we consider only the left or the right subtree. The maximum of the two is returned as the maximum path sum of that subtree.
// Base Case: When the current node is null which indicates the end of a path or a lead node, we return the maximum path sum as 0.

// Recursive Function:

// Calculate the maximum path sum for the left and right subtrees by making recursive calls to the left and right child of the current node.
// Calculate the maximum path sum when the current node serves as the turning point: Maximum Path Sum when Current Node is Turning Point = Maximum Path Sum of Left Subtree + Maximum Path Sum of Right Subtree + Current Value of Node
// Update the overall maximum path sum (maxi) by considering the sum of the current node and the left and right subtree sums.
// Return the maximum sum considering only one branch (either left or right) along with the value of the current node as the maximum sum up until this node.

// Algorithm:

// Step 1: Initialise the variable maxi to the minimum possible integer value. This ensures that the algorithm correctly updates maxi with the first encountered valid path sum (even if its negative) and subsequently updates it whenever a larger path sum is found.

// Step 2: Call the recursive function `findMaxPathSum` with the root of the binary tree and the reference parameter maxi.

// Step 3: Base case: If the current node is null, return 0.

// Step 4: Calculate the maximum path sum for the left and right subtree using recursion.

// Step 5: Update the overall maximum path sum (maxi) by considering the sum of the left and right subtree paths plus the current node's value. This represents the sum of the path that includes the current node. This sum is used to update the overall maximum path sum (maxi) when the current node serves as the turning point in the path.

// Step 6: Return the maximum sum considering only one branch (either left or right) along with the current node. This represents the maximum sum considering only one branch (either left or right) along with the current node. This value is returned by the recursive function to contribute to the calculation of the maximum path sum in the binary tree. Case Considering Negative Leaf Nodes:

// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findMaxPathSum = function(root, maxi) {
    // base case
    if(root === null) return 0;

    // calculate max path sum from left and right subtrees
    let leftSum = Math.max(0, findMaxPathSum(root.left, maxi));
    let rightSum = Math.max(0, findMaxPathSum(root.right, maxi));

    // update the overall max sum including the current node
    maxi[0] = Math.max(maxi[0], leftSum + rightSum + root.val);

    // return the max sum considering one branch left or right along with the current node
    return Math.max(leftSum, rightSum) + root.val;
};

const maxPathSum = function(root) {
    // initialize maxi to min possible integer value
    let maxi = [Number.MIN_SAFE_INTEGER];

    // call the recursive function to find the max sum
    findMaxPathSum(root, maxi);

    // return final maximum path sum
    return maxi[0];
};


// Creating a sample binary tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);
root.left.right.right.right = new Node(7);

console.log("Max Path Sum in a Binary Tree:", maxPathSum(root));