// Subsets II
// Given an integer array nums that may contain duplicates, return all possible 
// subsets
//  (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.
// Example 1:
// Input: nums = [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Approach
// BF - TC - O(2 pow n) and SC - O(2 pow n)
// At every index, we make a decision whether to pick or not pick the element at that index. This will help us in generating all possible combinations but does not take care of the duplicates. Hence we will use a set to store all the combinations that will discard the duplicates.

const sub = function(arr) {
    // sort the array to handle duplicates easily
    arr.sort((a, b) => a - b);

    let result = new Set();

    function findSubSets(start, currentSubSet) {
        // create a key from the current subset to avoid duplicates in the set
        result.add(JSON.stringify(currentSubSet));

        for(let i = start; i < arr.length; i++) {
            // skip duplicates
            if(i > start && arr[i] === arr[i - 1]) continue;

            currentSubSet.push(arr[i]);
            findSubSets(i + 1, currentSubSet);
            currentSubSet.pop() // backtrack
        }
    };

    // start the recursion/ backtracking process
    findSubSets(0, []);

    // convert the JSON strings back to array
    return Array.from(result).map((item) => JSON.parse(item));
};

console.log("BF: ", sub([1,2,2]));

// Optimal - TC - O(2^n) and SC - O(2^n)
// In this approach first we will use recursion.
// 1. we will first sort the arr for handling the duplicates easily.
// 2. we will take a empty result []. and return in the end.
// 3. we will write the recursive func with parameter start and ds
// 4. we will push the curr subset to the result arr
// 5. we will start the loop from start till n.
// 6. check the condition if i > start && i === i -1 and do continue to skip duplicates
// 6. in curr subset we will push the i then call the recursive func by i + 1 and ds and last will do backtrack.
// after the loop we will call the recursive function (0, []). and return result.

const subSets = function(arr) {
    // for storing the subsets
    arr.sort((a, b) => a- b);
    let result = [];

    function findSubSets(start, currentSubSet) {
        result.push([...currentSubSet]);

        for(let i = start; i < arr.length; i++) {
            // edge case and avoid the duplicates
            if(i > start && arr[i] === arr[i -1]) continue;

            currentSubSet.push(arr[i]);
            findSubSets(i + 1, currentSubSet);
            currentSubSet.pop(); // backtracking
        }
    };

    findSubSets(0, []);
    return result;
};

console.log("Optimal: ", subSets([1,2,2]));