const convertToCelsius = function(F) {
  let celsiusConverted = (F - 32) * (5/9)
  return parseFloat(celsiusConverted.toFixed(1));
};

const convertToFahrenheit = function(C) {
  let fahrenheitConverted = C * (9/5) + 32;
  return parseFloat(fahrenheitConverted.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
