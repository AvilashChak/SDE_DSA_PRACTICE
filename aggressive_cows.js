// Aggressive Cows
// You are given an array 'arr' consisting of 'n' integers which denote the position of a stall.
// You are also given an integer 'k' which denotes the number of aggressive cows.
// You are given the task of assigning stalls to 'k' cows such that the minimum distance between any two of them is the maximum possible.
// Print the maximum possible minimum distance.
// Example:
// Input: 'n' = 3, 'k' = 2 and 'arr' = {1, 2, 3}
// Output: 2
// Explanation: The maximum possible minimum distance will be 2 when 2 cows are placed at positions {1, 3}. Here distance between cows is 2.
// Detailed explanation ( Input/output format, Notes, Images )
// Sample Input 1 :
// 6 4
// 0 3 4 7 10 9
// Sample Output 1 :
// 3
// Explanation to Sample Input 1 :
// The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here distance between cows are 3, 4 and 3 respectively.
// Sample Input 2 :
// 5 2
// 4 2 1 3 6
// Sample Output 2 :
// 5

// Approach
// BF - TC - O(NlogN) + O(N *(max(stalls[])-min(stalls[]))) and SC - O(1)
// In this approach we will use linear approach.
const canWePlace = function(stalls, dist, cows) {
    let n = stalls.length;
    let cntCows = 1; // no of cows placed
    let last = stalls[0]; // position of the last placed cow

    for(let i = 0; i < n; i++) {
        if(stalls[i] - last >= dist) {
            cntCows++; // place next cow
            last = stalls[i]; // update the last location
        }
        if(cntCows >= cows) {
            return true;
        }
    }

    return false;
};

const aggCows = function(stalls, k) {
    let n = stalls.length;
    stalls.sort((a, b) => a - b); // sort the arrays

    const limit = stalls[n - 1] - stalls[0]; // max - min
    for(let i = 1; i <= limit; i++) {
        if(canWePlace(stalls, i, k) === false) {
            return i - 1;
        }
    }

    return limit;
};

var stalls = [0, 3, 4, 7, 10, 9];
var k = 4;
var ans = aggCows(stalls, k);
console.log("The maximum possible minimum distance is:", ans);

// Approach 
// Optimal - TC - O(N log N + O(N * log(max - min))) and SC - O(1)
// We will use BS instead of linear search.
const aggressiveCows = function(stalls, k) {
    const n = stalls.length;
    stalls.sort((a, b) => a - b);
    let low = 1, high = stalls[n - 1] - stalls[0];
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(canWePlace(stalls, mid, k)) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return high;
};

var ansOptimal = aggCows(stalls, k);
console.log("The maximum possible minimum distance is (optimal):", ansOptimal);