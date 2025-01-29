// Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []

// Approach
// Optimal - TC - O(n) and SC - O(1)

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseLinkedList = function(head) {
    let newHead = null;
    while(head !== null) {
        const next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }

    return newHead;
};

const arrayToLinkedList = function(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for(let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};

const linkedListToArray = function(head) {
    let result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    return result;
};


let head = arrayToLinkedList([1, 2, 3, 4, 5]);
let reversedHead = reverseLinkedList(head);
console.log(linkedListToArray(reversedHead));