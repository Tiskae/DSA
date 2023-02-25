const testArr = new Array(30).fill(0).map((_, idx) => idx + 1);
console.log(testArr);

function splitArr(arr) {
  if (arr.length === 1) return;
  const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
  const otherHalf = arr.slice(Math.ceil(arr.length / 2));

  console.log(firstHalf, otherHalf);
  splitArr(firstHalf);
}

function logAllPairs(arr) {
  const allPairs = [];

  for (let i of arr) {
    for (let j of arr) {
      allPairs.push([i, j]);
    }
  }

  console.table(allPairs);
}

logAllPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
