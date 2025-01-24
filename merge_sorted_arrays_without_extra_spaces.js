// Merge Sorted Arrays without extra spaces

// Approach
// To solve this problem statement we will use the Gap Algorithm. 
// Here the first pointer starts from extreme left and the gap is calculated as lenght of arr1 + length of arr2 / 2. And we need to take the ceiling. for say if it's (4+5)/2 = 9/2 = 4.5. Then we will take the ceiling as 5. 
// so we will declare left as 0 and right will be left + gap (i.e gap steps)
// so maininly there will be 3 conditions one is we will be in arr1 and arr2, then both the pointers will be in arr2 and lastly both the pointers will be in arr1. So we need to loop till gap > 0. When gap will be equal to 1 we will stop the loop else we will continue. And lastly we will populate the arr1 with the remaining elements of the arr2. 
// Also when performing the conditions we need to swap the indexes.

const ar1 = [1, 3, 5, 7];
const ar2 = [0, 2, 6, 8, 9];
const m = 4, n = 5;

// Solution
const swapIfGreater = function(arr1, arr2, ind1, ind2) {
    if(arr1[ind1] > arr2[ind2]) {
        [arr1[ind1], arr2[ind2]] = [arr2[ind2], arr1[ind1]];
    }
};

const merge = function(arr1, m, arr2, n) {
    let len = (m + n);
    let gap = Math.ceil(len / 2);
    while(gap > 0) {
        let left = 0;
        let right = left + gap;
        while(right < len) {
            // we will be in arr1 and arr2
            if(left < m && right >= m) {
                swapIfGreater(arr1, arr2, left, right - 1);
            }
            // we will be in the arr2
            else if(left >= m) {
                swapIfGreater(arr1, arr2, left - 1, right - 1);
            }
            // we will be in arr1 and arr1
            else {
                swapIfGreater(arr1, arr2, left, right);
            }
            left++;
            right++;
        }
        if(gap === 1) break;
        gap = Math.ceil(gap / 2);
    }
    // we will copy the remaining elements of arr2
    for(let i = 0; i < n; i++) {
        arr1[m + i] = arr2[i];
    }
};

const result = merge(ar1, m, ar2, n);
console.log("Merge result is: ", JSON.stringify(ar1));
console.log("Length is: ", ar1.length);