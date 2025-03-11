// Print GFG n times without the loop.

// Example:

// Input:
// 5
// Output:
// GFG GFG GFG GFG GFG
// Your Task:
// This is a function problem. You only need to complete the function printGfg() that takes N as parameter and prints N times GFG recursively. Don't print newline, it will be added by the driver code.

// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N) (Recursive).

// Solution - BF
// TC - O(N) and SC - O(2N)

const printGfg = function(n) {
    let result = [];
    print("", n, result);
    console.log(result.join(" "));
};

function print(s, n, result) {
    s = "GFG";
    if(n === 0) return;

    result.push(s);
    print(s, n - 1, result);
};

// Solution - Optimal
// TC - O(N) and SC - O(N)

const printGfg1 = function(n) {
    console.log("Optimal:");
    print1(n);
};

function print1(n) {
    if(n === 0) return;
    process.stdout.write("GFG ");
    print1(n - 1);
};


console.log("BF:")
printGfg(5);
console.log();
printGfg1(5);