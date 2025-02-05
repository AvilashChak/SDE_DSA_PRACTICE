// The N-th root of an integer
// Problem statement
// You are given two positive integers 'n' and 'm'. You have to return the 'nth' root of 'm', i.e. 'm(1/n)'. If the 'nth root is not an integer, return -1.
// Note:
// 'nth' root of an integer 'm' is a number, which, when raised to the power 'n', gives 'm' as a result.
// Example:
// Input: ‘n’ = 3, ‘m’ = 27
// Output: 3
// Explanation: 
// 3rd Root of 27 is 3, as (3)^3 equals 27.

// Optimal Approach(Using Binary Search): 
// We are going to use the Binary Search algorithm to optimize the approach.

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// Now, we are not given any sorted array on which we can apply binary search. But, if we observe closely, we can notice that our answer space i.e. [1, n] is sorted. So, we will apply binary search on the answer space.

// Edge case: How to eliminate the halves:

// Our first approach should be the following:

// After placing low at 1 and high m, we will calculate the value of ‘mid’.
// Now, based on the value of ‘mid’ raised to the power n, we will check if ‘mid’ can be our answer, and based on this value we will also eliminate the halves. If the value is smaller than m, we will eliminate the left half and if greater we will eliminate the right half.
// But, if the given numbers m and n are big enough, we cannot store the value midn in a variable. So to resolve this problem, we will implement a function like the following:

// func(n, m, mid):

// We will first declare a variable ‘ans’ to store the value midn.
// Now, we will run a loop for n times to multiply the ‘mid’ n times with ‘ans’. 
// Inside the loop, if at any point ‘ans’ becomes greater than m, we will return 2.
// Once the loop is completed, if the ‘ans’ is equal to m, we will return 1.
// If the value is smaller, we will return 0.
// Now, based on the output of the above function, we will check if ‘mid’ is our possible answer or we will eliminate the halves. Thus we can avoid the integer overflow case.

// Algorithm:

// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to 1 and the high will point to m.
// Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Eliminate the halves accordingly: 
// If func(n, m, mid) == 1: On satisfying this condition, we can conclude that the number ‘mid’ is our answer. So, we will return to ‘mid’.
// If func(n, m, mid) == 0: On satisfying this condition, we can conclude that the number ‘mid’ is smaller than our answer. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
// If func(n, m, mid) == 2: the value mid is larger than the number we want. This means the numbers greater than ‘mid’ will not be our answers and the right half of ‘mid’ consists of such numbers. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
// Finally,  if we are outside the loop, this means no answer exists. So, we will return -1.
// The steps from 2-3 will be inside a loop and the loop will continue until low crosses high.


// TC - O(log N) and SC - O(1)
const multiply = function(mid, n, m) {
    let ans = 1;
    for(let i = 0; i < n; i++) {
        ans = ans * mid;
        if(ans > m) {
            return 2; // mid^n exceeds m
        }
    }
    if(ans === m) {
        return 1; // mid^n exactly equals m
    }
    else {
        return 0; // mid^n is smaller than m
    }
};

const nthRoot = function(n, m) {
    let low = 0, high = m;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let result = multiply(mid, n, m);

        if(result === 1) return mid; // Found the exact root
        else if(result === 0) low = low + 1; // Increase lower bound
        else high = mid - 1; // Decrease upper bound
    }
    return -1; // No integer root found
};

console.log(nthRoot(3, 27)); // Output: 3
console.log(nthRoot(2, 16)); // Output: 4
console.log(nthRoot(3, 20)); // Output: -1