// ============================================
// WHILE LOOP - EXAMPLES
// ============================================

// Basic while loop syntax:
// while (condition) {
//   // code to repeat
// }

// Example 1: Count from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Example 2: Countdown
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}
console.log("Blast off!");

// Example 3: Sum until threshold
let total = 0;
let num = 1;
while (total < 100) {
    total += num;
    num++;
}
console.log("Total:", total);
console.log("Numbers added:", num - 1);

// Example 4: User input simulation (would use prompt in browser)
let password = "";
let attempts = 0;
let correctPassword = "secret123";

// Simulated - in real code, use prompt()
password = "wrong";
while (password !== correctPassword && attempts < 3) {
    console.log("Incorrect password. Try again.");
    attempts++;
    // password = prompt("Enter password:");
}

// Example 5: Find first number divisible by 7 and 13
let number = 1;
while (true) {
    if (number % 7 === 0 && number % 13 === 0) {
        console.log("Found:", number);
        break;
    }
    number++;
}

// Example 6: Reverse a number
let original = 12345;
let reversed = 0;
while (original > 0) {
    let digit = original % 10;
    reversed = reversed * 10 + digit;
    original = Math.floor(original / 10);
}
console.log("Reversed:", reversed); // 54321

// Example 7: Keep doubling until > 1000
let value = 1;
while (value <= 1000) {
    console.log(value);
    value *= 2;
}
