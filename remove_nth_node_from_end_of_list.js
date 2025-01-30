// Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
// Input: head = [1], n = 1
// Output: []
// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]

// Approach
// BF - TC - O(2N) and SC - O(1) 
// First we need to create a dummy pointer which will point to our head. Then we need count which we will initialized as 1. And when we move the dummy pointer we will increment the count by 1 till we reach the nth node. Now N = 6(nth node) - 4(n given to us) = 2. Now we will take one more pointer temp and will node is temp.next . And when we reach 2 we reach two we wil break the pointer and point to temp - next - next. And if asked we can delete the node.

// Solution

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

const printList = function(head) {
    while(head !== null) {
        console.log(head.data + ' ');
        head = head.next;
    }
};

const deleteNthNodeFromEnd = function(head, N) {
    if(head === null) {
        return null;
    }

    let count = 0;
    let temp = head;

    // Count the number of nodes in the list
    while(temp !== null) {
        count++;
        temp = temp.next;
    }

    // This is the edge case if N == count. Delete the head
    if(count === N) {
        return head.next;
    }

    let res = count - N;
    temp = head;

    // Traverse to the node just before the one to delete
    while(temp !== null) {
        res--;
        if(res === 0) {
            break
        }
        temp = temp.next;
    }

    // Delete the Nth Node
    let deleteNode = temp.next;
    temp.next = temp.next.next;
    deleteNode = null
    return head;
};

const arr = [1, 2, 3, 4, 5];
const N = 2;
let head = new Node(arr[0]);
head.next = new Node(arr[1]);
head.next.next = new Node(arr[2]);
head.next.next.next = new Node(arr[3]);
head.next.next.next.next = new Node(arr[4]);

// head = deleteNthNodeFromEnd(head, N);
// printList(head);

// Optimal - TC - O(N) and SC - O(1)
// In this approach we need to put two pointers which will start from head as fast and slow. First the fast will directly go to the n.If n is 4 the fast will go to the 4th node. Once it reaches there from there slow and fast will move one node ahead at a time once the first reaches the nth node we will stop and where s will be placed it will be the node which we need to delete. And s will be s.next.next to break the chain and connect.

// Solution
const deleteNthNode = function(head, N) {
    if(head === null) {
        return null;
    }

    let slow = head;
    let fast = head;

    // fast will go till N
    for(let i = 1; i <= N; i++) {
        fast = fast.next;
    }

    // edge case if fast is the nth node or the null.
    if(fast === null) {
        return head.next;
    }

    // Move both pointers until fast reaches the end
    while(fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // Delete the node
    let delNode = slow.next;
    slow.next = slow.next.next;
    delNode = null;
    return head;
};

head = deleteNthNode(head, N);
printList(head);