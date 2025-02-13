// The Celebrity Problem
// Given a square matrix mat[][] of size n x n, such that mat[i][j] = 1 means ith person knows jth person, the task is to find the celebrity. A celebrity is a person who is known to all but does not know anyone. Return the index of the celebrity, if there is no celebrity return -1.

// Note: Follow 0 based indexing and M[i][i] will always be 0.

// Examples:  

// Input: mat = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 0, 0, 0}, {0, 0, 1, 0} }
// Output: id = 2
// Explanation: The person with ID 2 does not know anyone but everyone knows him

// Input: mat = { {0, 0, 1, 0}, {0, 0, 1, 0}, {0, 1, 0, 0}, {0, 0, 1, 0} }
// Output: No celebrity
// Explanation: There is no celebrity.

// Approach
// BF - TC - O(n^2 + n) and SC - O(2n)
const bfCelebrity = function(matrix) {
    let n = matrix.length;

    let knowMe = new Array(n).fill(0);
    let iKnow = new Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(matrix[i][j] === 1) {
                knowMe[j]++; // Person j is known by person i
                iKnow[i]++;  // Person i knows someone
            }
        }
    }

    for(let i = 0; i < n; i++) {
        if(knowMe[i] === n - 1 && iKnow[i] === 0) {
            return i;
        }
    }
    return -1;
};

const mat = [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 1, 0]];
console.log("BF: ", bfCelebrity(mat));

// Optimal - TC - and SC -
// we will use two pointers top and down
const celebrity = function(matrix) {
    let n = matrix.length;
    let top = 0, down = n - 1;

    // Find the potential celebrity
    while(top < down) {
        if(matrix[top][down] === 1) {
            top++; // top knows down can't be a celebrity
        }
        else {
            down--; // down is not known by top so can't be a celebrity
        }
    }

    // Candidate found in top index now verifying
    let candidate = top;

    for(let i = 0; i < n; i++) {
        if(i === candidate) continue;

        // celebrity is known by everyone and doesn't know anyone
        if(matrix[candidate][i] === 1 || matrix[i][candidate] === 0) {
            return -1; // not a celebrity
        }
    }

    return candidate;
};

console.log("Optimal: ", celebrity(mat));