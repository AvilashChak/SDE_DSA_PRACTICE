// Left Rotate an array by one place
// Example 1:
// Input:
// N = 5, array[] = {1,2,3,4,5}
// Output:
// 2,3,4,5,1
// Explanation:

// Since all the elements in array will be shifted 
// toward left by one so ‘2’ will now become the 
// first index and and ‘1’ which was present at 
// first index will be shifted at last.

// Example 2:
// Input:
// N = 1, array[] = {3}
// Output:
// 3
// Explanation:
// Here only element is present and so 
// the element at first index will be shifted to 
// last index which is also by the way the first index.

// Solution - Left Rotate by one place
// TC - O(n) and SC - O(1)

const leftRotate = function(arr) {
    let n = arr.length;
    let temp = arr[0];
    for(let i = 0; i < n; i++) {
        arr[i] = arr[i + 1];
    }
    arr[n - 1] = temp;
    return arr;
};

// Solution - Right Rotate by one place
// TC - O(n) and SC - O(1)

const rightRotate = function(arr) {
    let n = arr.length;
    let temp = arr[n - 1];
    for(let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = temp;
    return arr;
};

const arr = [1, 2, 3, 4, 5];
const arr1 = [1, 2, 3, 4, 5];
console.log("Left Rotate an Array by one place:", leftRotate(arr));
console.log("Right Rotate an Array by one place:", rightRotate(arr1));