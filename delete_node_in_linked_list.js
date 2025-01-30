// Delete Node in a Linked List
// There is a singly-linked list head and we want to delete a node node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed that the given node node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:
// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.
// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.
// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Approach
// Optimal -
// The approach is very dumb. If we have the reference of the node we cannot delete the space occupied by the node. We can change the value. After changing the value of the node we just need to do node next next to delete the node.

// Solution
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const printList = function(head) {
    let result = [];
    while(head !== null) {
        result.push(head.val);
        //console.log(head.val + " ");
        head = head.next;
    }
    console.log(result.join(" -> "));
};

const deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
    
};

let head = new Node(4);
head.next = new Node(5);
head.next.next = new Node(1);
head.next.next.next = new Node(9);

// Printing the original list
console.log("Original List:");
printList(head);

// Deleting node with value 5 (passing the reference)
deleteNode(head.next);

// Printing the modified list
console.log("List after deleting node with value 5:");
printList(head);