// Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
// Explanation: 
// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


// Approach
// BF - TC - O(N-K) * O(K) and SC - O(N-K)
// Solution
const maxWindow = function(arr, k) {
    let list = [];
    let n = arr.length;
    for(let i = 0; i <= n - k; i++) {
        let maxi = arr[i];
        for(let j = i; j <= i + k - 1; j++) {
            maxi = Math.max(maxi, arr[j]);
        }
        list.push(maxi);
    }

    return list;
};


// Optimal - TC - O(2N) and SC - O((k) + (N - K)) 
// We address this problem with the help of a data structure that keeps checking whether the incoming element is larger than the already present elements. This could be implemented with the help of a de-queue. When shifting our window, we push the new element in from the rear of our de-queue. Following is a sample representation of our dequeue:
// Every time before entering a new element, we first need to check whether the element present at the front is out of bounds of our present window size. If so, we need to pop that out. Also, we need to check from the rear that the element present is smaller than the incoming element. If yes, there’s no point storing them and hence we pop them out. Finally, the element present at the front would be our largest element.

// Solution
const maxSlidingWindow = function(arr, k) {
    let result = [];
    let deque = [];
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        // Remove element out of the current window
        if(deque.length > 0 && deque[0] === i - k) {
            deque.shift();
        }

        // Remove smaller elements within the window as they are useless
        while(deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }
        
        // Add current element's index at deque
        deque.push(i);

        // Store the max value of i in the result arr
        if(i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }

    return result;
};



const ms = [1,3,-1,-3,5,3,6,7], k = 3;
console.log("BF ans: ", maxWindow(ms, k));
console.log("Optimal ans: ", maxSlidingWindow(ms, k));