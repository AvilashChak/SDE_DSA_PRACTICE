// Largest rectangle in a histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.
// Example 1:
// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.
// Example 2:
// Input: heights = [2,4]
// Output: 4

// Approach
// BF - TC - O(N^2) and SC - O(1)
// The approach is to find the right smaller and left smaller element and find the largest Rectangle area in Histogram.

// Solution
const bfLargestRectangle = function(arr, n) {
    let maxArea = 0;
    for(let i = 0; i < n; i++) {
        let minHeight = Number.MAX_VALUE;
        for(let j = i; j < n; j++) {
            minHeight = Math.min(minHeight, arr[j]);
            maxArea = Math.max(maxArea, minHeight * (j - i + 1));
        }
    }

    return maxArea;
};


// Optimal - TC - O(N) + O(N) = O(2N) and SC - O(N)
// This approach is a single pass approach instead of a two-pass approach. When we traverse the array by finding the next greater element, we found that some elements were inserted into the stack which signifies that after them the smallest element is themselves
// So we can find the area of the rectangle by using arr[i] * (right smaller - left smaller -1).

// Solution
const largestRectangle = function(arr) {
    let st = [];
    let maxArea = 0;
    let n = arr.length;
    
    for(let i = 0; i < n; i++) {
        while(st.length > 0 && arr[st[st.length - 1]] >= arr[i]) {
            let top = st.pop();
            let height = arr[top];
            let pse = st.length === 0 ? -1 : st[st.length - 1]; // Previous Smaller Element index
            let width = i - pse - 1; // Width of the rectangle
            maxArea = Math.max(maxArea, width * height);
        }
        st.push(i); // Push index instead of value
        
    }

    while(st.length > 0) {
        let top = st.pop();
        let height = arr[top];
        let pse = st.length === 0 ? -1 : st[st.length - 1];
        let width = n - pse - 1; // Width when reaching the end
        maxArea = Math.max(maxArea, width * height);
    }
    
    return maxArea;
};

const arr = [2, 1, 5, 6, 2, 3, 1];
const n = arr.length;
console.log("The largest area in the histogram is (optimal) " + largestRectangle(arr));
console.log("The largest area in the histogram is (bf) " + bfLargestRectangle(arr, n));