const strings = ["a", "b", "c", "d"];
// 4x4 = 16 bytes of storage

// accessing
strings[1]; // O(1)

// push
strings.push("e"); // O(1)

// popping
strings.pop(); // O(1)
strings.pop();

// unshifting
strings.unshift("x"); // O(n)

// splicing
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
