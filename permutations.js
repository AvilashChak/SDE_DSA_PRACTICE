// Print all permutations of a string/array
// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
// Example 1:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// Example 2:
// Input: nums = [0,1]
// Output: [[0,1],[1,0]]
// Example 3:
// Input: nums = [1]
// Output: [[1]]

// Approach - TC - and SC -
// Approach: Using backtracking to solve this. We have given the nums array, so we will declare an ans vector of vector that will store all the permutations. Call a recursive function that starts with zero, nums array, and ans vector.Declare a map and initialize it to zero and call the recursive function
// Base condition: Whenever the index reaches the end take the nums array and put it in ans vector and return.
// Recursion: Go from index to n - 1 and swap once the swap has been done call recursion for the next state. After coming back from the recursion make sure you re-swap it because, for the next element, the swap will not take place.

// Solution
const permute = function(arr) {
    let result = [];

    function backTrack(index) { // index = 0
        // base case
        if(index === arr.length) {
            result.push([...arr]);
            return;
        }

        // now we will loop over the arr and swap the elements with the start/index element
        for(let i = index; i < arr.length; i++) {
            // swap the elements
            [arr[index], arr[i]] = [arr[i], arr[index]];
            // call the recursive function, recurse to the next index
            backTrack(index + 1);
            // Backtracking by swaping the elements back
            [arr[index], arr[i]] = [arr[i], arr[index]];
        }
    };

    // Start Backtracking from index 0
    backTrack(0);
    return result;
};

console.log("Ans is:", permute([1,2,3]));