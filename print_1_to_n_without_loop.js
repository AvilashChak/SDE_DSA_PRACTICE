// Print 1 To N Without Loop
// Print numbers from 1 to n without the help of loops. You only need to complete the function printNos() that takes n as a parameter and prints the number from 1 to n recursively.

// Note: Don't print any newline, it will be added by the driver code.

// Examples:

// Input: n = 10
// Output: 1 2 3 4 5 6 7 8 9 10
// Input: n = 5
// Output: 1 2 3 4 5
// Input: n = 1
// Output: 1

// Approach - Recursion

const printNos = function(n) {
    let result = []; // store numbers 
    helper(1, n, result);
    console.log(result.join(" ")); // to print in single line after recursion
};

const helper = function(count, n, result) {
    // base case
    if(count > n) return;

    result.push(count); // store number in an arr
    helper(count + 1, n, result); // recursive call with increment count
};

printNos(10);