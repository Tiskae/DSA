/**
 * @param {Array} arr "array to be sorted"
 */
const bubbleSort = (arr) => {
  /**
     @param {number} idx1 "index of the 1st el"
     @param {number} idx2 "index of the 2nd el"
     @param {Array} arr "the parent array"
  */

  let noSwaps = false;

  function swapArrElements(idx1, idx2, arr) {
    if (arr[idx1] > arr[idx2]) {
      let temp = arr[idx2];
      arr[idx2] = arr[idx1];
      arr[idx1] = temp;
      noSwaps = false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length - i; j++) {
      swapArrElements(j, j + 1, arr);
    }

    console.log("One iteration completed!");
    if (noSwaps) break;
  }

  console.log(arr);
};

bubbleSort([9, 8, 7, 6, 5, 4, 3, 2, 1]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
