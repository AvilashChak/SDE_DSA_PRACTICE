// Find the starting point of the Loop of LinkedList
// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
// Do not modify the linked list.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.

// Approach
// BF - TC - O(N) and SC - O(N)
// In this approach we will create a Hashset to detect the starting point of the loop. And we will hash over each node and store it in the hashset.

// Solution

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const isCycle = function(head) {
    let set = new Set();

    let temp = head;

    while(temp !== null) {
        if(set.has(temp)) {
            return temp;
        }

        set.add(temp);
        temp = temp.next;
    }

    return null;
};

const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;

// Set the head of the linked list
const head = node1;

// Detect the loop in the linked list
const loopStartNode = isCycle(head);

if (loopStartNode) {
  console.log("Loop detected. Starting node of the loop is: " + loopStartNode.val);
} else {
  console.log("No loop detected in the linked list.");
}

// Optimal - TC - O(N) and SC - O(1)
// In this approach we will use Slow and Fast pointer method. And it will be broken down in two steps
// 1. To find out the collision point. To find out we will take s and f and s will move 1 step and f will move 2 steps. Both the pointers will start from head and will move simultaneously.
// 2. Find starting point in the linked list cycle. We will take one more pointer and namely entry/fast and will be start in head. Then we will move entry/fast pointer and slow pointer by 1 step simultaneously till they do not collide. And after the loop return

const detectCycle = function(head) {
    let slow = head, fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) {
            fast = head;
    
            while(fast !== slow) {
                slow = slow.next;
                fast = fast.next;
            }
    
            return fast;
        }
    }

    return null;
};

const startNode = detectCycle(head);

if (startNode) {
  console.log("Loop detected. Starting node of the loop is (optimized): " + startNode.val);
} else {
  console.log("No loop detected in the linked list.");
}