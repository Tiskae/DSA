function insertionSort(arr) {
  // loops through the entire array, omitting the first one
  for (var i = 1; i < arr.length; i++) {
    const currEl = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > currEl; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currEl;

    console.log(arr);
  }
}

insertionSort([89, 27, 2, 18, 21]);
