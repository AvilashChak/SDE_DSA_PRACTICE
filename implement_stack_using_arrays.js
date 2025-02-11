// Implement Stack using Arrays
// Write a program to implement a Stack using Array. Your task is to use the class as shown in the comments in the code editor and complete the functions push() and pop() to implement a stack. The push() method takes one argument, an integer 'x' to be pushed into the stack and pop() which returns an integer present at the top and popped out from the stack. If the stack is empty then return -1 from the pop() method.

// Note: The input is given in form of queries. Since there are two operations push() and pop(), there is two types of queries as described below:
// (i) 1 x   (a query of this type means  pushing 'x' into the stack)
// (ii) 2     (a query of this type means to pop an element from the stack and print the popped element)
// Input contains separated by space and as described above. 

// Examples :

// Input: 1 2 1 3 2 1 4 2 
// Output: 3, 4
// Explanation: 
// push(2)    the stack will be {2}
// push(3)    the stack will be {2 3}
// pop()      poped element will be 3,
//            the stack will be {2}
// push(4)    the stack will be {2 4}
// pop()      poped element will be 4
// Input: 2 1 4 1 5 2
// Output: -1, 5


// TC - and SC - 
// Solution
class Stack {
    constructor() {
        this.size = 1000;
        this.arr = new Array(this.size);
        this.top = -1;
    }

    push(x) {
        // edge case
        if(this.top < this.size - 1) {
            this.top++;
            this.arr[this.top] = x;
        }
        else {
            console.log("Stack overflow");
        }
    }

    pop() {
        // edge case
        if(this.top  >= 0) {
            let x = this.arr[this.top];
            this.top--;
            return x;
        }
        else {
            console.log("Stack underflow");
            return null;
        }
    }

    topIndex() {
        // edge case
        if(this.top >= 0) {
            return this.arr[this.top];
        }
        else {
            console.log("Stack is empty");
            return null;
        }
    }

    length() {
        return this.top + 1;
    }
}

// Testing the Stack implementation
const s = new Stack();
s.push(6);
s.push(3);
s.push(7);
console.log("Top of the stack before deleting any element:", s.topIndex());
console.log("Size of the stack before deleting any element:", s.length());
console.log("The element deleted is:", s.pop());
console.log("Size of the stack after deleting an element:", s.length());
console.log("Top of the stack after deleting an element:", s.topIndex());