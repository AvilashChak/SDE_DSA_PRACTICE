// Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Approach
// BF - TC - O(N) and SC - O(N)
// In this approach we will use Hashset. we will keep the node in Hashset and traverse and see if it appears in the Hashset in that node the cycle is formed.

// Solution
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    } 
}

const detectLoop = function(head) {
    let temp = head;

    let set = new Set();

    while(temp !== null) {
        if(set.has(temp)) {
            return true;
        }

        set.add(temp);
        temp = temp.next;
    }

    return false;
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
// Create a loop
fifth.next = third;

// Check if there is a loop in the linked list
if (detectLoop(head)) {
    console.log("Loop detected in the linked list.");
} else {
    console.log("No loop detected in the linked list.");
}


// Optimal - TC - O(N) and SC - O(1)
// In this approach we will use 2 pointers one slow and fast. We will move the slow pointer by one step and fast by two step. 

const detectCycle = function(head) {
    if(head === null || head.next === null) {
        return null;
    }

    let fast = head;
    let slow = head;

    while(fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if(slow === fast) {
            return true;
        }
    }

    return false;

};


if (detectCycle(head)) {
    console.log("Loop detected in the linked list (optimal).");
} else {
    console.log("No loop detected in the linked list (optimal).");
}