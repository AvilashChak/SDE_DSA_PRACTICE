// Longest Common Subsequence
// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.

// Approach
// Memoization Approach
// Algorithm / Intuition
// We are given two strings, S1, and S2 (suppose of same length n), the simplest approach will be to generate all the subsequences and store them, then manually find out the longest common subsequence.

// This naive approach will give us the correct answer but to generate all the subsequences, we will require exponential ( 2n ) time. Therefore we will try some other approaches.

// Using Dynamic Programming

// We would want to try something that can give us the longest common subsequence on the way of generating all subsequences. To generate all subsequences we will use recursion and in the recursive logic we will figure out a way to solve this problem.

// Steps to form the recursive solution: 

// We will first form the recursive solution by the three points mentioned in Dynamic Programming Introduction. 

// Step 1: Express the problem in terms of indexes.

// We are given two strings S1 and S2:

// A single variable can’t express both the strings at the same time, so we will use two variables ind1 and ind2. They mean that we are considering string S1 from index 0 ind1 and string S2 from index 0 to S2. So our recursive function will look like this:

// Step 2: Explore all possibilities at a given index

// Intuition for Recursive Logic

// In the function f(ind1,ind2), ind1 and ind2 are representing two characters from strings S1 and S2 respectively.  For example: 

// Now, there can be two possibilities,

// if(S1[ind1] == S2[ind2]) as in the figure below. In this case this common element will represent a unit length common subsequence, so we can say that we have found one character and we can shrink both the strings by 1 to find the longest common subsequence in the remaining pair of strings.

// if(S1[ind1] != S2[ind2]) as in the figure given below. In this case we know that the current characters represented by ind1 and ind 2 will be different. So, we need to compare the ind1 character with shrunk S2 and ind2 with shrunk S1. But how do we make this comparison ?  If we make a single recursive call as we did above to f(ind1-1,ind2-1), we may lose some characters of the subsequence. Therefore we make two recursive calls: one to f(ind1,ind2-1) (shrinking only S1) and one to f(ind1-1,ind2) (shrinking only S2). Then when we return max of both the calls.

// Step 3:  Return the maximum of the choices

// In the first case, we have only one choice but in the second case we have two choices, as we have to return the longest common subsequences, we will return the maximum of both the choices in the second case.

// Base Case: 

// For a case like this:

// As S1[ind1] != S2[ind2]

// We will make a call to f(0-1,1), i.e f(-1,1) but a negative index simply means that there are no more indexes to be explored, so we simply return 0. Same is the case when S1[ind1]==S2[ind2]

// If (ind1<0 || ind2<0) return 0.
// The final pseudocode after steps 1, 2, and 3:

// Recursive Tree

// We will dry run this example: 

// Steps to memoize a recursive solution:

// As we see there are overlapping subproblems in the recursive tree, we can memorize the recursive code to reduce the time complexity.

// Create a dp array of size [N][M] where N and M are lengths of S1 and S2 respectively. It will store all the possible different states that our recursive function will take.
// We initialize the dp array to -1.
// Whenever we want to find the answer of particular parameters (say f(ind1,ind2)), we first check whether the answer is already calculated using the dp array(i.e dp[ind][ind2]!= -1 ). If yes, simply return the value from the dp array.
// If not, then we are finding the answer for the given value for the first time, we will use the recursive relation as usual but before returning from the function, we will set dp[ind][ind2] to the solution we get.

// Solution
// TC - O(N * M) and SC - O(N + M) auxilary space for recursion stack + O(N * M) for 2D DP arr

const memoiSolve = function(i, j, s1, s2, dp) {
    // base case: if either string has reached the end
    if(i < 0 || j < 0) return 0;

    // if the result for this combination is already calculated return it
    if(dp[i][j] !== -1) return dp[i][j];

    // Case 1: If the character match, increase the LCS length and move the indices
    if(s1[i] === s2[j]) {
        return dp[i][j] = 1 + memoiSolve(i - 1, j - 1, s1, s2, dp);
    }
    else {
        // Case 2: If the character not match, consider two options: move one index in either string
        return dp[i][j] = Math.max(memoiSolve(i - 1, j, s1, s2, dp), memoiSolve(i, j - 1, s1, s2, dp));
    }
};

const memoiLcs = function(s1, s2) {
    let n = s1.length;
    let m = s2.length;

    // create a 2D DP arr to store the result and fill with -1
    const dp = Array.from({ length: n }, () => Array(m).fill(-1));

    // call the helper function to return LCS
    return memoiSolve(n -1, m - 1, s1, s2, dp);
};




// Tabulation Approach
// Algorithm / Intuition
// To convert the memoization approach to a tabulation one, create a dp array with the same size as done in memoization. 

// Initialization: Shifting of indexes
// In the recursive logic, we set the base case to if(ind1<0 || ind2<0) but we can’t set the dp array’s index to -1. Therefore a hack for this issue is to shift every index by 1 towards the right.


// Therefore, now the base case will be if(ind1==0 || ind2==0).
// Similarly, we will implement the recursive code by keeping in mind the shifting of indexes, therefore S1[ind1] will be converted to S1[ind1-1]. Same for others.
// At last we will print dp[N][M] as our answer.

// Solution
// TC - O(N * M) and SC - O(N * M)

const tabulationLcs = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;

    // Create a 2D DP arr of size string.length + 1 and fill -1
    let dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1));

    // base cases: for empty substrings
    for(let i = 0; i <=n; i++) {
        dp[i][0] = 0;
    }

    for(let j = 0; j <= m; j++) {
        dp[0][j] = 0;
    }

    // Populating the dp arr using nested loops
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            if(s1[i - 1] === s2[j - 1]) {
                // match
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                // not match
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[n][m];
};




// Space Optimization Approach
// Algorithm / Intuition
// If we closely we are using two rows: dp[ind1-1][ ], dp[ind][ ],

// So we are not required to contain an entire array, we can simply have two rows prev and cur where prev corresponds to dp[ind-1] and cur to dp[ind].

// After declaring prev and cur, replace dp[ind-1] to prev and dp[ind] with cur and after the inner loop executes, we will set prev = cur, so that the cur row can serve as prev for the next index.

// Solution
// TC - O(N * M) and SC - O(M)


const lcs = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;

    // Create two variables curr and prev of 1D arr of m + 1 size and fill 0
    let curr = new Array(m + 1).fill(0);
    let prev = new Array(m + 1).fill(0);

    // Populate the cur arr using nested loops
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= m; j++) {
            // if it's a match
            if(text1[i] === text2[j]) {
                curr[j] = 1 + prev[j - 1];
            } 
            else {
                // not a match
                curr[j] = Math.max(prev[j], curr[i - 1]);
            }
        }
        // Move curr to prev for the next iteration
        [prev, curr] = [curr, prev];
    }
    return prev[m];
};




const text1 = "abcde", text2 = "ace";
console.log("Using Memoization:", memoiLcs(text1, text2));
console.log();
console.log("Using Tabulation:", memoiLcs(text1, text2));
console.log();
console.log("Using Space optimization:", lcs(text1, text2));