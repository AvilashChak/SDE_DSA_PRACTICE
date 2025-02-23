// Merge Overlapping Subintervals

// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Approach 
// BF solution will be that, that we first need to sort the given array. We need to see which subintervals are overlapping and need to merge them.


// Solution by BF
// TC - O(n log n) + O(2n) and SC - O(n)
const mergeByBf = function(intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    let ans = [];
    for(let i = 0; i < n; i++) {
        let start = intervals[i][0];
        let end = intervals[i][1];
        
        // skip all the merged intervals
        if(ans.length > 0 && end <= ans[ans.length - 1][1]) {
            continue;
        }
        for(let j = i + 1; j < n; j++) {
            if(intervals[j][0] <= end) {
                end = Math.max(end, intervals[j][1]);
            } else {
                break;
            }
        }
        
        ans.push([start, end]);
    }
    return ans;
};

const arr = [[1,3],[2,6],[8,10],[15,18]];
const result = mergeByBf(arr);
console.log(result);

// Optimal approach would be that we do it in single iteration
// Solution
// TC - O(n log n) + O(n) and SC - O(n)

const merge = function(intervals) {
    let n = intervals.length;
    intervals.sort((a, b) => a[0]- b[0]);
    let ans = [];
    for(let i = 0; i < n; i++) {
        if(ans.length === 0 || intervals[i][0] > ans[ans.length - 1][1]) {
            ans.push(intervals[i]);
        } else {
            ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1]);
        }
    }

    return ans;
};

const res = merge(arr);       
console.log("ans is: ", res);