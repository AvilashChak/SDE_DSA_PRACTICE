// Palindrome Number
// Given an integer x, return true if x is a palindrome and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Optimal Approach
// Algorithm / Intuition
// To check if a number is a palindrome, we can use the algorithm created in Extract Digits as now we extract the digits of the number to create a reversed number.

// We then compare the reversed number with the original number. If they are equal, the original number is a palindrome. If they are not equal the original number is not a palindrome.

// Algorithm
// Step 1:Initialise an integer revNum to 0. This variable will store the reverse of the number.

// Step 2: Make a duplicate of the original number and store it in an integer dup for later comparison.

// Step 3: Run a while loop with the condition n>0 to reverse the number and at each iteration:

// Get the last digit of n by using the modulus operator % with 10 and store it in a temporary variable ld.
// Update the revNum by multiplying it by 10 and adding the last digit ld.
// Update n by integer division with 10 effectively removing the last digit.
// Step 4: After the loop, check if the original number dup is equal to the reversed number revNum.

// If they are equal, return true indicating the number is a palindrome.
// If they are not equal, return false indicating that the number is not a palindrome.

// Solution
// TC - and SC - 

const isPalindrome = function(n) {
    // edge case: -ve numbers can never be palindrome
    if(n < 0) return false;

    // Initialize a reverse variable to store the reverse of the number
    let reverseNum = 0;
    
    // create a duplicate variable of the original number
    let duplicate = n;

    // Iterate till n becomes 0
    while(n > 0) {
        // extarct the last digit from the number
        let ld = n % 10;

        // append the last digit in the reverse number
        reverseNum = (reverseNum * 10) + ld;

        // take out the last digit from the original number
        n = Math.floor(n / 10);
    }

    // return the result
    if(duplicate === reverseNum) return true;
    else return false;
};

const x1 = 121;
const x2 = -121;
const x3 = 10;

console.log(`Is Palindrome? ${x1}`, isPalindrome(x1));
console.log();
console.log(`Is Palindrome? ${x2}`, isPalindrome(x2));
console.log();
console.log(`Is Palindrome? ${x3}`, isPalindrome(x3));