/**
 *
 * @param {string} str "string to the reversed"
 * @returns {string}
 */
function reverseString(str) {
  // Invalid param
  if (!str || typeof str !== "string") return;
  // Empty strings and single chars are palindromes
  if (str.length < 2) return str;

  const reversedStrArr = [];

  for (let i = str.length - 1; i > -1; i--) {
    reversedStrArr.push(str[i]);
  }

  return reversedStrArr.join("");
}

console.log(reverseString("!hayoZ uoy evol I"));
