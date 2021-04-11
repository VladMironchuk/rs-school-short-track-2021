/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsObj = {};
  const domainsStr = domains.map((i) => i.split('.').reverse().map((j) => `.${j}`));
  domainsStr.forEach((item) => {
    let str = '';
    item.forEach((item_) => {
      str += item_;
      domainsObj[str] = Object.keys(domainsObj).includes(str) ? domainsObj[str] + 1 : 1;
    });
  });
  return domainsObj;
}

module.exports = getDNSStats;
