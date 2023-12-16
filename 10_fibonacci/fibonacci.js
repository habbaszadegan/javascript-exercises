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