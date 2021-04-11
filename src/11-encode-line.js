/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const newArr = [];
  let newSubArr = [];
  arr.forEach((item) => {
    if (newSubArr.includes(item)) {
      newSubArr[1] = newSubArr[1] ? newSubArr[1] + 1 : 2;
    } else {
      newArr.push(newSubArr);
      newSubArr = [];
      newSubArr.push(item);
    }
  });
  newArr.push(newSubArr);
  newArr.shift();
  newArr.map((item) => item.reverse());
  return [].concat(...newArr).join('');
}

module.exports = encodeLine;
