const findTheOldest = function(array) {
    // loop over the array of objects
    // calculate the person with the greatest age
    // update the array of objects with current age
    // run an if statement to see which age is higher
    for (let i = 0; i < array.length; i++) {
        array[i].age = array[i].yearOfDeath - array[i].yearOfBirth;
    }
    let ageCompare = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j].age > ageCompare) {
            ageCompare = array[j].age;
        }
    }
    let greatestAge;
    for (let k = 0; k < array.length; k++) {
        if (array[k].age === ageCompare) {
            greatestAge = array[k].name;
        }
    }
    console.log(greatestAge);
    return greatestAge;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

// finds the person with the greatest age
//    if (someone is living)
//    if (the oldest is living)

// let name
//      yearOfBirth
//      yearOfDeath

// Given an array of objects representing people with a birth and death year, return the oldest person.