/**
 * @param {Array<number} arr
 * @returns {Array<number>}
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      let temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr;
}

console.log(selectionSort([1, 4, 7, 2, 5, 10, 9, 8, 2005]));
console.log(selectionSort([1, 2, 4, 5, 7, 8, 9, 10, 2005]));
console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
