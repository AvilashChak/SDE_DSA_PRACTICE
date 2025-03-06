// Check if a number is prime or not
// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
// Example 2:
// Input:N =10
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.

// Brute force Approach
// TC - O(n) and SC - O(1)

const bfCheckPrime = function(n) {
    // edge case
    if(n < 2) return false; // numbers less than 2 are not prime
    let count = 0;

    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            count++;
        }
    }
    return count === 2; // a prime number has exactly 2 divisors
};

// Optimzed Approach
// TC - O(sqrt(n)) and SC - O(1)

const checkPrime = function(n) {
    // edge case
    if(n < 2) return false;
    let count = 0;

    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            count++;

            if((n / i) !== i) {
                count++;
            }
        }
    }

    return count === 2;
};

console.log("Bf ans is:", bfCheckPrime(11));
console.log("Optimzed ans is:", checkPrime(11));