// Online Stock Span
// Design an algorithm that collects daily price quotes for some stock and returns the span of that stock's price for the current day.

// The span of the stock's price in one day is the maximum number of consecutive days (starting from that day and going backward) for which the stock price was less than or equal to the price of that day.

// For example, if the prices of the stock in the last four days is [7,2,1,2] and the price of the stock today is 2, then the span of today is 4 because starting from today, the price of the stock was less than or equal 2 for 4 consecutive days.
// Also, if the prices of the stock in the last four days is [7,34,1,2] and the price of the stock today is 8, then the span of today is 3 because starting from today, the price of the stock was less than or equal 8 for 3 consecutive days.
// Implement the StockSpanner class:

// StockSpanner() Initializes the object of the class.
// int next(int price) Returns the span of the stock's price given that today's price is price.
 

// Example 1:

// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

// Explanation
// StockSpanner stockSpanner = new StockSpanner();
// stockSpanner.next(100); // return 1
// stockSpanner.next(80);  // return 1
// stockSpanner.next(60);  // return 1
// stockSpanner.next(70);  // return 2
// stockSpanner.next(60);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
// stockSpanner.next(85);  // return 6


// Approach
// BF - TC - O(No. of days) and SC - O(No. of next calls)
class SP {
    constructor() {
        this.arr = [];
    }

    next(value) {
        this.arr.push(value);
        let count = 1; // include today
        for(let i = this.arr.length - 2; i >= 0; i--) {
            if(this.arr[i] <= value) count++;
            else break;
        }
        return count;
    }
}

const sP = new SP();
console.log(sP.next(100)); // 1
console.log(sP.next(80));  // 1
console.log(sP.next(60));  // 1
console.log(sP.next(70));  // 2
console.log(sP.next(60));  // 1
console.log(sP.next(75));  // 4
console.log(sP.next(85));  // 6

// Optimal - TC - O(1) and SC - O(1)
class StockSpanner {
    constructor() {
        this.st = []; // stores [value, span]
    }

    next(value) {
        let span = 1; // start with 1 [current day]

        // Pop from stack if previous prices are smaller or equal to value
        while(this.st.length > 0 && this.st[this.st.length - 1][0] <= value) {
            span += this.st.pop()[1];
        }

        this.st.push([value, span]);
        return span;
    }
}



const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // 1
console.log(stockSpanner.next(80));  // 1
console.log(stockSpanner.next(60));  // 1
console.log(stockSpanner.next(70));  // 2
console.log(stockSpanner.next(60));  // 1
console.log(stockSpanner.next(75));  // 4
console.log(stockSpanner.next(85));  // 6