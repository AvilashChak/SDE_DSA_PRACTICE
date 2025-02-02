// Minimum number of platforms required for a railway station
// You are given the arrival times arr[] and departure times dep[] of all trains that arrive at a railway station on the same day. Your task is to determine the minimum number of platforms required at the station to ensure that no train is kept waiting.
// At any given time, the same platform cannot be used for both the arrival of one train and the departure of another. Therefore, when two trains arrive at the same time, or when one arrives before another departs, additional platforms are required to accommodate both trains.
// Examples:
// Input: arr[] = [900, 940, 950, 1100, 1500, 1800], dep[] = [910, 1200, 1120, 1130, 1900, 2000]
// Output: 3
// Explanation: There are three trains during the time 9:40 to 12:00. So we need a minimum of 3 platforms.
// Input: arr[] = [900, 1235, 1100], dep[] = [1000, 1240, 1200]
// Output: 1
// Explanation: All train times are mutually exclusive. So we need only one platform
// Input: arr[] = [1000, 935, 1100], dep[] = [1200, 1240, 1130]
// Output: 3
// Explanation: All 3 trains have to be there from 11:00 to 11:30

// Approach 
// Brute - TC - O(n2) and SC - O(1)
const minPlatform = function(arri, dep) {
    let ans = 1;
    let n = arri.length;
    for(let i = 0; i < n; i++) {
        let count = 1; // count of overlaps of trains
        for(let j = i + 1; j < n; j++) {
            if((arri[i] >= arri[j] && arri[i] <= dep[j]) || 
            (arri[j] >= arri[i] && arri[j] <= dep[i])) {
                count++;
            }
        }
        ans =  Math.max(ans, count);
    }

    return ans;
};

console.log("BF: ", minPlatform([900, 1235, 1100], [1000, 1240, 1200]));

// Optimal - TC - 2(N log N + N) and SC - O(1)
// Using two pointers. First we need to sort the arri and dep.
const minimumPlatforms = function(arri, dep) {
    let i = 0, j = 0;
    let count = 0, maxCount = 0;
    let n = arri.length;
    arri.sort((a, b) => a - b);
    dep.sort((a, b) => a - b);

    while(i < n) {
        if(arri[i] < dep[j]) {
            count++;
            i++;
        }
        else {
            count--;
            j++;
        }
    }

    maxCount = Math.max(maxCount, count);

    return maxCount;
};

console.log("Optimal: ", minimumPlatforms([900, 1235, 1100], [1000, 1240, 1200]));