// Rotate Linked List
// Given the head of a linked list, rotate the list to the right by k places.
// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Approach
// BF - TC - O(k * N) and SC - O(1)
// In this approach we will do is we will pick up the last node and keep it in the front and we will keep on doing k no of times.


// Solution
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const rotate = function(head, k) {
    // edge cases
    if(head === null || head.next === null || k ===0) {
        return head;
    }

    // Finding the length
    let len = 1;
    let temp = head;

    while(temp.next !== null) {
        len++;
        temp = temp.next;
    }

    // loop till k times
    for(let i = 1; i <= k; i++) {
        let prev = null;
        let curr = head;

        // Traverse till we reach the last node
        while(curr.next) {
            prev = curr;
            curr = curr.next; 
        }

        // Move the last node to the front
        prev.next = null;
        curr.next = head;
        head = curr;
    }

    return head;
};

const arrayToLinkedList = function(arr) {
    let dummy = new Node(0);
    let temp = dummy;
    for(let val of arr) {
        temp.next = new Node(val);
        temp = temp.next;
    }
    return dummy.next;
};

const printLinkedList = function(head) {
    let result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
};


// Optimal - TC - O(N) + O(N - (N % k)) = O(N) and SC - O(1)
const rotateList = function(head, k) {
    // edge cases
    if(head === null || head.next === null || k === 0) {
        return head;
    }

    // find the length
    let len = 1, temp = head;
    while(temp.next !== null) {
        len++;
        temp = temp.next;
    }
    
    // go till the last node and make the list circular
    temp.next = head;

    k = k % len;
    k = len - k;
    if(k === 0) {
        temp.next = null;
        return head;
    }

    for(let i = 1; i <= k; i++) {
        temp = temp.next;
    }
    
    // make the node head and break connection
    head = temp.next;
    temp.next = null;
    
    return head;
};


let arr = [1,2,3,4,5];
let head = arrayToLinkedList(arr);
// const rot1 = rotate(head, 2);
// printLinkedList(rot1);
const rot2 = rotateList(head, 2);
printLinkedList(rot2);