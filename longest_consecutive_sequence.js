// Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:
// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Approach
// BF - TC - O(n2) and SC - O(1)
// We will iterate over the whole array and store arr[i] in x variable and set the count as 1. And then we will do linear search and see if x + 1 is present or not(i.e == true) if it's there we x will be x = x+1 and cnt will be cnt = cnt + 1.

// Solution
const linearSearch = function(nums, n) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === n) {
            return true;
        }
    }
    return false;
};

const bfLongestConsecutive = function(nums) {
    let n = nums.length;
    let count = 0;
    let longest = 1;
    let x;
    for(let i = 0; i < n; i++) {
        x = nums[i];
        count = 1;
        while(linearSearch(nums, x + 1)) {
            x = x + 1;
            count = count + 1;
        }
        longest = Math.max(longest, count);
    }
    return longest;
};

const arr = [100,4,200,1,3,2];
console.log("BF length is:", bfLongestConsecutive(arr));

// Better - TC - O(NlogN)(for sorting the arr) + O(N) and SC - distorting the arr 
// First we will sort the arr. then We will iterate over the arr and keep 3 var longest, currcnt, lastSmaller. So 1st lastSmaller will be 1 and will make the currcnt = 1 and longest as 1. We will keep on going until we found the next el which is more than lastSmaller and which if we decrement == least min. if we find we will increment by 1 currcnt and the longest. We will keep on going. if we reach a stage where is != currcnt we will start again.

// Solution
const betterConsSeq = function(nums) {
    let n = nums.length;
    if( n === 0) return 0;
    nums.sort((a, b) => a - b);
    let longest = 1;
    let lastSmaller = Number.MIN_VALUE;
    let count = 0;

    for(let i = 0; i < n; i++) {
        if(nums[i] - 1 === lastSmaller) {
            count += 1;
            lastSmaller = nums[i];
        }
        else if(lastSmaller !== nums[i]) {
            count = 1;
            lastSmaller = nums[i];
        }
        longest = Math.max(longest, count);
    }
    return longest;
};

console.log("Better is: ", betterConsSeq(arr));

// Optimal - TC - O(n) + O(n + 2n) and SC - O(n)
// First we need to put everthing in a hashset. Note - hashset only stores unique el. We will check from from the first el. If the first el has the previous we will not check we will check only if the previous el is not present in the hashset. then once we get a el which doesn't has a previous el we will check the el + 1 and increment longest by 1 till the consecutive sequence. 

// Solution 
const consecutiveSequence = function(nums) {
    let n = nums.length;
    if(n === 0) return 0;
    let longest = 1;
    let hashset = new Set();

    for(let i = 0; i < n; i++) {
        hashset.add(nums[i]);
    }

    for(let start of hashset) {
        if(!hashset.has(start - 1)) {
            let count = 1;
            let x = start;
            while(hashset.has(x + 1)) {
                x += 1;
                count += 1;
            }
            longest = Math.max(longest, count);
        }
    }
    return longest;
};

console.log("Optimal is ", consecutiveSequence(arr));