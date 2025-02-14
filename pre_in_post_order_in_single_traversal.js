// Preorder inorder postorder in a single traversal
// Problem statement
// You have been given a Binary Tree of 'N'

// nodes, where the nodes have integer values.

// Your task is to return the ln-Order, Pre-Order, and Post-Order traversals of the given binary tree.

// For example :
// For the given binary tree:

// The Inorder traversal will be [5, 3, 2, 1, 7, 4, 6].
// The Preorder traversal will be [1, 3, 5, 2, 4, 7, 6].
// The Postorder traversal will be [5, 2, 3, 7, 6, 4, 1].
// Detailed explanation ( Input/output format, Notes, Images )
// Sample Input 1 :
// 1 2 3 -1 -1 -1  6 -1 -1
// Sample Output 1 :
// 2 1 3 6 
// 1 2 3 6 
// 2 6 3 1
// Explanation of Sample Output 1 :
//  The given binary tree is shown below:

// Inorder traversal of given tree = [2, 1, 3, 6]
// Preorder traversal of given tree = [1, 2, 3, 6]
// Postorder traversal of given tree = [2, 6, 3, 1]
// Sample Input 2 :
// 1 2 4 5 3 -1 -1 -1 -1 -1 -1
// Sample Output 2 :
// 5 2 3 1 4 
// 1 2 5 3 4 
// 5 3 2 4 1
// Explanation of Sample Output 2 :
// The given binary tree is shown below:

// Inorder traversal of given tree = [5, 2, 3, 1, 4]
// Preorder traversal of given tree = [1, 2, 5, 3, 4]
// Postorder traversal of given tree = [5, 3, 2, 4, 1]


// Approach
// Algorithm / Intuition
// This approach traverses the binary tree in a single pass while computing the preorder, inorder and postorder traversals at the same time. A stack is used for state management. The stack keeps track of the traversal state for each node. It stores nodes and their state information allowing the algorithm to resume traversal from intermediate points.For each node, it identifies its state: if it's in the pre-order state, it records the node's value and pushes the left child onto the stack. Moving to the in-order state, it records the node's value and pushes the right child onto the stack. Finally, in the post-order state, it stores the node's value and pops the node.As the algorithm executes over each node, it pushes each value in separate arrays for preorder, inorder and postorder traversals depending upon the current order and sequence. Hence, we are able to traverse the tree just once and get all three traversals from it.

// Algorithm:

// Step 1: Initialise a stack that holds a tree node and an integer value representing its state corresponding to pre order, inorder and postorder. Initialise empty arrays to store the three traversals as well.Check if the tree is empty. If so, return empty traversals.


// Step 2: Push the root node onto the stack along with its state ‘1’ (preorder) to start the traversal.


// Step 3:

// While the stack isn’t empty, pop the top node of the stack and for each node:

// If the state is ‘1’ ie. preorder: store the node’s data in the preorder array and move its state to 2 (inorder) for this node. Push this updated state back onto the stack and push its left child as well.
// If the state is ‘2’ ie. inorder: store the node’s data is the inorder array and update its state to 3 (postorder) for this node. Push the updated state back onto the stack and push the right child onto the stack as well.
// If the state is ‘3’ ie. postorder: store the node’s data in the postorder array and pop it.

// Step 4: Return the preorder, inorder and postorder array.

// TC - O(3N) and SC - O(4N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const preInPostTraversal = function(root) {
    // arrays to store traversals
    let preOrder = [];
    let inOrder = [];
    let postOrder = [];

    // if tree is empty
    if(root === null) return [];

    // stack to store nodes and their traversal state
    let stack = [];

    // start with the root node and state 1 (preorder)
    stack.push([root, 1]);

    while(stack.length > 0) {
        let [node, state] = stack.pop();

        // this is the part of pre
        if(state === 1) {
            // store the node data in preorder traversal
            preOrder.push(node.val);

            // move to state 2 inorder for this node
            state = 2;

            // push the updated state back onto the stack
            stack.push([node, state]);

            // push the left child onto the stack for processing
            if(node.left !== null) {
                stack.push([node.left, 1]);
            }

        }
        // this is a part of in
        else if(state === 2) {
            // store the node data in inorder traversal
            inOrder.push(node.val);

            // move the state 3 postorder for this node
            state = 3;

            // push the updated state back onto the stack
            stack.push([node, state]);

            // push the right child onto the stack for processing
            if(node.right !== null) {
                stack.push([node.right, 1]);
            }
        }
        // this is for post
        else {
            // store the node's data for post order traversal
            postOrder.push(node.val);
        }
    }

    return [preOrder, inOrder, postOrder];
};



// Creating the tree
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

// Running the traversal function
const [preOrder, inOrder, postOrder] = preInPostTraversal(root);

console.log("Preorder Traversal:", preOrder);  // Expected: [1, 2, 4, 5, 3, 6]
console.log("Inorder Traversal:", inOrder);   // Expected: [4, 2, 5, 1, 3, 6]
console.log("Postorder Traversal:", postOrder); // Expected: [4, 5, 2, 6, 3, 1]