// LCM and GCD
// Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function inputs two integers a and b and returns a list containing their LCM and GCD.

// Examples:

// Input: a = 5 , b = 10
// Output: [10, 5]
// Explanation: LCM of 5 and 10 is 10, while their GCD is 5.
// Input: a = 14 , b = 8
// Output: [56, 2]
// Explanation: LCM of 14 and 8 is 56, while their GCD is 2.
// Input: a = 1 , b = 1
// Output: [1, 1]
// Explanation: LCM of 1 and 1 is 1, while their GCD is 1.
// Expected Time Complexity: O(log(min(a, b))
// Expected Auxiliary Space: O(1)

// BF approach
// TC - O(min(a, b)) and SC - O(1)

const bfLcmAndGcd = function(a, b) {
    let gcd = 0;
    let lcm = 0;
    for(let i = Math.min(a, b); i >= 0; i--) {
        if(a % i === 0 && b % i === 0) {
            gcd = i;
            break;
        }
    }
    lcm = (a * b) / gcd;
    return {lcm, gcd}; 
};

// Optimized approach - Euclidean Algorithm 
// TC - O(log min(a, b))  and SC - O(1)

const lcmAndGcd = function(a, b) {
    let A = a, B = b;

    while(a > 0 && b > 0) {
        if(a > b) a = a % 10;
        else b = b % 10;

    }

    let gcd = 0, lcm = 0;

    if(a === 0) {
        gcd = b;
    }
    else {
        gcd = a;
    }

    lcm = A * B / gcd;

    return [lcm, gcd];
};

console.log("BF ans is:", bfLcmAndGcd(5, 10));
console.log("Optimized Euclidean Algorithm ans is:", lcmAndGcd(5, 10));