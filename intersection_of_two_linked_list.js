// Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.
// For example, the following two linked lists begin to intersect at node c1:
// The test cases are generated such that there are no cycles anywhere in the entire linked structure.
// Note that the linked lists must retain their original structure after the function returns.
// Custom Judge:
// The inputs to the judge are given as follows (your program is not given these inputs):
// intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
// listA - The first linked list.
// listB - The second linked list.
// skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
// skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
// The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to your program. If you correctly return the intersected node, then your solution will be accepted.
// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.
// - Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) are different node references. In other words, they point to two different locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.
// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.
// Example 3:
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.

// Approach
// BF - TC - O(N * M) and SC - O(1)
// We need Traverse head1 for each node and traverse head2 to check if any node in head2 matches the current node in head1.
// If a match is found we need to return that node (the intersection point). 
// If no intersection is found we need to return null.

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
        head = head.next;
    }
    console.log(result.join(" -> "));
};

const bfIntersectionOfTwoLinkedList = function(head1, head2) {
    let temp1 = head1;
    
    while(temp1 !== null) {
        let temp2 = head2;

        while(temp2 !== null) {
            if(temp1 === temp2) {
                return temp1;
            }

            temp2 = temp2.next;
        }

        temp1 = temp1.next;
    }

    return null;
};




const commonNode = new Node(8, new Node(10));

// First linked list: 3 -> 7 -> 8 -> 10
const head1 = new Node(3, new Node(7, commonNode));

// Second linked list: 99 -> 1 -> 8 -> 10
const head2 = new Node(99, new Node(1, new Node(5, commonNode)));

console.log("Linked List 1:");
printList(head1);

console.log("Linked List 2:");
printList(head2);

// Finding the intersection node
const bfIntersectionNode = bfIntersectionOfTwoLinkedList(head1, head2);


// By Hashing - TC - O(N + M) and SC - O(N)
const hashIntersectionNode = function(head1, head2) {
    let hashSet = new Set();
    
    while(head1 !==  null) {
        hashSet.add(head1); // will store the reference not the value
        head1 = head1.next;
    }
    
    while(head2 !== null) {
        if(hashSet.has(head2)) return head2;
        head2 = head2.next;
    }
    
    return null;
    
};

const hashIntersection = hashIntersectionNode(head1, head2);

if (hashIntersection) {
    console.log("Intersection found at node with value:", hashIntersection.val);
} else {
    console.log("No intersection found.");
}

// Optimal - TC - O(2n) and SC - (1)
// In this appraoch we will use two pointers d1 and d2 and assigned to head1 and head2. And then we start traversing and whenever d1 or d2 reaches null it will be the head of head2 and head1 i.e the pointer will change place and when both meet at the same point that will be the intersection or null.

const getIntersectionNode = function(head1, head2) {
    let d1 = head1;
    let d2 = head2;

    while(d1 !== d2) { // either d1 and d2 meet in intersection or in null 
        d1 = d1 === null ? head2 : d1.next;
        d2 = d2 === null ? head1 : d2.next;
    }

    return d1;
};

const getIntersection = getIntersectionNode(head1, head2);

if (getIntersection) {
    console.log("Intersection found at node with value (optimal):", getIntersection.val);
} else {
    console.log("No intersection found.");
}