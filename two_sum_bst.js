// Find a pair with a given sum in BST
// Two Sum IV - Input is a BST
// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

// Example 1:
// Input: root = [5,3,6,2,4,null,7], k = 9
// Output: true
// Example 2:
// Input: root = [5,3,6,2,4,null,7], k = 28
// Output: false

// Approach
// The idea is to use two iterators—one for the smallest (inorder traversal) and one for the largest (reverse inorder traversal) elements—working together to find the target sum.
// BSTIterator Class:
// The class maintains a stack to simulate an iterative inorder or reverse inorder traversal.
// It provides a next() method to get the next smallest or largest element.
// Two-pointer Technique:

// We use one iterator to traverse from the smallest element (left pointer).
// We use another iterator to traverse from the largest element (right pointer).
// We sum their values and adjust the pointers accordingly.

// TC - O(N) and SC - O(H)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(root, isReverse) {
        this.stack = [];
        this.isReverse = isReverse;
        this.pushAll(root);
    }

    // helper function to push all the left child in the stack
    pushAll(node) {
        while(node) {
            this.stack.push(node);
            node = this.isReverse ? node.right : node.left;
        }
    }

    next() {
        // pop out the first element from the stack(smallest)
        let node = this.stack.pop();
        this.pushAll(this.isReverse ? node.left : node.right);
        return node.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}

const findTarget = function(root, k) {
    if(!root) return false;

    let leftIterator = new BSTIterator(root, false); // inorder
    let rightIterator = new BSTIterator(root, true); // reverse inorder

    let left = leftIterator.next();
    let right = rightIterator.next();

    while(left < right) {
        let sum = left + right;
        if(sum === k) return true;
        if(sum < k) {
            if(leftIterator.hasNext()) {
                left = leftIterator.next();
            }
            else {
                break;
            }
        }
        else {
            if(rightIterator.hasNext()) {
                right = rightIterator.next();
            }
            else {
                break;
            }
        }
    }

    return false;
};


// Example Usage:
const root = {
    val: 5,
    left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 6,
        left: null,
        right: { val: 7, left: null, right: null }
    }
};

console.log(findTarget(root, 9));  // Output: true
console.log(findTarget(root, 28)); // Output: false