// Allocate Minimum Number of Pages
// Given an array of integers A of size N and an integer B.
// The College library has N books. The ith book has A[i] number of pages.
// You have to allocate books to B number of students so that the maximum number of pages allocated to a student is minimum.
// A book will be allocated to exactly one student.
// Each student has to be allocated at least one book.
// Allotment should be in contiguous order, for example: A student cannot be allocated book 1 and book 3, skipping book 2.
// Calculate and return that minimum possible number.
// NOTE: Return -1 if a valid assignment is not possible.
// Example Input
// Input 1:
// A = [12, 34, 67, 90]
// B = 2
// Input 2:
// A = [5, 17, 100, 11]
// B = 4
// Example Output
// Output 1:
// 113
// Output 2:
// 100
// Example Explanation
// Explanation 1:
// There are two students. Books can be distributed in following fashion : 
// 1)  [12] and [34, 67, 90]
//     Max number of pages is allocated to student 2 with 34 + 67 + 90 = 191 pages
// 2)  [12, 34] and [67, 90]
//     Max number of pages is allocated to student 2 with 67 + 90 = 157 pages 
// 3)  [12, 34, 67] and [90]
//     Max number of pages is allocated to student 1 with 12 + 34 + 67 = 113 pages
//     Of the 3 cases, Option 3 has the minimum pages = 113.

// Approach
// We are going to use the Binary Search algorithm to optimize the approach.

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// Upon closer observation, we can recognize that our answer space, represented as [max(arr[]), sum(arr[])], is actually sorted. Additionally, we can identify a pattern that allows us to divide this space into two halves: one consisting of potential answers and the other of non-viable options. So, we will apply binary search on the answer space.

// Algorithm:
// If m > n: In this case, book allocation is not possible and so, we will return -1.
// Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to max(arr[]) and the high will point to sum(arr[]).
// Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Eliminate the halves based on the number of students returned by countStudents():
// We will pass the potential number of pages, represented by the variable 'mid', to the ‘countStudents()' function. This function will return the number of students to whom we can allocate the books.
// If students > m: On satisfying this condition, we can conclude that the number ‘mid’ is smaller than our answer. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
// Otherwise, the value mid is one of the possible answers. But we want the minimum value. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
// Finally, outside the loop, we will return the value of low as the pointer will be pointing to the answer.
// The steps from 3-4 will be inside a loop and the loop will continue until low crosses high.

// Solution - TC - and SC -
const countStudents = function(arr, barrier) {
    let n = arr.length;
    let allocatedStudent = 1;
    let pages = 0;
    for(let i = 0; i < n; i++) {
        // edge case
        if(arr[i] > barrier) return false;
        
        if(pages + arr[i] <= barrier) {
            // add pages to current student
            pages += arr[i];
        }
        else {
            // add pages to next student
            allocatedStudent++;
            pages = arr[i];
        }
    }
    return allocatedStudent;
};

const books = function(arr, k) {
    // edge case
    if(k > arr.length) {
        return - 1; // book allocation not possible
    }

    let low = Math.max(...arr); // we will take the lowest elem in the arr
    let high = arr.reduce((a, b) => a + b, 0); // we will take the sum of the arr

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        let students = countStudents(arr, mid);
        if(students > k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
};


const arr = [12, 34, 67, 90], k = 2;
console.log("Optimal using BS:", books(arr, k));