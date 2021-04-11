/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = [];
  arr.forEach((i) => {
    if (i !== -1) arr1.push(i);
  });
  arr1.sort((a, b) => a - b);
  arr.forEach((item, index) => {
    if (item === -1) {
      arr1 = [].concat(arr1.slice(0, index), [-1], arr1.slice(index));
    }
  });
  return arr1;
}

module.exports = sortByHeight;
