// Reverse Nodes in k-Group
// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.
// You may not alter the values in the list's nodes, only nodes themselves may be changed.
// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:
// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]
// Constraints:
// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000
// Follow-up: Can you solve the problem in O(1) extra memory space?

// Approach
// TC - O((N/k) * k) = O(N) and SC - O(1)
// 1. We need to count the length of the linked list. We will take cur as a dummy head which will point to the head node and we will also take a counter which will track the count.
// 2. Initially we will create a DUMMY node and assign PRE to the DUMMY node. And assign the DUMMY.NEXT to 1 for the time being or as of now. So we can say it's k - 1 operation. for ex if k = 3 we will reverse 3 - 1 = 2 links. 
// At first before starting any reversing of the link we will take a node CUR and keep it next to DUMMY.NEXT.
// And then we need to take a node NEX pointing to CUR.NEXT. 
// Now we need to perform reversing at first we need to break the link. And to break the link we need to perform the below operations.
// CUR.NEXT = NEX.NEXT
// NEX.NEXT = PRE.NEXT
// PRE.NEXT = NEX
// NEX = CUR.NEXT

// Solution
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const printList = function(head) {
    const arr = [];
    while(head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr.join(" -> "));
};

const reverseKGroup = function(head, k) {
    if(head === null || k === 1) return head;

    let dummy = new Node(0);
    dummy.next = head;

    let pre = dummy, cur = dummy, nex = dummy;

    let count = 0;
    while(cur.next !== null) {
        cur = cur.next;
        count++;
    }

    while(count >= k) {
        cur = pre.next;
        nex = cur.next;

        for(let i = 1; i < k; i++) {
            cur.next = nex.next;
            nex.next = pre.next;
            pre.next = nex;
            nex = cur.next;
        }
        pre = cur;
        count -=k;
    }

    return dummy.next;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log("Original Linked List: ");
printList(head);

let k = 3;
head = reverseKGroup(head, k);

console.log("Reversed Linked List: ");
printList(head);