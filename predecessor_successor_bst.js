// Find the inorder predecessor/successor of a given Key in BST.
// You are given root node of the BST and an integer key. You need to find the in-order successor and predecessor of the given key. If either predecessor or successor is not found, then set it to NULL.

// Note:- In an inorder traversal the number just smaller than the target is the predecessor and the number just greater than the target is the successor. 

// Examples :

// Input: root[] = [8, 1, 9, N, 4, N, 10, 3, N, N, N]
//       8
//     /   \
//    1     9
//    \      \
//     4      10
//    /
//   3
// key = 8
// Output: 4 9
// Explanation: In the given BST the inorder predecessor of 8 is 4 and inorder successor of 8 is 9.
// Input: root[] = [10, 2, 11, 1, 5, N, N, N, N, 3, 6, N, 4, N, N]
//       10
//     /   \
//    2     11
//   / \
//  1   5
//     / \
//    3   6
//     \
//      4
// key = 11
// Output: 10 -1
// Explanation: In given BST, the inorder predecessor of 11 is 10 whereas it does not have any inorder successor.
// Input: root[] = [2, 1, 3]
//       2
//     /   \
//    1     3
// key = 3
// Output: 2 -1


// Approach
// Understanding Inorder Traversal:

// The inorder traversal of a BST visits nodes in sorted order (Left → Root → Right).
// The predecessor of a node is the largest value in its left subtree (or the last smaller value encountered while searching).
// The successor is the smallest value in its right subtree (or the last greater value encountered while searching).
// Finding Predecessor and Successor:

// Start at the root and traverse the tree.
// If the key matches the current node:
// Predecessor: Maximum value in the left subtree (rightmost node in left subtree).
// Successor: Minimum value in the right subtree (leftmost node in right subtree).
// If the key is smaller than the current node:
// Update the successor and move left.
// If the key is greater than the current node:
// Update the predecessor and move right.

// TC - O(H) ie O(N) and SC - O(1)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const findPreSuc = function(root, pre, suc, key) {
    let cur = root;

    while(cur !== null) {
        if(cur.val === key) {
            // Find predecessor: Maximum of the left subtree
            if(cur.left) {
                let temp = cur.left;
                while(temp.right) {
                    temp = temp.right;
                }
                pre.val = temp.val;
            }

            // Find successor: Minimum of the right subtree
            if(cur.right) {
                let temp  = cur.right;
                while(temp.left) {
                    temp = temp.left;
                }
                suc.val = temp.val;
            }
            break;
        }
        else if(key < cur.val) {
            suc.val = cur.val // Potential successor
            cur = cur.left;
        }
        else {
            pre.val = cur.val; // Potential predecessor
            cur = cur.right;
        }
    }

    return [pre.val, suc.val];
};

let root = new TreeNode(8);
root.left = new TreeNode(1);
root.right = new TreeNode(9);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(10);
root.left.right.left = new TreeNode(3);

// Initialize predecessor and successor as objects
let pre = { val: -1 };
let suc = { val: -1 };

// Call function and print result
console.log(findPreSuc(root, pre, suc, 8)); // Output: [4, 9]