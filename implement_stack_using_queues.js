// Implement Stack using Queues
// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.
 

// Example 1:

// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

// TC - O(N) and SC - O(N)
// Solution
class Stack {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
        let n = this.q.length;
        for(let i = 1; i < n; i++) {
            this.q.push(this.q.shift());
        }
    }

    pop() {
        return this.q.shift();
    }

    top() {
        return this.q.length > 0 ? this.q[0] : undefined;
    }

    size() {
        return this.q.length;
    }
}


// Testing the stack
const s = new Stack();
s.push(3);
s.push(2);
s.push(4);
s.push(1);
console.log("Top of the stack:", s.top());
console.log("Size of the stack before removing element:", s.size());
console.log("The deleted element is:", s.pop());
console.log("Top of the stack after removing element:", s.top());
console.log("Size of the stack after removing element:", s.size());