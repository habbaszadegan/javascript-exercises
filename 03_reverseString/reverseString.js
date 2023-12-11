const reverseString = function(string) {
    let stringArray = string.split('');
    let reversedArray = stringArray.reverse();
    let joinedReversedString = reversedArray.join('');
    return joinedReversedString;
};

// Do not edit below this line
module.exports = reverseString;
