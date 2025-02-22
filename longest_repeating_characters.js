// Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Approach

// Brute Force

// Iterate through all possible starting points i of substrings.
// Extend the substring to j, dynamically updating the frequency of characters.
// Track the most frequent character count in the current substring.
// If the remaining characters (window size - maxFreq) are ≤ k, update the maximum length.

// Solution
// TC - O(n^2) and SC - O(1)

const charReplacementBf = function(s, k) {
    let maxLen = 0;
    let n = s.length;

    // Loop over every possible starting index
    for(let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);
        let maxFreq = 0;

        // extend the window from i to j
        for(let j = i; j < n; j++) {
            let index = s[j].charCodeAt(0) - 'A'.charCodeAt(0);
            freq[index]++;

            // update the most frequent char count
            maxFreq = Math.max(maxFreq, freq[index]);

            // current window size
            let len = j - i + 1;

            // number of replacement needed
            let reqd = len - maxFreq;

            // If we can replace within k changes, update maxLen
            if(reqd <= k) {
                maxLen = Math.max(maxLen, len);
            }
        }
    }

    return maxLen;
};


// Optimal Solution (Sliding Window - O(N))

// Approach
// Use two pointers (left and right) for a sliding window.
// Maintain a frequency array for characters in the current window.
// Keep track of the most frequent character count.
// If the window contains more than k replaceable characters, move left forward.
// Keep updating the maximum window size.

// Solution
// TC - O(n) and SC - O(1)

const charReplacement = function(s, k) {
    let n = s.length;
    let left = 0, right = 0;
    let maxLen = 0;
    let maxFreq  = 0;
    let freq = new Array(26).fill(0);

    // Expand the window moving the right pointer
    while(right < n) {
        let index = s[right].charCodeAt(0) - 'A'.charCodeAt(0);
        freq[index]++;

        // update maxFreq with the most repeating char
        maxFreq = Math.max(maxFreq, freq[index]);

        // size of the current window
        let len = right - left + 1;

        // calculate the replacement requireed
        let reqd = len - maxFreq;

        // if the replacement exceeds k, shrink from the left
        if(reqd > k) {
            let leftIndex = s[left].charCodeAt(0) - 'A'.charCodeAt(0);
            // remove the leftmost char
            freq[leftIndex]--;
            // move ahead by shrinking
            left++;
        }

        // update the maxLen found so far
        maxLen = Math.max(maxLen, right - left + 1);
        // expand the window
        right++;
    }

    return maxLen;
};




const s = "ABAB", k = 2;
console.log("By brute force", charReplacementBf(s, k));
console.log("By optimal(sliding window) approach", charReplacementBf(s, k));