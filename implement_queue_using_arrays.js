// Implement Queue using Arrays
// Implement a Queue using an Array. Queries in the Queue are of the following type:
// (i) 1 x   (a query of this type means  pushing 'x' into the queue)
// (ii) 2     (a query of this type means to pop an element from the queue and print the popped element. If the queue is empty then return -1)

// We just have to implement the functions push and pop and the driver code will handle the output.

// Examples:

// Input: Queries = 1 2 1 3 2 1 4 2
// Output: 2 3
// Explanation: For query 1 2 the queue will be {2} 1 3 the queue will be {2 3} 2   poped element will be 2 the queue will be {3} 1 4 the queue will be {3 4} 2 poped element will be 3 
// Input: Queries = 1 3 2 2 1 4   
// Output: 3 -1
// Explanation: For query 1 3 the queue will be {3} 2 poped element will be 3 the queue will be empty 2 there is no element in the queue and hence -1 1 4 the queue will be {4}. 
// Input: Queries = 1 3 2 2 1 3   
// Output: 3 -1
// Explanation: For query 1 3 the queue will be {3} 2 poped element will be 3 the queue will be empty 2 there is no element in the queue and hence -1 1 3 the queue will be {3} and hence -1 1 3 the queue will be {3}.


// TC - O(1) and SC - O(1)
// Solution
class Queue {
    constructor() {
        this.maxSize = 6;
        this.arr = new Array(this.maxSize);
        this.start = -1;
        this.end = -1;
        this.currSize = 0;
    }

    push(x) {
        // edge cases
        if(this.currSize === this.maxSize) {
            console.log("Queue is full\nExiting...");
            return;
        }
        if(this.end === -1) {
            this.start = 0;
            this.end = 0;
        }
        else {
            this.end = (this.end + 1) % this.maxSize;
        }

        this.arr[this.end] = x;
        console.log("The element pushed is " + x);
        this.currSize++;
    }
    
    pop() {
        // edge cases
        if(this.start === -1) {
            console.log("Queue Empty\nExiting...");
            return -1;
        }
        let popped = this.arr[this.start];
        if(this.currSize === 1) {
            this.start = -1;
            this.end = -1;
        }
        else {
            this.start = (this.start + 1) % this.maxSize;
        }
        this.currSize--;
        return popped;
    }

    topIndex() {
        if(this.start === -1) {
            console.log("Queue is empty");
            return -1;
        }
        return this.arr[this.start];
    }

    length() {
        return this.currSize;
    }

}

// Test Cases
const q = new Queue();
q.push(4);
q.push(14);
q.push(24);
q.push(34);
console.log("The peek of the queue before deleting any element " + q.topIndex());
console.log("The size of the queue before deletion " + q.length());
console.log("The first element to be deleted " + q.pop());
console.log("The peek of the queue after deleting an element " + q.topIndex());
console.log("The size of the queue after deleting an element " + q.length());