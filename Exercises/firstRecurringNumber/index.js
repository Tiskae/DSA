/**
 * returns the first recurring number
 * @param {Array} arr
 * @returns {number | undefined}
 */
function firstRecurringNumber(arr) {
  if (!arr || arr.length === 1) return undefined;

  const numsObj = {};

  for (let el of arr) {
    if (numsObj[el]) {
      return el;
    }
    numsObj[el] = 1;
  }

  return undefined;
}

console.log(firstRecurringNumber([1, 2, 1, 3, 4, 5, 5]));
