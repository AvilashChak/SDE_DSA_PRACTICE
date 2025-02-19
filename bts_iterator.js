// Binary Search Tree Iterator
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST):
// BSTIterator(TreeNode root) Initializes an object of the BSTIterator class. The root of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.
// boolean hasNext() Returns true if there exists a number in the traversal to the right of the pointer, otherwise returns false.
// int next() Moves the pointer to the right, then returns the number at the pointer.
// Notice that by initializing the pointer to a non-existent smallest number, the first call to next() will return the smallest element in the BST.
// You may assume that next() calls will always be valid. That is, there will be at least a next number in the in-order traversal when next() is called.

// Example 1:
// Input
// ["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
// Output
// [null, 3, 7, true, 9, true, 15, true, 20, false]
// Explanation
// BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
// bSTIterator.next();    // return 3
// bSTIterator.next();    // return 7
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 9
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 15
// bSTIterator.hasNext(); // return True
// bSTIterator.next();    // return 20
// bSTIterator.hasNext(); // return False



// Approach
// The BSTIterator class allows in-order traversal of a Binary Search Tree (BST) efficiently using a stack-based approach.
// Approach Explanation:
// Initialization (BSTIterator):
// A stack is used to simulate the in-order traversal.
// A helper function pushAllLeft(root) is called to push all leftmost nodes onto the stack.
// Next Element (next()):
// The top element (smallest remaining element) is popped from the stack.
// If the popped node has a right child, pushAllLeft() is called on the right subtree to push its leftmost children onto the stack.
// The value of the popped node is returned.
// Check if Next Exists (hasNext()):
// Simply checks if the stack is non-empty.

// TC - O(1) and SC - O(H)

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BSTIterator {
    constructor(root) {
        this.stack = [];
        this.pushAllLeft(root);
    }

    // Helper function to push all the left child in the stack
    pushAllLeft(node) {
        while(node !== null) {
            this.stack.push(node);
            node = node.left;
        }
    }

    next() {
        // Pop the first element from the stack(smallest element)
        let topNode = this.stack.pop();

        // If the popped node has a right subtree, push its leftmost nodes onto the stack
        if(topNode.right) {
            this.pushAllLeft(topNode.right);
        }

        return topNode.val;
    }

    hasNext() {
        return this.stack.length > 0;
    }
}



// Creating the BST: [7, 3, 15, null, null, 9, 20]
const root = new TreeNode(7);
root.left = new TreeNode(3);
root.right = new TreeNode(15, new TreeNode(9), new TreeNode(20));

// Initializing the iterator
const iterator = new BSTIterator(root);

console.log(iterator.next());    // Output: 3
console.log(iterator.next());    // Output: 7
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 9
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 15
console.log(iterator.hasNext()); // Output: true
console.log(iterator.next());    // Output: 20
console.log(iterator.hasNext()); // Output: false