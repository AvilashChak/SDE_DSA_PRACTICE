// Flattening of a LinkedList
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

// BF - TC - O(N log N) and SC - O(N)
// To transform the given linked list into a single level sorted list ensuring that the nodes are arranged in an ascending order, we initialise an array to temporarily hold the extracted nodes during the traversal.
// We iterate over the array by first going over the top-level next pointers of the linked list then accessing each node within its child pointers adding all to the array. Then the array is sorted to arrange all values sequentially and a new linked list from that array is created and returned.
// Algorithm
// Step 1:Initialise an empty array to store the data extracted during the traversal.
// Step 2: Start traversing through the top-level ‘next’ pointers of the linked list and for each node accessed by the ‘next’ pointer, traverse its ‘child’ nodes.
// Iterate all the nodes until reaching the end of the child pointer list appending each node’s value to the array. Move to the next primary node and repeat the process of traversing the child nodes.
// Step 3: Sort the array to arrange its collected node data in ascending order.
// Step 4: Create a new linked list from the sorted array and return the flattened linked list.


class Node {
    constructor(val, next = null, child = null) {
        this.val = val;
        this.next = next;
        this.child = child;
    }
}

const printList = function(head) {
    const res = [];
    while(head !== null) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res.join(" -> "));
};

const convertArrToList = function(arr) {
    let dummy = new Node(0);
    let temp = dummy;
    for(let val of arr) {
        temp.next = new Node(val);
        temp = temp.next;
    }

    return dummy.next;
};

const flatten = function(head) {
   let arr = [];

   while(head) {
        let temp = head;
        while(temp) {
            arr.push(temp.val);
            temp = temp.child;
        }
    head = head.next;
   }

   arr.sort((a, b) => a - b);

   return arr;
};


let head = new Node(5);
head.child = new Node(14);

head.next = new Node(10);
head.next.child = new Node(4);

head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);

head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);


// Print the original
// linked list structure
console.log("Original linked list:");
printList(head);

// Flatten the linked list
// and print the flattened list
let flat = flatten(head);
console.log("\nFlattened linked list: ");
const fl = convertArrToList(flat);
printList(fl);