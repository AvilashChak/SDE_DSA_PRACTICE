// Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Solution
// TC -  and SC - 

const isAnagram = function(s, t) {
    let m = s.length;
    let n = t.length;

    // edge case: if size of both string not equal than it cannot be an anagram
    if(m !== n) return false;

    let arr = new Array(26).fill(0);
    let l = arr.length;

    for(let i = 0; i < m; i++) {
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; // increment
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; // decrement
    }

    for(let i = 0; i < l; i++) {
        if(arr[i] !== 0) return false;
    }

    return true;
};

const s1 = "anagram", t1 = "nagaram";
const s2 = "rat", t2 = "car";

console.log(`Is Anagram? ${s1} and ${t1}:`, isAnagram(s1, t1));
console.log(`Is Anagram? ${s2} and ${t2}:`, isAnagram(s2, t2));