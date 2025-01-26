// Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Approach
// BF - TC - O(n2) and SC - O(1)
// We traverse through each element and put a counter and see if the the counter is more the n/2 that is our majority element;

// Solution
const bfMajorityElement = function(arr) {
    let count = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[j] === arr[i]) {
                count++;
            }
        }
        if(count > n / 2) return arr[i];
    }
    return count;
};

const nums = [2,2,1,1,1,2,2];
const bfResult = bfMajorityElement(nums);
console.log(bfResult);

// Better - TC - O(n log n) + O(n) and SC - O(n)
// Is by using Hashing. So here we will use hash map where we have key as element and value as count.
// we will iterate over the arr and increase the count against the element.

// Solution
const hashMajorityElement = function(arr) {
    let n = arr.length;
    let map = {};
    for(let i = 0; i < n; i++) {
        if(map[arr[i]] === undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }
    for(let [key, value] of Object.entries(map)) {
        if(value > n / 2) {
            console.log("Key: ", key);
            console.log("Value: ", value);
            return true;
        }
    }
    return false;
};

const hashResult = hashMajorityElement(nums);
console.log("hashResult: ", hashResult);

// Optimal - TC - O(n) and SC - O(1)
// We will use Moose's Voting Algorithm. Where we generally take element and count. And we iterate and see which element in the array is dominating.
// 1. First process is to apply moose's voting algo
// 2. Verify if the element you got is majority or not. Whatever the element you get iterate over the arr and see how many times it appears. if it appears more than n / 2 times then it is our majority element

// Solution
const majorityElement = function(arr) {
    let count = 0;
    let el;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        if(count === 0) {
            el = arr[i];
            count = 1;
        }
        else if(arr[i] === el) {
            count++;
        }
        else {
            count--;
        }
    }
    // Now we will do the second process --- check with the dominating el
    let count1 = 0;
    for(let i = 0; i < n; i++) {
        if(arr[i] === el) count1++;
    }

    if(count1 > n / 2) return el;
    return - 1;
};

const me = majorityElement(nums);
console.log("Majority Element is: ", me);


