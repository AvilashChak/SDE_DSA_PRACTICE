// House Robber II
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
// Example 2:

// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.
// Example 3:

// Input: nums = [1,2,3]
// Output: 3


// Approach
// This question can be solved using the approach discussed in the Maximum Sum of non-adjacent elements. Readers are highly advised to go through that article first and then read this. The rest of the article will refer to the previous article as Article DP5 and will relate to that approach. 

// Now, we have a single test case. Three houses have money as shown.

// According to article DP5, the answer will be 4(2+2) as we are taking the maximum sum of non-adjacent elements.
// In this question, the first and last element are also adjacent(circular street), therefore the answer will be 3.
// Modification to Article DP5’s Approach

// We were finding the maximum sum of non-adjacent elements in the previous questions. For a circular street, the first and last house are adjacent, therefore one thing we know for sure is that the answer will not consider the first and last element simultaneously (as they are adjacent).

// Now building on the article DP5, we can say that maybe the last element is not considered in the answer. In that case, we can consider the first element. Let’s call this answer ans1. Hence we have reduced our array(arr- last element), say arr1, and found ans1 on it by using the article DP5 approach.

// Now, it can also happen that the final answer does consider the last element. If we consider the last element, we can’t consider the first element( again adjacent elements). We again use the same approach on our reduced array( arr - first element), say arr2. Let’s call the answer we get as ans2.

// Now, the final answer can be either ans1 or ans2. As we have to return the maximum money robbed by the robber, we will return max(ans1, ans2) as our final answer.

// Approach:

// The approach to solving this problem can be summarized as:

// Make two reduced arrays - arr1(arr-last element) and arr2(arr-first element).
// Find the maximum of non-adjacent elements as mentioned in article DP5 on arr1 and arr2 separately. Let’s call the answers we got ans1 and ans2 respectively.
// Return max(ans1, ans2) as our final answer.

// Solution - Using space optimization approach
// TC - O(N) and SC - O(1)

const solve = function(arr) {
    let n = arr.length;
    // we will take variables which will store the max values of previous two elements of the current element
    let prev1 = arr[0];
    let prev2 = 0;

    // loop from the second element
    for(let i = 1; i < n; i++) {
        // calculate pick and non pick
        let pick = arr[i];
        if(i > 1) pick = pick + prev2;

        let nonPick = prev1;

        // calculate the max sum and update prev1 and prev2
        let cur = Math.max(pick, nonPick);
        let prev2 = prev1;
        prev1 = cur;
    }
    return prev1;
};

const houseRobber = function(arr) {
    let n = arr.length;
    // We will take two temp arr
    let temp1 = [], temp2 = [];

    // base or edge case
    if(n === 1) return arr[0];

    for(let i = 0; i < n; i++) {
        if(i !== 0) temp1.push(arr[i]); // excluding the first element
        if(i !== n - 1) temp2.push(arr[i]); // excluding the last element
    }

    return Math.max(solve(temp1), solve(temp2));
};


const nums = [2,3,2];
console.log("Ans:", houseRobber(nums));