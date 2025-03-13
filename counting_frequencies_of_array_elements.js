// Counting frequencies of array elements and
// Find the highest/lowest frequency element

// You are given an array arr[] containing positive integers. The elements in the array arr[] range from 1 to n (where n is the size of the array), and some numbers may be repeated or absent. Your task is to count the frequency of all numbers in the range 1 to n and return an array of size n such that result[i] represents the frequency of the number i (1-based indexing).

// Examples

// Input: arr[] = [2, 3, 2, 3, 5]
// Output: [0, 2, 2, 0, 1]
// Explanation: We have: 1 occurring 0 times, 2 occurring 2 times, 3 occurring 2 times, 4 occurring 0 times, and 5 occurring 1 time.
// Input: arr[] = [3, 3, 3, 3]
// Output: [0, 0, 4, 0]
// Explanation: We have: 1 occurring 0 times, 2 occurring 0 times, 3 occurring 4 times, and 4 occurring 0 times.
// Input: arr[] = [1]
// Output: [1]
// Explanation: We have: 1 occurring 1 time, and there are no other numbers between 1 and the size of the array.
// Constraints:
// 1 ≤ arr.size() ≤ 106
// 1 ≤ arr[i] ≤ arr.size()

// Solution
// Approach - Hashing using arr
// TC - O(n + n) = O(2n) = O(n) and SC - O(n)

const countFrq = function(arr) {
    let n = arr.length;
    let hashArr = new Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        let el = arr[i];
        if(el >= 1 && el <= n) {
            hashArr[el - 1]++;
        }
    }

    return hashArr;
};

// Solution
// Approach - Hashing using map
// TC - O(n) and SC - O(n) + O(n)

const cntFrq = function(arr) {
    let n = arr.length;
    let map = new Map();

    // Initialize counts to 0 for each number from 1 to n
    for(let i = 0; i < n; i++) {
        map.set(i, 0);
    }

    // Count occurrences
    for(let i = 0; i < n; i++) {
        let el = arr[i];
        if(el >= 1 && el <= n) {
            map.set(el - 1, map.get(el - 1) + 1);
        }
    }

    //return map;

    // Convert map values to an array
    let res = [];
    for(let [key, val] of map) {
        res.push(val);
    }
    return res;
};

// Find the highest and lowest frequency
// Solution
// Approach - Hashing using arr
// TC - O(n + n) = O(2n) = O(n) and SC - O(n)

const frq = function(arr) {
    let n = arr.length;
    let hashArr = new Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        let el = arr[i];
        if(el >= 1 && el <= n) {
            hashArr[el - 1]++;
        }
    }

    let highest = hashArr[0];
    let lowest = hashArr[0];

    // if we need to return the freq
    for(let freq of hashArr) {
        if(freq > highest) {
            highest = freq;
        }
        if(freq < lowest) {
            lowest = freq;
        }
    }

    // if we need to return the index
    // for(let i = 0; i < hashArr.length; i++) {
    //     if(hashArr[i] > highest) {
    //         highest = i;
    //     }
    //     if(hashArr[i] < lowest) {
    //         lowest = i;
    //     }
    // }

    return {hashArr, highest, lowest};
};


const arr = [2, 3, 2, 3, 5];
const arr1 = [2, 3, 2, 3, 5, 2];
console.log("Frequency is(arr):", countFrq(arr));
console.log("Frequency is(map):", cntFrq(arr));
console.log("Frequency highest and lowest:", frq(arr1));