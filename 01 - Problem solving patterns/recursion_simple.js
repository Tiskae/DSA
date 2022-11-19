// ** //
// ** //
const countdownRcrs = function (num) {
  if (num <= 0) {
    return console.log("All done!");
  }

  console.log(num);
  num--;

  countdownRcrs(num);
};

// const countdown = function (num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All done!");
// }

// countdownRcrs(7);


// ** //
// ** //
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// console.log(sumRange(15))

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};

// console.log(factorial(5));


// ** //
// ** //
const collectOdds = function (arr) {
  const result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    } else if (helperInput[0] % 2 === 1) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);
  console.log(result)
};

// collectOdds([0,  1,  2,  3,  4,  5,  6, 7,  8,  9, 10, 11, 12, 13,14, 15, 16, 17, 18, 19, 20]);


/**
 * 
 * @param {Array<number>} arr
 * @returns {number}
 * 
 */
function prodArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * prodArray(arr.slice(1))
}

// console.log(prodArray([]))


/**
 * @param {number} ans
 */

let tries = 0;

function spinNumber(ans){
  tries++;
  if (Math.floor(Math.random() * 101) === ans) {
    return console.log(`Try ${tries}: Got the lucky number ${ans}`)
  }
  
  console.log(`Trying again ${tries}:  ...`);
  spinNumber(ans);
}

spinNumber(70);
