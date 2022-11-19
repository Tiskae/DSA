// Problem solving pattern: Multiple Pointer
// Write a function that returns the number of unique numbers in a sorted number[]

// Using frequency counter
const howManyUniqueNumsFreq = (arr) => {
  let obj = {};
  for (let a of arr) {
    obj[a] ? (obj[a] += 1) : (obj[a] = 1);
  }
  return Object.keys(obj).length;
};

// console.log(
//   howManyUniqueNumsFreq([-1, -1, 0, 1, 1, 1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9])
// );

const howManyUniquepointer = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(
  howManyUniquepointer([-1, -1, 0, 1, 1, 1, 2, 3, 3, 4, 6, 7, 7, 8, 9, 9, 9, 9])
);
console.log(howManyUniquepointer([]));
