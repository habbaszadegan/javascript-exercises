const palindromes = function (string) {
    // take in the string, remove all commas and spaces
    // reverse it
    // compare if the reversed string and original string are the same
    let stringLowerCase = string.toLowerCase();
    console.log(stringLowerCase);
    let stringReverse = stringLowerCase.split(/,|\s|!|./).reverse().join('');
    console.log(stringReverse);
    return stringLowerCase === stringReverse ? true : false;
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;