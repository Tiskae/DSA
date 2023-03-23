/**
 *
 * @param {Array} arr
 * @returns
 */

function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    const currEl = arr[i];

    // current el is the least number
    if (currEl < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // Find the right spot for it
      for (let j = i - 1; j >= 0; j--) {
        let currSmallest = arr[j];

        if (currEl < currSmallest && currEl > arr[j - 1]) {
          arr.splice(j, 0, arr.splice(i, 1)[0]);
        }
      }
    }
  }

  return arr;
}

console.log(insertionSort([1, 4, 7, 2, 5, 10, 9, 8, 2005]));
console.log(insertionSort([1, 2, 4, 5, 7, 8, 9, 10, 2005]));
console.log(insertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));
