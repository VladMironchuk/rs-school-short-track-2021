/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let str = (`${n}`).split('').map((i) => +i);
  while (str.length > 1) {
    sum = 0;
    sum = str.reduce((sum_, current) => sum_ + current, 0);
    str = (`${sum}`).split('').map((i) => +i);
  }
  return sum;
}

module.exports = getSumOfDigits;
