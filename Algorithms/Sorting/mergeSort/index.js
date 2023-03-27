/**
 * @param {Array<number>} arr
 * @returns {Array<number>} the sorted arr
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  // Split array into left and right
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @param {Array<number>} left
 * @param {Array<number>} right
 */
function merge(left, right) {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

const numbers = [1, 4, 7, 2, 5, 10, 9, 8, 2005, 1];
const answer = mergeSort(numbers);
