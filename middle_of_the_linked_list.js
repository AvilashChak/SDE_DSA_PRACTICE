// Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

// Approach -
// BF - TC - O(n) + O(n/2)  or worst case O(n2) and SC - O(1) 
// In BF we will iterate over the list and find the n so that we get the mid. mid = n/2 + 1. Again we will iterate and when we reach mid we will stop and that will be our mid point.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const findMiddle = function(head) {
    if(head === null || head.next === null) {
        return head;
    }

    let temp = head;
    let count = 0;

    while(temp !== null) {
        count++
        temp = temp.next;
    }

    let mid = Math.floor(count / 2);
    temp = head;

    while(mid > 0) {
        temp = temp.next;
        mid--;
    }

    return temp;
};

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middleNode = findMiddle(head);

console.log("The middle node value is: " + middleNode.data);


// Optimal - TC - O(n/2) or worst case O(n) and SC - O(1)
// Optimal approach is we use the 2 tortoise slow and fast. Slow will move by 1 and fast will move by 2. When fast is out of the list or reaches null where slow is will be the middle.

const findMiddleOptimized = function(head) {
    if(head === null || head.next === null) {
        return head;
    }

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

const middleNodeOptimized = findMiddleOptimized(head);
console.log("The middle node value (Optimized) is: " + middleNodeOptimized.data);