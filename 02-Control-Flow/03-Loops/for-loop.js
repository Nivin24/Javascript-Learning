// ============================================
// FOR LOOP - EXAMPLES
// ============================================

// Basic for loop syntax:
// for (initialization; condition; increment) {
//   // code to repeat
// }

// Example 1: Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Example 2: Count from 10 to 1 (countdown)
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Example 3: Even numbers from 0 to 10
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// Example 4: Multiplication table
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// Example 5: Sum of numbers 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum); // 5050

// Example 6: Loop through an array
let fruits = ["apple", "banana", "cherry", "date"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Example 7: Nested loops (multiplication table)
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// Example 8: Pattern printing
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}

// Example 9: Factorial calculation
let n = 5;
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`${n}! = ${factorial}`); // 120

// Example 10: Skip even numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Only odd numbers
}

// Example 11: Break out of loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Stop when i is 5
    }
    console.log(i); // 1, 2, 3, 4
}
