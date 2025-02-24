// Assign Cookies
// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.
// Example 1:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:
// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.

// Appraoch
// TC - O(n log n + m log m + m) and SC - O(1)
// We will first sort both the arrays. And then use two pointers l and r and place it to the 0th index of the arrays. And then we will compare and return maxChildren.

const assignCookies = function(g, s) {
    let m = g.length;
    let n = s.length;
    let l = 0, r = 0;

    // sort the arrays
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    while(l < m && r < n) { // Ensure both indices stay in bounds
        if(g[l] <= s[r]) { // Match child greed with cookie size
            l++; // Move to the next child
        }
        r++; // Always move to the next cookie
    }

    return l;
};

console.log("Ans is: ", assignCookies([1,2], [1,2,3]));