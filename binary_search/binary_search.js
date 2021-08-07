/**
 *
 * @param {*} array - A sorted array of items. Items in this array must be
 * comparable using less than, greater than and triple equals operators.
 * @param {*} left - The starting point of the array or subarray in
 * recursive calls.
 * @param {*} right - The end point of the array or subarray in
 * recursive calls.
 * @param {*} itemToFind - The item to locate in the array.
 * @return {number} - Index where the item is located in the array or -1 if
 * not found.
 */
const binarySearch = (array, left, right, itemToFind) => {
  if (right >= left) {
    const middle = Math.floor(left + (right - left) / 2);

    if (array[middle] === itemToFind) {
      return middle;
    }
    if (array[middle] > itemToFind) {
      return binarySearch(array, left, middle - 1, itemToFind );
    }
    if (array[middle] < itemToFind) {
      return binarySearch(array, middle + 1, right, itemToFind);
    }
  }
  return -1;
};

module.exports = {
  binarySearch,
};
