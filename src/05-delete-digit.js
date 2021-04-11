/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = `${n}`;
  let arr1 = [];
  for (let i = 0; i < str.length; i++) {
    arr1.push(str.slice(0, i) + str.slice(i + 1));
  }
  arr1 = arr1.map((i) => +i);
  let max = 0;
  arr1.forEach((i) => {
    max = Math.max(max, i);
  });
  return max;
}

module.exports = deleteDigit;
