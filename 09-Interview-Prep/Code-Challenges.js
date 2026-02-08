// JavaScript Code Challenges

// Challenge 1: Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Challenge 2: Check if palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

// Challenge 3: Find largest number in array
function findMax(arr) {
  return Math.max(...arr);
}

// Challenge 4: Remove duplicates from array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Challenge 5: Fibonacci sequence
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Challenge 6: Factorial
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// Challenge 7: Count vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Challenge 8: Capitalize first letter of each word
function capitalizeWords(str) {
  return str.split(" ").map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
}

// Challenge 9: Find longest word
function findLongestWord(str) {
  let words = str.split(" ");
  return words.reduce((longest, word) => 
    word.length > longest.length ? word : longest
  );
}

// Challenge 10: Sum of array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Challenge 11: Flatten nested array
function flattenArray(arr) {
  return arr.flat(Infinity);
}

// Challenge 12: Check if anagram
function isAnagram(str1, str2) {
  let clean1 = str1.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  let clean2 = str2.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");
  return clean1 === clean2;
}

// Challenge 13: Find missing number in sequence
function findMissing(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

// Challenge 14: Debounce function
function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

// Challenge 15: Deep clone object
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
