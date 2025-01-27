// Pow(x, n)

// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
// Example 1:
// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:
// Input: x = 2.10000, n = 3
// Output: 9.26100
// Example 3:
// Input: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2-2 = 1/22 = 1/4 = 0.25

// Approach
// Ask the interviwer can the value of n be negative?
// BF - TC - O(n) and SC - O(1).
// Looping from 1 to n. We will keep a variable ans and everytime we loop we multiply the ans with x. And if the value of x is negative which means 1/x to the power n.

// Optimal - TC - O(log base 2 n) and SC - 0(1)

// Solution
const myPow = function(x, n) {
    let ans = 1;
    let nn = n;
    if(nn < 0) nn = -1 * nn;   // here we are converting the -ve power to +ve
    while(nn > 0) {
        if(nn % 2 === 1) {
            ans = ans * x;
            nn = nn - 1;
        } else {
            x = x * x;
            nn = nn / 2;
        }
    }
    if(n < 0) ans = 1 / ans;
    return ans.toFixed(5);
};

const x = 2.00000, n = -2;
const result = myPow(x, n);
console.log("Output is: ", result);