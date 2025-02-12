// Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

// Example 1:

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

// Explanation
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); // return -3
// minStack.pop();
// minStack.top();    // return 0
// minStack.getMin(); // return -2


// Approach - TC - O(1) and SC - O(2N)
// The first element in the pair will store the value and the second element will store the minimum element till now.
// When the first push operation comes in we will push the value and store it as minimum itself in the pair. 
// In the second push operation, we will check if the top element’s minimum is less than the new value. If it is then we will push the value with minimum as the previous top’s minimum. To get the getMin element to take the top’s second element.

// Solution
class Pair {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class MinStack {
    constructor() {
        this.st = [];
    }

    push(x) {
        let min;
        if(this.st.length === 0) {
            min = x;
        }
        else {
            min = Math.min(x, this.st[this.st.length - 1].y);
        }
        this.st.push(new Pair(x, min));
    }

    pop() {
        if(this.st.length > 0) {
            this.st.pop();
        }
    }

    top() {
        return this.st.length > 0 ? this.st[this.st.length - 1].x : null;
    }

    getMin() {
        return this.st.length > 0 ? this.st[this.st.length - 1].y : null;
    }
}


// Optimal - TC - O(1) and SC - O(N)
// Let’s take a variable that stores the minimum number. So whenever a push operation comes in just take that number put it in the stack and update the variable to the number.

// Push operation:

// Now if there is a push operation just check whether that number is less than the min number. If it is smaller than min we will push a modified value which is a push(2 * Val - min) into the stack and will update min to the value of the original number. If it’s not then we will just push it as it is.

// getMin() operation:

// We will just return the value of min.

// Top operation:

// While returning the top value we know that it is a modified value. We will check if the top value is lesser than min, If it is then we will return the min as the top value.

// Pop operation:

// While making pop we will check if the top value is lesser than min, If it is then we must update our min to its previous value. In order to do that min = (2 * min) - (modified value) and we will pop the element.

class Stack {
    constructor() {
        this.st = [];
        this.mini = Number.MAX_SAFE_INTEGER;
    }

    push(value) {
        if(this.st.length === 0) {
            this.mini = value;
            this.st.push(value);
        }
        else {
            if(value < this.mini) {
                this.st.push(2 * value - this.mini);
                this.mini = value;
            }
            else {
                this.st.push(value);
            }
        } 
    }

    pop() {
        if(this.st.length === 0) return;

        let val = this.st.pop();
        if(val < this.mini) {
            this.mini = 2 * this.mini - val;
        }
    }

    top() {
        if(this.st.length === 0) return null;

        let val = this.st[this.st.length - 1];
        return val < this.mini ? this.mini : val;
    }

    getMin() {
        return this.mini;
    }
}


// Example usage:
const minStack = new MinStack();
minStack.push(5);
minStack.push(2);
minStack.push(8);
console.log(minStack.getMin()); // Output: 2
minStack.pop();
console.log(minStack.top()); // Output: 2
console.log(minStack.getMin()); // Output: 2

const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(8);
console.log(stack.getMin()); // Output: 2
stack.pop();
console.log(stack.top()); // Output: 2
console.log(stack.getMin()); // Output: 2