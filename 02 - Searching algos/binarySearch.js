// Binary search - o(log(n))

/**
 * @param {number[]} arr
 * @param {number} num
 * @returns {number} "the index of num if present, else -1"
 */

function binarySearch(arr, num) {
    let tries = 0;
    let left = 0;
    let right = arr.length;

    while(left <= right) {
        tries++;
        let mid = Math.floor((left + right) / 2);
        console.log(tries);
        if (arr[mid] === num) return mid;
        else if (arr[mid] > num) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 2));
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 61));