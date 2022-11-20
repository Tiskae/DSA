/**
 * @param {Array<number>} arr "the array to ber sorted"
 * @returns {Array<number} "sorted array"
 */
function selectionSort(arr) {
  // Set the min idx to 0
  let minIdx = 0;

  /**
   * @param {number} idx1 "first index"
   * @param {number} idx2 "second index"
   * @param {Array} arr  "parent array"
   */
  function swapArrEls(idx1, idx2, arr) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    console.log("SWAP COMPLETE!");
  }

  // Outer loop to sort the arr
  for (let i = 0; i < arr.length; i++) {
    // set min idx to the first idx of curr iterartion
    minIdx = i;
    // inner loop to check for new min idx
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j);
      // compare curr el with old min & sets minIdx to new idx if less
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    minIdx !== i && swapArrEls(minIdx, i, arr);
  }

  return arr;
}

const rndArr = [1, 2, 3, 4, 5, 9, 7];
const sortedArr1 = selectionSort(rndArr);
console.log(sortedArr1);
