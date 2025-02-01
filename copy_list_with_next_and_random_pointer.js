// Clone a Linked List with random and next pointer
// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.
// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.
// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.
// Return the head of the copied linked list.
// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.
// Example 1:
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Example 2:
// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]
// Example 3:
// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Approach
// BF - TC - O(2N) = O(N) and SC - O(N) + O(N) = O(N)
// To create a deep copy of the original linked list we can use a map to establish a relationship between original nodes and their copied nodes.
// We traverse the list first to create a copied node for each original node then traverse and establish the correct connections between the copied nodes similar to the arrangement of next and random pointers of the original pointers. In the end, return the head of the copied list obtained from the map.
// Step 1:Initialise variables ‘temp’ as a pointer to the head of the original linked list to traverse it. Create an empty unordered_map, to map original nodes to their corresponding copied nodes.
// Step 2: Iterate through the original linked list and for each node in the linked list create a new node with the same data value as the original data. Map the original node to its copied node in the map.
// Step 3: Iterate through the original list again but this time connect the pointers of the copied nodes in the same arrangement as the original node.
// Get the copied node corresponding to the original node using the map.
// Set the next pointer of the copied node to the copied node mapped to the original node’s next node.
// Set the random pointer of the copied node to the original node’s next node copied from the map.
// Step 4: Return the head of the deep copied list which is obtained by retrieving the copied nodes mapped to the original head from the map.

// Solution
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

const copiedLL = function(head) {
    if(head === null) return null;

    let temp = head;
    let map = new Map();

    // Step 1. Create new nodes(deep copy) and store it in the map. 
    while(temp !== null) {
        let newNode = new Node(temp.val);
        map.set(temp, newNode);
        temp = temp.next;
    }

    temp = head;

    // Step 2. Connecting the next and random pointers using the map
    while(temp !== null) {
        let copiedNode = map.get(temp);
        copiedNode.next = map.get(temp.next) || null;
        copiedNode.random = map.get(temp.random) || null;
        temp = temp.next;
    }

    return map.get(head);

};

// Function to print a linked list including random pointers
const printLinkedList = function(head) {
    let result = [];
    while(head !== null) {
        let randomVal = head.random ? head.random.val : "null";
        result.push(`${head.val} (Random : ${randomVal})`);
        head = head.next;
    }
    console.log(result.join(" -> "));
};


// Optimal - TC - O(3N) and SC - O(N)
// In the optimal approach we cannot use the HashMap. We will insert the copy node in between.
// Step 1. We will copy the node and store them in between. In this step we will move the temp as temp.next.next. And when temp is null we will stop.
// Step 2. We will connect the random pointers. 
// First we place the temp to head. An then find the copy and connect the random with with copy.
// Step 3. We will connect the next pointers.
// First we will take a dummy node pointing to -1. and take res poiting to it. Then we will take temp and place it in head.
// res.next should be pointing to temp.next. and we will move res.next and for temp.next is temp.next.next to connect.Once temp is null we stop. dummy.next will be the head of the copied list.

// Solution
const copiedLinkedList = function(head) {
    // edge case
    if(head === null) return null;

    // Step 1. Insert in between
    let temp = head;
    while(temp !== null) {
        let copyNode = new Node(temp.val);
        copyNode.next = temp.next;
        temp.next = copyNode;
        temp = temp.next.next;
    }

    // Step 2. Connect the random pointers
    temp = head;
    while(temp != null) {
        copyNode = temp.next;
        copyNode.random = temp.random ? temp.random.next : null;
        temp = temp.next.next;
    }

    // Step 3. Connect the next pointers
    let dummy = new Node(0);
    let res = dummy;
    temp = head;

    while(temp !== null) {
        res.next = temp.next;
        temp.next = temp.next.next;

        res = res.next;
        temp = temp.next;
    }

    return dummy.next;
};

let head = new Node(7);
head.next = new Node(14);
head.next.next = new Node(21);
head.next.next.next = new Node(28);

// Assigning random pointers
head.random = head.next.next;
head.next.random = head;
head.next.next.random = head.next.next.next;
head.next.next.next.random = head.next;

console.log("Original Linked List with Random Pointers:");
printLinkedList(head);

// Clone the linked list
let clonedList = copiedLL(head);
let cloned = copiedLinkedList(head);

console.log("\nCloned Linked List with Random Pointers:");
printLinkedList(clonedList);
printLinkedList(cloned);