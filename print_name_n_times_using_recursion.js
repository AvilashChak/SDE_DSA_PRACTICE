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

// Solution - Optimal - linearly 1 to N
// TC - O(N) and SC - O(N)

const printGfg2 = function(n) {
    print2(1, n);
};

function print2(count, n) {
    if(count > n) {
        return;
    }
    process.stdout.write(`${count}:GFG `);
    print2(count + 1, n);
};

// Solution - Optimal - linearly to N to 1
// TC - O(N) and SC - O(N)

const printGfg3 = function(n) {
    print3(n, 1);
};

function print3(count, n) {
    if(count < 1) {
        return;
    }
    process.stdout.write(`${count}:GFG `);
    print3(count - 1, n);
};

// Solution - Optimal - print 1 to N using Backtrack
// TC - O(N) and SC - O(N)

const printGfg4 = function(n) {
    print4(n, n);
};

function print4(i, n) {
    if(i < 1) return;

    print4(i - 1, n);
    process.stdout.write(`${i}:GFG `);
};

// Solution - Optimal - print N to 1 using Backtrack
// TC - O(N) and SC - O(N)

const printGfg5 = function(n) {
    print5(1, n);
};

function print5(i, n) {
    if(i > n) return;

    print5(i + 1, n);
    process.stdout.write(`${i}:GFG `);
};


console.log("BF:")
printGfg(5);
console.log();
printGfg1(5);
console.log();
console.log("\nOptimal: 1 to N");
printGfg2(5);
console.log();
console.log("\nOptimal: N to 1");
printGfg3(5);
console.log();
console.log("\nOptimal: 1 to N using Backtrack");
printGfg4(5);
console.log();
console.log("\nOptimal: N to 1 using Backtrack");
printGfg5(5);