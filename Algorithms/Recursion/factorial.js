/**
 * @param {number} num
 * @description Time complexity - O(n)
 */
function nonRecursiveFactorial(num) {
  let total = 1;

  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

/**
 * @param {number} num
 * @description Time complexity - O(n)
 */
function recursiveFactorial(num) {
  // Base case
  if (num == 2) {
    return 2;
  } else if (num < 2) {
    return 1;
  }

  // Recursive case
  return num * recursiveFactorial(num - 1);
}

console.log(nonRecursiveFactorial(7));
console.log(recursiveFactorial(7));
