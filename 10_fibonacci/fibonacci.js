const fibonacci = function(x) {
    // calculate the sum of the two preceding numbers and limit it to the index asked for
    // declare two variables and assign both to 1.
    // in the loop, add each other and update the variables to the correct numbers
    
    let numInput = parseInt(x);

    if(numInput === 0) {
        return 0;
    } else if (numInput < 0) {
        return "OOPS";
    }

    let fibArray = [1, 1];
    let nextNum;

    for (let i = 0; i < numInput; i++) {
        nextNum = fibArray[i] + fibArray[i+1];
        fibArray.push(nextNum);
    }
    return fibArray[numInput-1];
};

// Do not edit below this line
module.exports = fibonacci;



// # Exercise 10 - Fibonacci


// const totalYears = inventors.reduce((total, inventor) => {
//     return total + (inventor.passed - inventor.year);
//   }, 0);

// Create a function that returns a specific member of the Fibonacci sequence:

// > A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers.
// > In this exercise, the Fibonacci sequence used is 1, 1, 2, 3, 5, 8, etc.
// > To learn more about Fibonacci sequences, go to: https://en.wikipedia.org/wiki/Fibonacci_sequence

// ```javascript
// fibonacci(4); // returns the 4th member of the series: 3  (1, 1, 2, 3)
// fibonacci(6); // returns 8
// ```