const removeFromArray = function(array, ...removedElements) {
    let filteredArray = array.filter(element => {
      return !removedElements.includes(element);
    });
    return filteredArray;
  };


// Do not edit below this line
module.exports = removeFromArray;
