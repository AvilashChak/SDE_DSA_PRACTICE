// Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:
// Input: preorder = [-1], inorder = [-1]
// Output: [-1]


// Approach
// Before we dive into the algorithm, it's essential to grasp the significance of inorder and preorder traversals. Inorder traversal allows us to identify a node and its left and right subtrees, while preorder traversal ensures we always encounter the root node first. Leveraging these properties, we can uniquely construct a binary tree. The core of our approach lies in a recursive algorithm that creates one node at a time. We locate this root node in the inorder traversal, which splits the array into the left and right subtrees.

// The inorder array keeps getting divided into left and subtrees hence to avoid unnecessary array duplication, we use variables (inStart, inEnd) and (preStart, preEnd) on the inorder and preorder array respectively. These variables effectively define the boundaries of the current subtree within the original inorder and preorder traversals. Everytime we encounter the root of a subtree via preorder traversal, we locate its position in the inorder array to get the left and right subtrees. So to save complexity on the linear look up, we employ a hashmap to store the index of each element in the inorder traversal. This transforms the search operation into a constant-time lookup.

// Algorithm:

// Step 1:Create an empty map to store the indices of elements in the inorder traversal. Iterate through each element in the inorder traversal and store its index in the map (inMap) using the element as the key and its index as the value.

// Step 2: Create a recursive helper function `buildTree` with the following parameters:

// Preorder vector
// Start index of preorder (preStart), initially set to 0
// End index of preorder (preEnd), initially set to preorder.size() - 1.
// Inorder vector
// Start index of inorder (inStart), initially set to 0.
// End index of inorder (inEnd), initially set to inorder.size() - 1.
// Map for efficient root index lookup in the inorder traversal.
// Step 3: Base Case: Check if preStart is greater than preEnd or inStart is greater than inEnd. If true, return NULL, indicating an empty subtree/node.

// Step 4: The root node for the current subtree is the first element in the preorder traversal (preorder[preStart]). Find the index of this root node in the inorder traversal using the map (inMap[rootValue]). This is the rootIndex.

// Step 5: Hence, the left subtree ranges from inStart to rootIndex. Subtracting these indexes gives us the leftSubtreeSize.

// Step 6: TMake two recursive calls to buildTree to build the left and right subtrees: For the left subtree:

// Update preStart to preStart + 1 (moving to the next element in preorder)
// Update preEnd to preStart + leftSubtreeSize (end of left subtree in preorder)
// Update inEnd to rootIndex - 1 (end of left subtree in inorder)
// For the right subtree:
// Update preStart to preStart + leftSubtreeSize + 1 (moving to the next element after the left subtree)
// Update preEnd to the original preEnd (end of right subtree in preorder)
// Update inStart to rootIndex + 1 (start of right subtree in inorder)
// Step 7: Return the root node constructed for the current subtree. The function returns the root of the entire binary tree constructed from the preorder and inorder traversals.


// Solution
// TC - O(N) and SC - O(N)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// function to build a binary tree from preorder and inoreder traversals
const buildTree = function(preorder, inorder) {
    // create a map to store the indices of element in the inorder traversals
    const inMap = new Map();

    // populate the map with the indices of elements in the inorder traversals
    inorder.forEach((value, index) => {
        inMap.set(value, index);
    });

    // call the helper function to recursively build the tree
    const root = buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);

    return root;
};

// recursive helper function to build the tree
const buildTreeHelper = function(preorder, preStart, preEnd, inorder, inStart, inEnd, inMap) {
    // base case if the start indices exceed the end return null
    if(preStart > preEnd || inStart > inEnd) return null;

    // create a new Node with the value at the current preorder index
    let root = new Node(preorder[preStart]);

    // find the index of the current root value in the inorder traversal
    let inRoot = inMap.get(root.val);

    // calculate the number of elements in the left subtree
    let numsLeft = inRoot - inStart;

    // Recursively build the left and right subtree
    root.left = buildTreeHelper(preorder, preStart + 1, preStart + numsLeft, inorder, inStart, inRoot - 1, inMap);

    root.right = buildTreeHelper(preorder, preStart + numsLeft + 1, preEnd, inorder, inRoot + 1, inEnd, inMap);

    // return the current root node
    return root;
};

// Function to print the inorder traversal of a tree
function printInorder(root) {
    if (!root) {
        return;
    }
    printInorder(root.left);
    console.log(root.val + " ");
    printInorder(root.right);
}

// Sample Input
const inorder = [9, 3, 15, 20, 7];
const preorder = [3, 9, 20, 15, 7];

// Build Tree and Print Output
const root = buildTree(preorder, inorder);
console.log("Inorder of Unique Binary Tree Created:", printInorder(root));