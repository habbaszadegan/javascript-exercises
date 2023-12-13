const palindromes = function (string) {
    // take in the string, remove all commas and spaces
    // reverse it
    // compare if the reversed string and original string are the same
    let stringClean = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let stringReverse = stringClean.split('').reverse().join('');
    return stringClean === stringReverse;
};

// Do not edit below this line
module.exports = palindromes;