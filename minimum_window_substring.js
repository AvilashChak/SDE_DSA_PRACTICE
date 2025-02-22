// Minimum Window Substring
// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.


// Approach
// Brute Force Approach
// Approach
// Generate all substrings of s.
// Check if each substring contains all characters of t with the correct frequency.
// Track the minimum valid substring.

// Solution
// TC - O(m^2 * n) and SC - O(1) 

const minimumWindowBF = function(s, t) {
    let minLen = Infinity;
    let result = "";
    let m = s.length;

    // Function to check if substring contains all the characters of t with correct frequency
    function containsAll(sub, t) {
        let map = {};
        for(let char of t) {
            // store the frequency of characters of t
            map[char] = (map[char] || 0) + 1; 
        }

        for(let char of sub) {
            // reduce the count of freq when found in sub
            if(map[char] !== undefined) map[char]--;
        }

        // check if all counts are 0 or -ve;
        return Object.values(map).every(count => count <= 0);
    };

    // try all substrings of s
    for(let i = 0; i < m; i++) {
        for(let j = i; j < m; j++) {
            // extract substring from i to j
            let sub = s.substring(i, j + 1); 
            // check if valid and smaller from current min
            if(containsAll(sub, t) && sub.length < minLen) {
                minLen = sub.length;
                result = sub;
            }
        }
    }

    // return the smallest valid substring
    return result;
};


// Optimal Approach (Sliding Window)
// Approach
// Use two pointers (left and right) to define a window in s.
// Expand right to include characters from t in the window.
// When all characters from t are covered, shrink left to find the smallest valid window.
// Track the minimum window and return it.

// Solution
// TC - O(m + n) and SC - O(1) 

const minimumWindow = function(s, t) {
    let m = s.length;
    let n = t.length;

    // edge case: if s is smaller in length than t, there there will be no valid window
    if(m < n) return "";
    
    // freq map to store the char counts of t
    let charCount = {};
    for(let char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Two pointers to define the sliding window
    let left = 0, right = 0;

    // Number of unique characters of t
    let required = Object.keys(charCount).length;

    // Tracks how many reqd char are present in the window
    let formed = 0;

    // stores char count in current window
    let windowCount = {};

    // track the minimum window
    let minLen = Infinity, minStart = 0;

    while(right < m) {
        // expand the window by adding s[right]
        let char = s[right];
        windowCount[char] = (windowCount[char] || 0) + 1;

        // if charCount count is valid and charCount count in window matches t increment formed
        if(charCount[char] && windowCount[char] === charCount[char]) {
            formed++;
        }

        // if all required characters are in the window, try minimizing it
        while(formed === required) {
            // update the minLen and minStart
            if(right - left + 1 < minLen) {
                minLen = right - left + 1;
                minStart = left;
            }

            // try shrinking the window by moving the left
            let leftChar = s[left];

            // remove the leftChar from the window
            windowCount[leftChar]--;

            // if we remove a necessary character decrement formed
            if(charCount[leftChar] && windowCount[leftChar] < charCount[leftChar]) {
                formed--;
            }
            // move the left pointer
            left++;
        }
        // expand the right pointer
        right++;
    }

    // return the min substring found, or empty string if no valid window exists
    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
};



const s = "ADOBECODEBANC", t = "ABC";
console.log("Using BF:", minimumWindowBF(s, t));
console.log("Using Sliding Window(optimal approach):", minimumWindow(s, t));