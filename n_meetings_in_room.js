// N meetings in one room
// You are given timings of n meetings in the form of (start[i], end[i]) where start[i] is the start time of meeting i and end[i] is the finish time of meeting i. Return the maximum number of meetings that can be accommodated in a single meeting room, when only one meeting can be held in the meeting room at a particular time. 
// Note: The start time of one chosen meeting can't be equal to the end time of the other chosen meeting.
// Examples :
// Input: start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
// Output: 4
// Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)
// Input: start[] = [10, 12, 20], end[] = [20, 25, 30]
// Output: 1
// Explanation: Only one meetings can be held with given start and end timings.
// Input: start[] = [1, 2], end[] = [100, 99]
// Output: 1

// Approach - TC - O(2N + N log N) and SC - O(3N) + O(N)
// We will use greedy approach.

// Solution
const maxMeetings = function(start, end) {
    let n = start.length;
    let meetings = [];

    // store the start, end time and original index(1-based)
    for(let i = 0; i < n; i++) {
        meetings.push([start[i], end[i], i + 1]);
    }

    // sort meetings by end time and then by start time if in case end times are the same
    meetings.sort((a , b) => a[1] === b[1] ? a[0] -a[0] : a[1] - b[1]);

    let selectedMeetings = [];
    let freeTime = 0;
    let count = 0;

    for(let i = 0; i < n; i++) {
        // if the start time is greater than the last selected meeting's end time
        if(meetings[i][0] > freeTime) {
            count++; // update the count
            selectedMeetings.push(meetings[i][2]); // store the original position
            freeTime = meetings[i][1]; // Update last selected meeting's end time
        }
    }
    console.log("Count is: ", count); // In case we need the count
    return selectedMeetings;
};

console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9]));