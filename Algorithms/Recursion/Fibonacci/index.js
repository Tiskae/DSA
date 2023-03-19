/**
 * @description Time complexity - O(n)
 * @param {number} index
 * @returns {number} the number at the given index of a fibonacci sequence
 */
function fibonacciIterative(index) {
  if (index < 0 || typeof index !== "number") {
    return null;
  }

  if (index < 2) {
    return index;
  }

  const fibNums = [0, 1];

  for (let i = 2; i < index + 1; i++) {
    const nextValue = fibNums[i - 1] + fibNums[i - 2];
    fibNums.push(nextValue);
  }

  return fibNums[index];
}

/**
 * @description Time complexity - O(2^n) using recursion - very bad
 * @param {number} index
 * @returns {number} the number at the given index of a fibonacci sequence
 */

function fibonacciRecursive(index) {
  // Base case
  if (index < 2) {
    return index;
  }

  return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

console.log(fibonacciRecursive(9));
const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const numbers = [1, 5, 23, 11, 45, 7, 8];
console.dir(letters.sort());
console.dir(numbers.sort());
