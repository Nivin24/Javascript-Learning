// ============================================
// CONDITIONAL STATEMENTS - EXAMPLES
// ============================================

// Example 1: Simple if
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}

// Example 2: if-else
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's cool outside!");
}

// Example 3: if-else if-else
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Example 4: Multiple conditions with AND
let userAge = 25;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
  console.log("You can drive!");
}

// Example 5: Multiple conditions with OR
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today!");
}

// Example 6: Nested if statements
let hour = 14;
let isWorkDay = true;

if (isWorkDay) {
  if (hour < 12) {
    console.log("Morning work session");
  } else if (hour < 17) {
    console.log("Afternoon work session");
  } else {
    console.log("Evening - time to go home");
  }
} else {
  console.log("Enjoy your day off!");
}

// Example 7: Truthy and Falsy
let username = "Alice";

if (username) {
  console.log("Welcome, " + username);
} else {
  console.log("Please log in");
}

// Example 8: Checking for empty string
let input = "";

if (input === "") {
  console.log("Input is empty");
}

// Example 9: Number comparison
let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(num1 + " is greater");
} else if (num1 < num2) {
  console.log(num2 + " is greater");
} else {
  console.log("Numbers are equal");
}

// Example 10: Login validation
let password = "secret123";
let confirmPassword = "secret123";

if (password === confirmPassword) {
  console.log("Passwords match!");
} else {
  console.log("Passwords don't match!");
}
