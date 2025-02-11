// Check for balanced parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Approach
// To solve this problem we will use stack and inside that we will preserve the opening parenthesis. And check with the closing. Edge case when stack is empty then this is not balanced.
// TC - O(N) and SC - O(N)
const isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
        else {
            // edge case
            if(stack.length === 0) return false;
            let top = stack.pop();
            if((s[i] === ')' && top === '(') || 
            (s[i] === '}' && top === '{') ||
            (s[i] === ']' && top === '[')) {
                continue;
            }
            else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const s = "()[]{}";
console.log("Ans:", isValid(s));