// Check if a string is palindrome or not
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Solution
// TC - O(n) and SC - O(n)

const isPalindrome = function(s) {
    // convert the string to lowercase and alphanumeric
    let cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};

// Solution
// Approach - Recursion
// TC - O(n) and SC - O(n)

const isPalindromeRecursion = function(s) {
    let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    return recursion(0, s1);
};

const recursion = function(i, s) {
    let n = s.length;
    // base case
    if(i >= n / 2) return true;

    if(s[i] !== s[n - i - 1]) return false;

    return recursion(i + 1, s);
};

// Solution
// Approach - Using two pointer techniques
// TC - O(n) and SC - O(1)

const palindrome = function(s) {
    let s1 = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let start = 0, end = s1.length - 1;

    while(start < end) {
        if(s1[start] !== s1[end]) {
            return false;

        }
        start++;
        end--;
    }
    return true;
};

const s = "A man, a plan, a canal: Panama";
console.log("Is Palindrome:", isPalindrome(s));
console.log("Is Palindrome using recursion:", isPalindromeRecursion(s));
console.log("Is Palindrome using two pointer techniques:", palindrome(s));