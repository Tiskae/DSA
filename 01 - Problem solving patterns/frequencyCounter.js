// Problem solving pattern: Frequency Counter
// checkes whether the two words are anagrams. provided str1 and str2 will always be provided, single word and devoid of special characters

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  if (str1 === str2 || (str1 === "" && str2 === "")) return true;

  const str1Obj = {};
  const str2Obj = {};

  for (let a of str1) {
    str1Obj[a] = (str1Obj[a] || 0) + 1;
  }

  for (let b of str2) {
    str2Obj[b] = (str2Obj[b] || 0) + 1;
  }

  for (let c of Object.keys(str1Obj)) {
    if (str2Obj[c] !== str1Obj[c]) return false;
  }

  return true;
}

// 0(n) time complexity

console.log(isAnagram("racecar", "carrace"));
console.log(isAnagram("bike", "bike"));
console.log(isAnagram("aaz", "zza"));
