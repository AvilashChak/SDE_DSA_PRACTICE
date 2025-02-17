// Flatten Binary Tree to LinkedList
// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 
// Example 1:
// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]
// Example 2:
// Input: root = []
// Output: []
// Example 3:
// Input: root = [0]
// Output: [0]


// Approach
//  BF - TC - O(N) and SC - O(N)
// The intuition behind this approach is to perform a reverse pre-order traversal where, instead of simply visiting nodes, we flatten the tree into a linked list as we traverse it.

// We start at the root of the tree and recursively do the following for each node, we first ensure that the right subtree is flattened into a linked list. This means that all nodes in the right subtree are processed and attached to the linked list in the correct order.


// Next, we do the same for the left subtree. This ensures that all nodes in the left subtree are processed and attached to the linked list in the correct order. Once both subtrees are flattened, we attach the flattened left subtree as the right child of the current node. Since we're using the right pointer of the binary tree as the next pointer for the linked list, this effectively attaches the left subtree to the current node in the linked list. Finally, we attach the flattened right subtree to the rightmost node of the flattened left subtree. This ensures that the right subtree is properly attached to the end of the linked list.

// Algorithm
// Step 1:Initialise a global variable `prev` to keep track of the previously processed node. Initially set it to null.

// Step 2: Base Case: If the current node is null, return null.

// Step 3: Flatten the Right and Left Subtree: Recursively flatten the right and left subtree of the current node by calling the flatten function on the current node's right and left child.


// Step 4: Attach the Right Subtree to the Flattened Left Subtree: Set the right child of the current node to the value of `prev` since `prev` points to the rightmost node in the flattened left subtree. This effectively attaches the right subtree to the right of the rightmost node of the left subtree.

// Step 5:Attach the Left Subtree as Right Child: Set the right child of the current node to the left subtree.

// Set the left child of the current node to null since we are flattening the binary tree to a linked list and there should be no left child.

// Step 6:Update `prev` to the current node for the next iteration and recursion step.


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper function to flatten the binary tree
const flattenHelper = function(root, prev) {
    if(root === null) return prev;

    // Flatten the right subtree first
    prev = flattenHelper(root.right, prev);

    // then Flatten the left subtree
    prev = flattenHelper(root.left, prev);

    // Set the right child to previously processed node
    root.right = prev;

    // Set the left child to null
    root.left = null;

    // update prev to the current node
    return root;
};

const bfFlatten = function(root) {
    flattenHelper(root, null);
};



// Optimal Approach
//Morris Traversal is an algorithm that allows preorder/inorder tree traversal without using any extra space for stack or recursion. It utilises threaded binary trees to traverse the tree without requiring a stack for saving the path. Read more about Morris Preorder Traversal here

// Algorithm
// Step 1: Start with the current node as the root of the tree.

// Step 2: While the current node is not null we traverse the tree in a while loop:

// If the current node has a left child:
// Find the rightmost node in the left subtree.
// Connect the rightmost node of the left subtree to the current node’s right child.
// Update the current node’s right child to be its left child.
// Set the current node’s left child to null.
// Move to the current node’s right child.
// If the current node has no right child:
// Move to the current node’s left child (if it exists) or null.
// Step 3: Repeat until all nodes are processed.

// Solution
// TC - O(N) and SC - O(1)

const flatten = function(root) {
    // we will initialize a pointer cur to the root of the tree
    let cur = root;
    
    // iterate until cur becomes null
    while(cur) {
        // check if cur has left child
        if(cur.left) {
            // if yes find the rightmost child in the left subtree
            let prev = cur.left;
            if(prev.right) {
                prev = prev.right;
            }
            
            // connect the rightmost node in the left subtree to the current node's right child
            prev.right = cur.right;
            
            // move the cur right to the cur left
            cur.right = cur.left;
            
            // set the left child of cur node to null
            cur.left = null;
        }
        // move the next node on the right side
        cur = cur.right;
    }
    
};



const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.left.right.right = new TreeNode(6);
root.right.right = new TreeNode(7);
root.right.left = new TreeNode(8);

// Print the Binary Tree along the Right Pointers after Flattening
function printFlattenTree(root) {
    while (root) {
        console.log(root.val);
        root = root.right;
    }
}

//bfFlatten(root);
flatten(root);

// Print the flattened tree
console.log("Flattened Tree (optimal):");
printFlattenTree(root);