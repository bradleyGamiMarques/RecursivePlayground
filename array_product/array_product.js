const productOfArray = (array) => {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
};

module.exports = {
  productOfArray,
};
