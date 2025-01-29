// Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Approach
// BF - TC - O(n3) and SC - O(n)
// We can use two loops to generate all possible substrings and check for duplicates within each substring using basic logic using indexof method or manually checking if all character has appeared before. 

// Solution 
const bf = function(s) {
    let maxLen = 0
    let n = s.length;
    for(let i = 0; i < n; i++) {
        let currentSubstring = "";

        for(let j = i; j < n; j++) {
            let currentChar = s[j];

            // if the char already exists in the current substring break the loop
            if(currentSubstring.indexOf(currentChar) !== -1) {
                break;
            }

            currentSubstring += currentChar;

            maxLen = Math.max(maxLen, currentSubstring.length);
        }
    }

    return maxLen;
};

console.log(bf("abcabcbb"));

// Optimal - TC- O(N) and SC- O(N)
// In optimal appraoch we will use Hash map. and keep two pointers l and r. and take a len variable and intially our len will be initialized as 1. Now we will move the r and store in the hashmap the char and the index. if we meet same char we will check in the map and move the l if it's in the range l to r and then update the new index of that char. l will move i + 1 of the same char. and when we in meet repeating char but that is not in the l to r range we will not move the l. but we will update the index of the char. 

// Solution
const optimal = function(s) {
    let maxLen = 0;
    let left = 0, right = 0;
    let map = {};

    while(right < s.length) {
        if(map[s[right]] !== undefined && map[s[right]] >= left) {
            left = Math.max(map[s[right]] + 1, left);
        }

        map[s[right]] = right;
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
    }

    return maxLen;
};

console.log(optimal("abcabcbb"));