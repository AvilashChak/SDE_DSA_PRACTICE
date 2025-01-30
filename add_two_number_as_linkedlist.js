// Add two numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Approach
// Optimal - TC - O(max(n, m)) and SC - O(N)
// this problem has only optimal solution. so try to kill time by asking edge cases. 
// First we will create a dummy node and then create a copy of it and name as temp and assign it to dummy node. 
// And we create a variable sum = 0 and carry = 0. and then we will have two pointers l1 and l2 which will add up the sum and store in new node and we will if its 2 digit we will assign in carry. and move temp to that node and in also l1 and l2 and start the next iteration and continue the process unless l1 l2 and carry becomes null.

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

const addTwoNumbers = function(l1, l2) {
    let dummy = new Node(0);
    let temp = dummy;
    
    let carry = 0;

    while(l1 !== null || l2 !== null || carry > 0) {
        let sum = 0; // after each iteration the sum will reset to 0

        if(l1 !==  null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if(l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        sum = sum + carry;
        carry = Math.floor(sum / 10);
        let node = new Node(sum % 10);
        temp.next = node;
        temp = node;
    }

    return dummy.next;
};

const list1 = new Node(2);
list1.next = new Node(4);
list1.next.next = new Node(3);

const list2 = new Node(5);
list2.next = new Node(6);
list2.next.next = new Node(4);

const head = addTwoNumbers(list1, list2);
printList(head);
