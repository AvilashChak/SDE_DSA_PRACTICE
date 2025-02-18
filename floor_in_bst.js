// Floor in BST
// Problem statement
// You are given a BST (Binary search tree) with’ N’ number of nodes and a value ‘X’. Your task is to find the greatest value node of the BST which is smaller than or equal to ‘X’.

// Note :‘X’ is not smaller than the smallest node of BST .

// For example:

// In the above example, For the given BST  and X = 7, the greatest value node of the BST  which is smaller than or equal to  7 is 6.
// Detailed explanation ( Input/output format, Notes, Images )
// Constraints:
// 1 <= T <= 5
// 1 <= N <= 5 * 10 ^ 3
// 1 <= nodeVal[i] <= 10 ^ 9

// Time Limit: 1 sec.
// Sample Input 1:
// 2
// 10 5 15 2 6 -1 -1 -1 -1 -1 -1
// 7
// 2 1 3 -1 -1 -1 -1
// 2
// Sample Output 1:
// 6
// 2
// Explanation of Sample Input 1:
// In the first test case, the BST looks like as below:

// The greatest value node of the BST which is smaller than or equal to  7 is 6.

// In the second test case, the BST looks like as below:

// The greatest value node of the BST which is smaller than or equal to  2 is 2.
// Sample Input 2:
// 2
// 5 3 10 2 4 6 15 -1 -1 -1 -1 -1 -1 -1 -1
// 15
// 5 3 10 2 4 6 15 -1 -1 -1 -1 -1 -1 -1 -1
// 8
// Sample Output 2:
// 15
// 6


// Approach

// Initialize floor as -1 (default value in case no valid floor is found).
// Iterate through the BST:
// If root.val == key, return root.val immediately as it's the exact match.
// If key > root.val, update floor = root.val (as it's a possible floor value) and move to the right subtree to find a larger valid floor.
// If key < root.val, move to the left subtree (as smaller values won’t contribute to the floor).
// Return floor after the loop ends.

// TC - O(N) and SC - O(1)

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const floorBst = function(root, key) {
    let floor = -1;
    while(root !== null) {
        if(root.val === key) {
            floor = root.val;
            return floor;
        }
        else if(key > root.val) {
            floor = root.val;
            root = root.right;
        }
        else {
            root = root.left;
        }
    }
    return floor;
};


// Constructing the BST
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(2);
root.left.right = new Node(6);

// Test Case
const key = 7;
console.log(`Floor of ${key} in BST:`, floorBst(root, key)); // Expected Output: 6