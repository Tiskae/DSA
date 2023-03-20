/**
 * Implementation of bubble sort
 * @param {Array<number>} arr
 * @returns {Array<number>} the sorted arr
 */

function bubbleSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(bubbleSort([1, 4, 7, 2, 5, 10, 9, 8, 2005]));
console.log(bubbleSort([1, 2, 4, 5, 7, 8, 9, 10, 2005]));
console.log(bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
