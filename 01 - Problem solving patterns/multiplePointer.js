// Problem solving pattern
// Write a function that returns the first pair that sums to zero in a sorted array

const firstPairToZero = (arr) => {
  // Creates two pointers
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

console.log(firstPairToZero([-12, -10, -7, -6, -8, -3, -1, 0, 1, 3, 4, 9, 11]));
