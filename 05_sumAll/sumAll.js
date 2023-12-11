const sumAll = function(int1, int2) {
    let sum = 0;

    if (typeof int1 === 'string' || Array.isArray(int1) || typeof int2 === 'string' || Array.isArray(int2)) {
        return 'ERROR';
    } else if (int1 < 0 || int2 <0) {
        return 'ERROR';
    } else if (int1 < int2){
        for (let i = int1; int1 <= int2; int1++) {
            sum += int1;
        }
    } else {
        for (let i = int2; int2 <= int1; int2++) {
            sum += int2;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;


// ## Hints

// Think about how you would do this on pen and paper and then how you might translate that process into code:
// - make sure you pay attention to the function parameters
// - create a variable to hold the final sum
// - loop through the given numbers ([link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration))
// - on each iteration add the number to the sum
// - return the sum after finishing the loop
