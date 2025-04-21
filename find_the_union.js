// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

// Examples

// Example 1:
// Input:
// n = 5,m = 5.
// arr1[] = {1,2,3,4,5}  
// arr2[] = {2,3,4,4,5}
// Output:
//  {1,2,3,4,5}

// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1
// Distnict Elemennts in arr2 are : No distinct elements.
// Union of arr1 and arr2 is {1,2,3,4,5} 

// Example 2:
// Input:
// n = 10,m = 7.
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12}
// Output: {1,2,3,4,5,6,7,8,9,10,11,12}
// Explanation: 
// Common Elements in arr1 and arr2  are:  2,3,4,5
// Distnict Elements in arr1 are : 1,6,7,8,9,10
// Distnict Elemennts in arr2 are : 11,12
// Union of arr1 and arr2 is {1,2,3,4,5,6,7,8,9,10,11,12}

// Solution 1 - Brute Force
// Algorithm / Intuition
// Solution 1: Using Map
// Our aim is to find the common elements in arr1 and arr2, and the distinct elements of arr1,arr2. Use a Single map to find the frequencies of elements in arr1 and arr2.

// As we are using only a single map the common element in arr1 and arr2 are treated as a single element for finding frequency, so there would be no duplicates.

// Why not unordered_map?
// In unordered_map the keys are stored in random order, while in the map the keys are stored in sorted order (ascending order by default). As we require elements of the union to be in ascending order, using a map is preferable.

// We can also use unordered_map, but after finding the union of arr1 and arr2, we need to sort the union vector to get the elements of the union in sorted order.

// Solution
// TC - O((m+n)log(m+n)) and SC - O(m+n)

const findUnion1 = function(arr1, arr2) {
    let freq = new Map();
    let union = [];

    for(let num of arr1) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for(let num of arr2) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for(let [num, count] of freq) {
        union.push(num);
    }

    return union;
};

const arr1 = [1,2,3,4,5,6,7,8,9,10], arr2 = [2,3,4,4,5,11,12];
console.log("Brute Force ans is: ", findUnion1(arr1, arr2));

// Solution 2: - Better 
// Algorithm / Intuition
// Solution 2: Using Set
// Suppose we consider arr1 and arr2 as a single array say arr,  then the union of arr1 and arr2 is the distinct elements in arr.

// Example:
// arr1[] = {1,2,3,4,5,6,7,8,9,10}
// arr2[] = {2,3,4,4,5,11,12} 
// arr = arr1 + arr2 = {1,2,3,4,5,67,8,9,
//                      10,2,3,4,4,5,11,12}

// Distinct element in 
// arr = {1,2,3,4,5,6,7,8,9,10,11,12} 
//     = Union of arr1 ,arr2.
// So using a set we can find the distinct elements because the set does not hold any duplicates. Hence we can find the union of arr1 and arr2.

// Why not unordered_set?
// In unordered_set the elements are stored in random order, while in a set the keys are stored in sorted order (ascending order by default). As we require elements of the union to be in ascending order, using a set is preferable.

// We can also use unordered_set, but after finding the union of arr1 and arr2, we need to sort the union vector to get the elements of the union in sorted order.

// Solution
// TC - O((m+n)log(m+n)) and SC - O(m+n)

const findUnion2 = function(arr1, arr2) {
    let set = new Set();
    let union = [];

    for(let num of arr1) {
        set.add(num);
    }

    for(let num of arr2) {
        set.add(num);
    }

    for(let num of set) {
        union.push(num);
    }

    return union;
};

console.log("Better ans is: ", findUnion2(arr1, arr2));


// Solution 3: - Optimal
// Algorithm / Intuition
// Solution 3: Two Pointers
// Solution 1 and 2 work for the unsorted arrays also, The arrays arr1 and arr2 are sorted, can we use this property to reduce the time Complexity?

// Using the property that the arrays are sorted we can bring down the time complexity from

// O((m+n)log(m+n))    TO    O(m+n).
// Approach:
// Take two pointers let’s say i,j pointing to the 0th index of arr1 and arr2.
// Create an empty vector for storing the union of arr1 and arr2.
// From solution 2 we know that the union is nothing but the distinct elements in arr1 + arr2 
// Let’s traverse the arr1 and arr2 using pointers i and j and insert the distinct elements found into the union vector.
// While traversing we may encounter three cases.

// arr1[ i ] == arr2[ j ] 
// Here we found a common element, so insert only one element in the union. Let’s insert arr[i] in union and increment i.

// NOTE: There may be cases like the element to be inserted is already present in the union, in that case, we are inserting duplicates which is not desired. So while inserting always check whether the last element in the union vector is equal or not to the element to be inserted. If equal we are trying to insert duplicates, so don’t insert the element, else insert the element in the union. This makes sure that we are not inserting any duplicates in the union because we are inserting elements in sorted order.
// arr1[ i ]  < arr2[ j ]
// arr1[ i ] < arr2[ j ] so we need to insert arr1[ i ] in union.IF last element in  union vector is not equal to arr1[ i ],then insert in union else don’t insert. After checking Increment i.
// arr1[ i ] > arr2[ j ]
// arr1[ i ] > arr2[ j ] so we need to insert arr2[ j ] in union. IF the last element in the union vector is not equal to arr2[ j ], then insert in the union, else don’t insert. After checking Increment j. After traversing if any elements are left in arr1 or arr2 check for condition and insert in the union.

// Solution
// TC - O(m+n) and SC - O(m+n)

const findUnion3 = function(arr1, arr2) {
    let i = 0, j = 0;
    let union = [];
    let m = arr1.length, n = arr2.length;

    while(i < m && j < n) {
        if(arr1[i] <= arr2[j]) { // case 1 and 2
            if(union.length === 0 || union[union.length - 1] !== arr1[i]) {
                union.push(arr1[i]);
            }
            i++;
        }
        else { // case 3
            if(union.length === 0 || union[union.length - 1] !== arr2[j]) {
                union.push(arr2[j]);
            }
            j++;
        }
    }

    while(i < m) {
        if(union[union.length - 1] !== arr1[i]) { // if any elements left in arr1
            union.push(arr1[i]);
        }
        i++;
    }

    while(j < n) {
        if(union[union.length - 1] !== arr2[j]) { // if any elements left in arr2
            union.push(arr2[j]);
        }
        j++;
    }

    return union;
};

console.log("Optimal (using 2 pointers) ans is: ", findUnion3(arr1, arr2));