// Flattening of a LinkedList (Optimal Approach)
// Given a linked list containing n head nodes where every node in the linked list contains two pointers:
// (i) next points to the next node in the list.
// (ii) bottom pointer to a sub-linked list where the current node is the head.
// Each of the sub-linked lists nodes and the head nodes are sorted in ascending order based on their data.
// Your task is to flatten the linked list such that all the nodes appear in a single level while maintaining the sorted order.
// Note:
// 1. ↓ represents the bottom pointer and -> represents the next pointer.
// 2. The flattened list will be printed using the bottom pointer instead of the next pointer.
// Examples:
// Input:
// Output: 5-> 7-> 8-> 10 -> 19-> 20-> 22-> 28-> 30-> 35-> 40-> 45-> 50.
// Explanation: 
// Bottom pointer of 5 is pointing to 7.
// Bottom pointer of 7 is pointing to 8.
// Bottom pointer of 8 is pointing to 10 and so on.
// Input:
// Output: 5-> 7-> 8-> 10-> 19-> 22-> 28-> 30-> 50
// Explanation:
// Bottom pointer of 5 is pointing to 7.
// Bottom pointer of 7 is pointing to 8.
// Bottom pointer of 8 is pointing to 10 and so on.

// Optimal Approach

// TC - O(N * 2m) and SC - O(N)
// Base Case:
// If the head is null, indicating the end of the list, it is already flattened or there are no further nodes. Return the head as it is.
// Similarly, if there's no next node, meaning there's only one node left in the list, return the head as it is since it's already flattened.
// Recursive Function: The core of the algorithm lies in implementing a recursive function responsible for flattening the linked list. The function operates based on the principle that:
// If the base conditions are not met, the function invokes itself recursively. This recursion continues until it reaches the base case, gradually flattening the linked list and merging the resultant with the previous node.
// Return:Following the recursion, the function returns the merged head of the new flattened linked list. This head marks the new head of the merged list starting from the end, which will now be merged with the present head.
//Step 1: Establish Base Case Conditions Check if the base case conditions are met, return the head if it is null or has no next pointer to head as there’s no further flattening or merging required.
// Step 2: Recursively Merge the List:
// Initiate the recursive flattening process by calling `flattenLinkedList` on the next node (`head -> next`).
// The result of this recursive call is the head of the flattened and merged linked list.
// Step 3: Merge Operations:
// Inside the recursive call, call the merge function which takes care of the merging of these two lists based on their data values.
// The merged list is updated in the head, which is then returned as the result of the flattening process.

// Solution

class Node {
    constructor(val, next = null, bottom = null) {
        this.val = val;
        this.next = next;
        this.bottom = bottom;
    }
}

const merge = function(list1, list2) {
    let dummy = new Node(0);
    let res = dummy;

    // Merge operation
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            res.bottom = list1;
            res = list1;
            list1 = list1.bottom;
        }
        else {
            res.bottom = list2;
            res = list2;
            list2 = list2.bottom;
        }
    }

    // Store the nodes which are left in list1 and list2
    if(list1 !== null) {
        res.bottom = list1;
    }
    else {
        res.bottom = list2;
    }

    return dummy.bottom;
};

const flattenLinkedList  = function(head) {
    // Base Cases
    if(head === null || head.next === null) {
        return null;
    }

    // Merge the list recursively
    head.next = flattenLinkedList(head.next);

    // Merge the lists
    head = merge(head, head.next);

    return head;
};

// Print the linkedlist
const printLinkedList = function(head) {
    const result = [];
    while(head !== null) {
        result.push(head.val);
        head = head.bottom;
    }
    console.log(result.join(" -> "));
};

// Create a linked list with bottom pointers
let head = new Node(5);
head.bottom = new Node(7);
head.bottom.bottom = new Node(8);
head.bottom.bottom.bottom = new Node(30);

head.next = new Node(10);
head.next.bottom = new Node(20);

head.next.next = new Node(19);
head.next.next.bottom = new Node(22);
head.next.next.bottom.bottom = new Node(50);

head.next.next.next = new Node(28);
head.next.next.next.bottom = new Node(35);
head.next.next.next.bottom.bottom = new Node(40);
head.next.next.next.bottom.bottom.bottom = new Node(45);

console.log("Flattened linked list:");
let flattened = flattenLinkedList(head);
printLinkedList(flattened);