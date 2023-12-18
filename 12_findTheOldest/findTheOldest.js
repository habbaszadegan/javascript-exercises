const findTheOldest = function(array) {
  return array.reduce((a, b) => {
    if (!a.yearOfDeath) {
      a.yearOfDeath = new Date().getFullYear();
    }
    let currentAge = a.yearOfDeath - a.yearOfBirth;
    let nextAge = b.yearOfDeath - b.yearOfBirth;
    return currentAge > nextAge ? a : b;
  })
};

// Do not edit below this line
module.exports = findTheOldest;