/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const mergedArr = [];

  let arr1Item = arr1[0];
  let arr2Item = arr2[0];

  let idxArr1 = 0;
  let idxArr2 = 0;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item);
      idxArr1++;
      arr1Item = arr1[idxArr1];
    } else {
      mergedArr.push(arr2Item);
      idxArr2++;
      arr2Item = arr2[idxArr2];
    }
  }

  return mergedArr;
}

console.log(mergeSortedArrays([1, 3, 4, 7, 9], [2, 4, 10, 13]));
