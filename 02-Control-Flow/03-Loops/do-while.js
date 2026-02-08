// ============================================
// DO-WHILE LOOP - EXAMPLES
// ============================================

// Basic do-while syntax:
// do {
//   // code to repeat
// } while (condition);

// Key difference: Executes at least once, even if condition is false

// Example 1: Basic do-while
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

// Example 2: Executes at least once
let x = 10;
do {
    console.log("This runs once even though x > 5");
} while (x < 5);

// Example 3: Menu system
let choice;
do {
    console.log("\n=== MENU ===");
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");

    // In real code: choice = prompt("Enter choice:");
    choice = 3; // Simulated

    if (choice === 1) {
        console.log("Starting game...");
    } else if (choice === 2) {
        console.log("Opening settings...");
    }

} while (choice !== 3);
console.log("Goodbye!");

// Example 4: Validation loop
let age;
do {
    // In real code: age = Number(prompt("Enter age (1-120):"));
    age = 25; // Simulated

    if (age < 1 || age > 120) {
        console.log("Invalid age!");
    }
} while (age < 1 || age > 120);
console.log("Valid age:", age);

// Example 5: Dice roll until 6
let roll;
let rolls = 0;
do {
    roll = Math.floor(Math.random() * 6) + 1;
    rolls++;
    console.log("Rolled:", roll);
} while (roll !== 6);
console.log("Got 6 in", rolls, "rolls!");
