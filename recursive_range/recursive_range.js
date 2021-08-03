const recursiveRange = (number) => {
  if (number === 0) return 0;
  return number + recursiveRange(number - 1);
};

module.exports = {
  recursiveRange,
};
