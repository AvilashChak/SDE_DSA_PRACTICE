// Write a function where you can find the sum of N number of arguments.

// Difference Between arguments vs ...args

// Feature	                arguments	                  ...args (Rest Parameter)
// Type	                    Array-like object	                Real Array
// Can use array methods	❌ No (must convert first)	      ✅ Yes
// Arrow functions	        ❌ Not available	                  ✅ Works normally
// Modern usage	            ❌ Legacy	                      ✅ Modern & recommended

// Solution 
// Here we will use rest parameter

const sumAll = (...nums) => {
    let sum = 0;
    for(let num of nums) {
        sum = sum + num;
    }
    return sum;
};

console.log("1:", sumAll(1,2));
console.log("2:", sumAll(1,2,3));

const sum = function() {
    let sum = 0;
    for(let i = 0; i  < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

console.log("3:", sum(1,2));
console.log("4:", sum(1,2,3));