// Check if a LinkedList is palindrome or not.
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false

// Approach
// BF - TC - O(N) + O(N) = O(2N) and SC - O(N)
// Convert Linked List to an Array:
// Traverse the linked list and store values in an array.
// Check if the Array is a Palindrome:
// Use two pointers (left and right) to compare elements from both ends.

// Solution
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const printList = function(head) {
    const res = [];
    while(head !== null) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res.join(" -> "));
}

const checkPalindrome = function(head) {
    let arr = [];

    let temp = head;

    while(temp !== null) {
        arr.push(temp.val);
        temp = temp.next;
    }

    let left = 0, right = arr.length - 1;
    while(left < right) {
        if(arr[left] !== arr[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(checkPalindrome(head));

// Optimal - TC - O(2N) and SC - O(1)
// In this approach we will first find the middle of the linked list. We will use two pointers s and f. Where s will move one step and f will move two steps ahead. And the moment when f pointer reaches the last node or the second last node we stop. And know the place where the s pointer is pointing is the middle. And then we need to reverse the linked list. and move s one step ahead. And then we will take one more dummy node and place in the head and start traversing dummy and slow simultaneosly. And at the moment when s reaches null then I can say that right half is equivalent to the left and we can call it as a palindrome becasue we revesed the right half. 

// Solution
const isPalindrome = function(head) {
    if(head === null || head.next === null) return head;

    let fast = head;
    let slow = head;

    while(fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // reversing the right half
    slow.next = reverseList(slow.next);

    slow = slow.next;

    while(slow != null) {
        if(head.val !== slow.val) {
            return false;
        }
        head = head.next;
        slow = slow.next;
    }

    return true;
};

const reverseList = function(head) {
    let pre = null;
    let next = null;
    while(head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    return pre;
};

console.log("Using optimal approach: ", isPalindrome(head));
console.log(printList(head));