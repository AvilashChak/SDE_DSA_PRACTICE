// Permutation Sequences
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
// Example 1:
// Input: n = 3, k = 3
// Output: "213"
// Example 2:
// Input: n = 4, k = 9
// Output: "2314"
// Example 3:
// Input: n = 3, k = 1
// Output: "123"

// Approach
// BF - TC - O(n! * n! log n!) and SC - O(n! * n)
// The extreme naive solution is to generate all the possible permutations of the given sequence.  This is achieved using recursion and every permutation generated is stored in some other data structure (here we have used a vector). Finally, we sort the data structure in which we have stored all the sequences and return the Kth sequence from it.

// Solution
const getPermutation = function(n, k) {
    let nums = [];
    for(let i = 1; i <= n; i++) {
        nums.push(i); // create the initial array [1,2,3...n]
    }

    let permutations = [];

    function permute(arr, temp=[]) {
        // base case
        if(arr.length === 0) {
            permutations.push(temp.join(''));
            return;
        }
        for(let i = 0; i < arr.length; i++) {
            let newArr = arr.slice(0, i).concat(arr.slice(i + 1)); // remove current element
            permute(newArr, temp.concat(arr[i]));
        }
    };

    permute(nums);
    permutations.sort();

    return permutations[k -1];
};

console.log("BF: ", getPermutation(3, 3));

// Optimal - TC - O(N * N) = O(n^2) and SC - O(N)
// Intuition: Since this is a permutation we can assume that there are four positions that need to be filled using the four numbers of the sequence. First, we need to decide which number is to be placed at the first index. Once the number at the first index is decided we have three more positions and three more numbers.  Now the problem is shorter. We can repeat the technique that was used previously until all the positions are filled. The technique is explained below.

// Approach - STEP 1:Mathematically speaking there can be 4 variations while generating the permutation. We can have our permutation starting with either 1 or 2 or 3 or 4. If the first position is already occupied by one number there are three more positions left. The remaining three numbers can be permuted among themselves while filling the 3 positions and will generate 3! = 6 sequences. Hence each block will have 6 permutations adding up to a total of 6*4 = 24 permutations. If we consider the sequences as 0-based and in the sorted form we observe:- 
// The 0th - 5th permutation will start with 1 
// The 6th - 11th permutation will start with 2 
// The 12th - 17th permutation will start with 3 
// The 18th - 23rd permutation will start with 4.
// We make K = 17-1 considering 0-based indexing. Since each of the four blocks illustrated above comprises 6 permutations, therefore, the 16th permutation will lie in (16 / 6 ) = 2nd block, and our answer is the (16 % 6) = 4th sequence from the 2nd block. Therefore 3 occupies the first position of the sequence and K = 4.
// And then we keep on repeating the same until we reach 0 or no remaining number.

// Solution
const permutation = function(n ,k) {
    let nums = [];
    let fact = 1;

    // create an array of [1,2,3...n];
    for(let i = 1; i <= n; i++) {
        nums.push(i);
        fact = fact * i;
    }

    k = k - 1; // Convert to 0 - based index
    let result = "";

    for(let i = 0; i < n; i++) {
        fact = fact / (n - i); // compute (n - i - 1)! ie.(4-1)! for current block size
        let index = Math.floor(k / fact); // find in which block kth permutation is
        result = result + nums[index]; // pick the digit
        nums.splice(index, 1); // remove the used number
        k = k % fact; // reduce k for next iteration 
    }

    return result;
};

console.log("Optimal: ", permutation(4, 17));