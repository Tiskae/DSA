function addTo80(n) {
  console.log("Long process");
  return 80 + n;
}

function memoizedAddTo80() {
  const cache = {};

  return function (n) {
    if (!(n in cache)) {
      console.log("Long process");
      cache[n] = 80 + n;
    }
    return cache[n];
  };
}

const memoize = memoizedAddTo80();

console.log("1", memoize(70));
console.log("2", memoize(70));
