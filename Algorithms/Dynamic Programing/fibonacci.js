let calculations = 0;

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function memoizedFibonacci() {
  const cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        calculations++;
        const result = fib(n - 1) + fib(n - 1);
        cache[n] = result;
      }
    }
  };
}

const fasterFibonacci = memoizedFibonacci();
const fibLargeNum = fasterFibonacci(9665);

console.log(fibLargeNum);
console.log(`It took ${calculations} calculations`);
