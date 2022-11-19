// Linear search - 0(n)

/**
 * @param {number[]} arr 
 * @param {number} num 
 * @returns {number} "the index of the num if present else -1"
 */
function linearSearch(arr, num) {
    if (arr.length === 0) return -1;
    for (let i=0; i < arr.length; i++)
        if (arr[i] === num) return i;

    return -1;
}

console.log(linearSearch([1,2,5,6,7,4,7,8,4,6,6,7], 7));
console.log(linearSearch([], 7));