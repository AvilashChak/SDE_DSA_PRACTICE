// Serialize and Deserialize Binary Tree
// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Example 1:
// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:
// Input: root = []
// Output: []


// Approach

// Serialisation:
// Step 1: Check if the tree is empty: If the root is null, return an empty string.
// Step 2: Initialise an empty string: This string will store the serialised binary tree.
// Step 3: Use a queue for level-order traversal: Initialise a queue and enqueue the root.
// Step 4: Within the level-order traversal loop:
// Dequeue a node from the queue.
// If the node is null, append "#" to the string.
// If the node is not null, append its data value along with a ‘,’ (comma) to the string. This comma acts as a delimiter that separates the different node values in the string. Enqueue its left and right children.
// Step 5: Return the final string containing the serialised representation of the tree.

// Deserialization:
// Step 1:Check if the serialised data is empty: If it is, return null.
// Step 2: Tokenize the serialised data: Use a stringstream to tokenize the input string using the comma as a delimiter.
// Step 3: Read the root value: Read the first token and create the root node with this value.
// Step 4: Use a queue for level-order traversal: Initialise a queue and enqueue the root.
// Step 5: Within the level-order traversal loop:
// Dequeue a node from the queue.
// Read the value for the left child from the stringstream.
// If it is "#", set the left child to null. If it's not "#", create a new node with the value and set it as the left child.
// Read the next value in the stringstream for the right child.
// If it is "#", set the right child to null. If it's not "#", create a new node with the value and set it as the right child.
// Enqueue the left and right children into the queue for further traversal.
// Step 6: Return the reconstructed root: The final result is the root of the reconstructed tree.

// TC - O(N) and SC - O(N)

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Encodes the tree into a single string
const serialize = function(root) {
    // check if the tree is empty
    if(!root) {
        return "";
    }

    // initialize an empty string to serialized data
    let s = "";
    
    // Use a queue for level order traversal
    let q = [];

    // Start with the root node
    q.push(root);

    // Perform level order traversal
    while(q.length > 0) {
        // Get the front node in the queue
        let node = q.shift();

        // Check if the node is null and append # to the string
        if(node === null) {
            s += "#,";
        }
        else {
            // append the node value to the string
            s += node.val + ",";

            // push the left and right children to the queue for further traversal
            q.push(node.left);
            q.push(node.right);
        }
    }

    return s;
};

const deserialize = function(data) {
    // check if the serialized data is empty
    if(data === "") {
        return null;
    }

    // use a stringstream to tokenize the serialized data
    let s = data.split(",");

    // Read the root value from the serialized data
    let rootVal = s.shift();
    let root = new TreeNode(parseInt(rootVal));

    // Use a queue for level order traversal
    let q = [];

    // start with the root node
    q.push(root);

    // Perform level order traversal to reconstruct the tree
    while(q.length > 0) {
        // Get the front node in the queue
        let node = q.shift();

        // Read the value of the left child from the serialized data
        let leftVal = s.shift();

        // If the value is not #, create a new left child and push it to the queue
        if(leftVal !== "#") {
            let leftNode = new TreeNode(parseInt(leftVal));
            node.left = leftNode;
            q.push(leftNode);
        }

        // Read the value of the right child from the serialized data
        let rightVal = s.shift();

        // If the value is not #, create a new right child and push it to the queue
        if(rightVal !== "#") {
            let rightNode = new TreeNode(parseInt(rightVal));
            node.right = rightNode;
            q.push(rightNode);
        }
    }

    return root;
};

function inorder(root) {
    if (!root) {
        return;
    }
    inorder(root.left);
    console.log(root.val + " ");
    inorder(root.right);
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log("Original Tree: ");
inorder(root);
console.log("\n");

let serialized = serialize(root);
console.log("Serialized: " + serialized + "\n");

let deserialized = deserialize(serialized);
console.log("Tree after deserialization: ");
inorder(deserialized);
console.log("\n");