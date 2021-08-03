const power = (number, exponent) => {
  if (exponent === 0) return 1;
  return number * power(number, exponent - 1);
};

module.exports = {
  power,
};
