// Ceil from BST
// Problem statement
// Ninja is given a binary search tree and an integer. Now he is given a particular key in the tree and returns its ceil value. Can you help Ninja solve the problem?

// Note:
// Ceil of an integer is the closest integer greater than or equal to a given number.
// For example:
// arr[] = {1, 2, 5, 7, 8, 9}, key = 3.
// The closest integer greater than 3 in the given array is 5. So, its ceil value in the given array is 5.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= T <= 10    
// 1 <= N <= 10^5
// 0 <= node data <= 10^9
// 1 <= X <= 10^9     

// Time limit: 1 second
// Sample Input 1:
// 2
// 8 5 10 2 6 -1 -1 -1 -1 -1 7 -1 -1
// 4
// 8 5 10 2 6 -1 -1 -1 -1 -1 7 -1 -1
// 7
// Sample Output 1:
// 5
// 7
// Explanation for Sample Output 1:
//  In the first test case, we traverse the tree starting from the root node which has a value of 8. Now the value of its left child is 5 and its right child is 10. Key-value 4 is less than the left child so we traverse the left subtree. Now we reach a node with value 5 and then again repeat the above process till we reach a null node. Finally, we return 5 as our answer.

// In the second test case, we traverse the tree starting from the root node which has a value of 8. Now the value of its left child is 5 and its right child is 10. Key-value 7 is less than the right child and more than the left child, so we traverse the right subtree. Now we reach a node with value 10 and then again follow the same procedure and reach a node with value 7 and stop there and return 7 as our final answer.
// Sample Input 2:
// 2
// 55 25 82 13 34 67 86 6 21 28 47 61 70 84 92 1 10 17 24 26 29 45 54 56 65 68 81 83 85 91 
// 96 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 
// 34
// 84 19 97 0 56 96 99 -1 8 50 83 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 
// 50
// Sample Output 2:
// 34
// 50


// Approach
// Understanding Ceil in BST
// The ceil of a number in a Binary Search Tree (BST) is the smallest number in the BST that is greater than or equal to the given key.

// For example, in a sorted array {1, 2, 5, 7, 8, 9}, the ceil of 3 is 5 because 5 is the closest integer greater than or equal to 3.

// Steps to Solve the Problem
// Initialize a variable ceil to -1, which will store the closest greater or equal value.
// Start at the root node and compare the given key with the node's value.
// Three possible cases arise:
// If root.val == key, then ceil is found, return root.val.
// If key > root.val, move to the right subtree because larger values exist there.
// If key < root.val, update ceil = root.val (as it is a potential answer) and move to the left subtree to check for smaller values closer to key.
// Continue the traversal until a null node is reached.
// Return the stored ceil value.

// TC - O(n) and SC - O(1)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const ceilBst = function(root, key) {
    let ceil = -1;

    while(root !== null) {
        if(root.val === key) {
            ceil = root.val;
            return root;
        }
        else if(key > root.val) {
            root = root.right;
        }
        else {
            ceil = root.val;
            root = root.left;
        }
    }
    return ceil;
};

// Constructing the BST
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(8);

// Test Case
const key = 7;
console.log(`Ceil of ${key} in BST:`, ceilBst(root, key)); // Expected Output: 8