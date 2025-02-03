// Job Sequencing Problem
// You are given three arrays: id, deadline, and profit, where each job is associated with an ID, a deadline, and a profit. Each job takes 1 unit of time to complete, and only one job can be scheduled at a time. You will earn the profit associated with a job only if it is completed by its deadline.
// Your task is to find:
// The maximum number of jobs that can be completed within their deadlines.
// The total maximum profit earned by completing those jobs.
// Examples :
// Input: id = [1, 2, 3, 4], deadline = [4, 1, 1, 1], profit = [20, 1, 40, 30]
// Output: [2, 60]
// Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).
// Input: id = [1, 2, 3, 4, 5], deadline = [2, 1, 2, 1, 1], profit = [100, 19, 27, 25, 15]
// Output: [2, 127]
// Explanation: Job1 and Job3 can be done with maximum profit of 127 (100+27).
// Input: id = [1, 2, 3, 4], deadline = [3, 1, 2, 2], profit = [50, 10, 20, 30]
// Output: [3, 100]
// Explanation: Job1, Job3 and Job4 can be completed with a maximum profit of 100 (50 + 20 + 30).

// Approach
// 1. Delay the jobs to end days.
// 2. max profit.
// Sort the jobs in descending order of profit. 
// If the maximum deadline is x, make an array of size x .Each array index is set to -1 initially as no jobs have been performed yet.
// For every job check if it can be performed on its last day.
// If possible mark that index with the job id and add the profit to our answer. 
// If not possible, loop through the previous indexes until an empty slot is found.

// Solution
// TC - O(n)+O(nlogn)+O(n)=O(nlogn) and SC - O(n)+O(n)+O(1)=O(n)
const jobSequencing = function(id, deadline, profit) {    
   // construct the arr
   const jobs = id.map((_, i) => ({
        id: id[i],
        deadline: deadline[i],
        profit: profit[i]
   }));

   // sort the jobs arr while profit is in decending order
   jobs.sort((a, b) => b.profit - a.profit);

   // get maxDeadline
   const maxDeadline = Math.max(...deadline);
   let count = 0, maxProfit = 0;

   // create a hash arr with maxDeadline we will fill with -1. And will store the jobs in the end days
   let hash = new Array(maxDeadline).fill(-1);

   for(let i = 0; i < jobs.length; i++) {
    for(let j = jobs[i].deadline - 1; j >= 0; j--) {
        if(hash[j] === -1) { // check if the slot is free
            count++;
            hash[j] = jobs[i].id;
            maxProfit += jobs[i].profit;
            break;
        }
    }
   }

   return [count, maxProfit];

};

const id = [1, 2, 3, 4];
const deadline = [4, 1, 1, 1];
const profit = [20, 1, 40, 30];

console.log("Ans is: ", jobSequencing(id, deadline, profit));