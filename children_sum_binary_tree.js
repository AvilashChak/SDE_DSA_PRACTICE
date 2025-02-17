// Children Sum in a Binary Tree
// Given a binary tree having n nodes. Check whether all of its nodes have a value equal to the sum of their child nodes. Return 1 if all the nodes in the tree satisfy the given properties, else it returns 0. For every node, the data value must be equal to the sum of the data values in the left and right children. Consider the data value 0 for a NULL child. Also, leaves are considered to follow the property.

// Examples:

// Input:
// Binary tree
//        35
//       /  \
//      20   15
//     / \   / \
//    15  5 10  5

// Output: 1
// Explanation: 
// Here, every node is sum of its left and right child.
// Input:
// Binary tree
//        1
//      /   \
//     4     3
//    /  
//   5    
// Output: 0
// Explanation: 
// Here, 1 is the root node and 4, 3 are its child nodes. 4 + 3 = 7 which is not equal to the value of root node. Hence, this tree does not satisfy the given condition.
// Input:
// Binary tree
//        10
//       /  \
//      4    6
//     / \  / \
//    1   3 2  4

// Output: 1
// Explanation: 
// Here, every node is a sum of its left and right child.


// Approach
// The constraint is that we cannot decrease the value of any node, only increase it. Also, the structure of the binary tree cannot be changed. If we follow a bottom-up approach and try to adjust parent values based on children, we may reach a situation where the sum of children exceeds the parent's value, requiring us to decrease the parent's value, which is not allowed.

// With just a bottom-up approach, we cannot guarantee that the Children Sum Property will be satisfied at each level. It might work for some cases but not for all. There's no clear strategy to ensure that the property holds true for the entire tree. A key insight here is that there's no restriction on how much we can increase the value of each node. Hence, we have the flexibility to adjust the values as needed to ensure that the Children Sum Property holds true at every node in the tree.

// This means that if the sum of the values of a node's children is less than the node's value, we can simply increase the values of the children (and potentially the grandchildren and so on) until the property is satisfied. Using recursive calls, we traverse the binary tree, addressing each node and its children iteratively. At each step, we calculate the sum of the children's values and compare it with the parent node's value.

// Algorithm:

// Step 1: Base CaseStart by checking if we've reached the end of a branch in the tree. If the current node is null, simply return.

// Step 2: Calculate Children Sum: For each non-null node, calculate the sum of the values of its left and right children, if they exist. Add up the values of the left and right children (if they are not null) and store this sum in a variable called child.

// Step 3: Comparison and Value Update: Compare the sum of the children (child) with the current node's value.

// If the sum of children is greater than or equal to the current node's value, we update the value of the parent to the sum of the children.

// If the sum of children is smaller than the current node's value, we need to make an adjustment to ensure the property holds. However, remember that we cannot decrease the value of any node. So, instead, we update one of the children's values to match the current node's value.

// Step 4: Recursive Calls: For each node in the current level: After handling the current node, we recursively call the function on the left and right children of the current node.

// Step 5: Update Current Node's Value: Once both children have been processed, we recalculate the total sum of the values of the left and right children and update the current node’s value to match the total sum of its children.


// Solution
// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const childrenSum = function(root) {
    // base case 
    if(!root) return;

    // calculate the sum of the left and right child, if they exists
    let child = 0;
    if(root.left) {
        child += root.left.val;
    } 
    if(root.right) {
        child += root.right.val;
    }

    // compare the sum of children with current node's value and update
    if(child >= root.val) {
        root.val = child;
    }
    else {
        // if the sum is smaller update the child with current node's value
        if(root.left) {
            root.left.val = root.val;
        }
        if(root.right) {
            root.right.val = val;
        }
    }

    // recursively call the function on the left and right child
    childrenSum(root.left);
    childrenSum(root.right);

    // while backtracking
    // Calculate the total sum of the values of the left and right children, if they exist.
    let total = 0;
    if(root.left) {
        total += root.left.val;
    }
    if(root.right) {
        total += root.right.val;
    }

    // If either left or right child exists, update the current node's value with the total sum.
    if(root.left || root.right) {
        root.val = total;
    }

};

// Function to print the inorder traversal of the tree
function inorderTraversal(root) {
    if (root === null) {
        return;
    }
    inorderTraversal(root.left);
    console.log(root.val + " ");
    inorderTraversal(root.right);
}


// Create the binary tree
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

// Print the inorder traversal of tree before modification
console.log("Binary Tree before modification: ");
inorderTraversal(root);
console.log("");

childrenSum(root);

// Print the inorder traversal after modification
console.log("Binary Tree after Children Sum Property: ");
inorderTraversal(root);
console.log("");