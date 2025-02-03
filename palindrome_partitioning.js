// Palindrome Partitioning
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.
// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:
// Input: s = "a"
// Output: [["a"]]

// Approach - TC - O(n * 2^n) and SC - O(n * 2^n)
// We will use recursion. 
// Approach: The initial idea will be to make partitions to generate substring and check if the substring generated out of the partition will be a palindrome. Partitioning means we would end up generating every substring and checking for palindrome at every step. Since this is a repetitive task being done again and again, at this point we should think of recursion. The recursion continues until the entire string is exhausted. After partitioning, every palindromic substring is inserted in a data structure When the base case has reached the list of palindromes generated during that recursion call is inserted in a array.

// Solution
const partition = function(s) {
    let result = [];

    function backTrack(start, path) {
        // base case
        if(start === s.length) {
            result.push([...path]);
            return;
        }

        for(let i = start; i < s.length; i++) {
            if(isPalindrome(s, start, i)) {
                path.push(s.substring(start, i + 1));
                backTrack(i + 1, path);
                path.pop(); // backtrack
            }
        }
    };

    function isPalindrome(s, left, right) {
        while(left < right) {
            if(s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    };

    backTrack(0, []);
    return result;
};

console.log(partition("aab")); // Output: [["a","a","b"],["aa","b"]]