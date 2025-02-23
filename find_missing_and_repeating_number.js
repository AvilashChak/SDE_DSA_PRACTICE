// Find the missing and repeating number

// You are given a read only array of n integers from 1 to n.
// Each integer appears exactly once except A which appears twice and B which is missing.
// Return A and B.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Note that in your output A should precede B.

// Example:

// Input:[3 1 2 5 3] 
// Output:[3, 4] 
// A = 3, B = 4

// Approach 
// BF will be
// As the number are 1 to n. So probably we will start from 1 and itertate till n.
// Then I will see if a number is appearing 2 times then it will be my repeating number and if the number is appearing 0 times it is my missing number.

// Solution
// BF ---> TC - O(n^2) and SC - O(1)
const repeatedAndMissingNumber = function(arr) {
    const n = arr.length;
    let missing = -1, repeating = -1;
    for(let i = 1; i <=n; i++) {
        let count = 0;
        for(let j = 0; j < n; j++) {
            if(arr[j] === i) {
                count++;
            }
        }
        if(count === 2) repeating = i;
        else if(count === 0) missing = i;
        if(missing !== -1 && repeating !== -1) {
            break;
        }
    }

    return [missing, repeating];
};

const nums = [4,3,6,2,1,1];
const result = repeatedAndMissingNumber(nums);
console.log("Ans is: ", result);

// Better ---> TC - O(2n) and SC O(n)
// Approach - So here we will take an Hash arr and initialize the elements with 0. And also we will do n + 1 so that we can accumulate all the n elements. So when the element will be 2 it will be our repeating and when 0 it will be our missing.

const findUsingHashArr = function(arr) {
    let n = arr.length;
    let hash = new Array(n + 1).fill(0);
    for(let i = 0; i <= n; i++) {
        hash[arr[i]]++;
    }
    let missing = -1, repeating =-1;
    for(let i = 1; i <= n; i++) {
        if(hash[i] === 2) repeating = i;
        else if(hash[i] === 0) missing = i;

        if(missing !== -1 && repeating !== -1) {
            break;
        }
    }

    return {missing, repeating};
};

const hashResult = findUsingHashArr(nums);
console.log("Hash Result: ", hashResult);

// Optimal
// Approach ---> TC - O(n) and SC O(1)
// arr = [4,3,6,2,1,1]
// We will use maths operation. First we will take two variables x and y which will be our repeating and missing. Then we will sum up all the elements of the arr and also we will sum up the 1st N natural number. We get something like x - y = -4.
// Now to solve this equation we need one more equation so now we will square up. x2 - y2 = -24. x + y = 6.
// therefore x will be 1 and y will be 5. To explain use pen and paper.

const findTheNumbers = function(arr) {
    let n = arr.length;
    // The equation we need are : 
    // S - SN ---> x - y
    // S2 -S2N ---> x2 - y2
    let SN  = (n * (n + 1)) / 2;
    let S2N = ((n * (n + 1)) * (2 * n + 1)) / n;
    let S = 0, S2 = 0;
    for(let i = 0; i < n; i++) {
        S += arr[i];
        S2 += arr[i] * arr[i];
    }

    let val1 = S - SN; // x - y
    let val2 = S2 - S2N; // x2 - y2
    val2 = val2 / val1; // x + y
    let x  = (val1 + val2) / 2;
    let y = x - val1;
    
    return {x , y};

}; 

const FindTheNumbers = findTheNumbers(nums);
console.log("Find the Numbers: ", FindTheNumbers);