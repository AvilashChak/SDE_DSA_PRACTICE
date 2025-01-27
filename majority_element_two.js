// Majority Element > n / 3 times

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Example 1:
// Input: nums = [3,2,3]
// Output: [3]
// Example 2:
// Input: nums = [1]
// Output: [1]
// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

// Approach
// Here we will use the same algo what we used in the majority elements > n/2 times. Very important we need to find out how many element at max will be there in the answer. So the answer is at maximum there will be 2 elements. 
// for ex - 8/3 = 2. So we need > 2 times. So at minimum > 2 will be 3 so now if we add 3 + 3 + 3 = 9 but the length is 8. So we can say that at max there will be 2 elements.  

// BF - TC - O(n2) and SC - O(1)
// We will traverse or iterate the whole arr and create a list and store the ans there.

// Solution
const bfMajorityElementTwo = function(nums) {
    let n = nums.length;
    let arr = [];
    for(let i = 0; i < n; i++) {
        let count = 0;
        if(n === 0 || !arr.includes(nums[i])) {
            count = 0;
            for(let j = 0; j < n; j++) {
                if(nums[j] === nums[i]) {
                    count++;
                }
            }
            if(count > n / 3) {
                arr.push(nums[i]);
            }
        }
        if(arr.length === 2) break;
    }
    return arr;
};

const arr = [1, 1, 1, 1, 3, 2, 2, 2];
const bfResult = bfMajorityElementTwo(arr);
console.log("Bf result is: ", bfResult);

// Better- TC - O(n)  and SC - O(n)
// We can Hash it. We will take a empty hash map and keep the number and count ie key and value.

// Solution
const hashMajorityElement = function(nums) {
    let arr = [];
    let map = {};
    let n = nums.length;
    let mini = Math.floor((n / 3) + 1); // we know that if any element is appearing atleast for 3 times ie our majority element
    for(let i = 0; i < n; i++) {
        if(map[nums[i]] === undefined) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
        if(map[nums[i]] >= mini) {
            arr.push(nums[i]);
        }
        if(arr.length === 2) break;
    }
    return arr;
};

const hashResult = hashMajorityElement(arr);
console.log("Hash Result: ", hashResult);

// Optimal - TC - O(2n) and SC - O(1)
// We will use the same algo what we use in the majority element. with just fe changes

// Solution
const majorityElement =  function(nums) {
    let n = nums.length;
    let count1 = 0, count2 = 0;
    let el1 = -Infinity, el2 = -Infinity;
    for(let i = 0; i < n; i++) {
        if(count1 === 0 && el2 !== nums[i]) {
            count1 = 1;
            el1 = nums[i];
        }
        else if(count2 === 0 && el1 !== nums[i]) {
            count2 = 1;
            el2 = nums[i];
        }
        else if(nums[i] === el1) count1++;
        else if(nums[i] === el2) count2++;
        else count1--, count2--;
    }
    let arr = [];
    count1 = 0, count2 = 0;
    for(let i = 0; i < n; i++) {
        if(nums[i] === el1) count1++;
        if(nums[i] === el2) count2++;
    }
    let mini = Math.floor((n/3) + 1);
    if(count1 >= mini) arr.push(el1);
    if(count2 >= mini) arr.push(el2);
    arr.sort((a, b) => a- b);
    return arr;
};

const nums1 = [2,2,1,1,1,2,2];
const me = majorityElement(nums1);
console.log("ME is: ", me);