// Array Methods

let numbers = [1, 2, 3, 4, 5];

// map - transform each element
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - keep elements that pass test
let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - combine all elements
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15

// find - first element that passes test
let found = numbers.find(n => n > 3);
console.log(found); // 4

// some - check if any element passes test
let hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every - check if all elements pass test
let allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// sort
let unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
unsorted.sort((a, b) => a - b);
console.log(unsorted); // [1, 1, 2, 3, 4, 5, 6, 9]
