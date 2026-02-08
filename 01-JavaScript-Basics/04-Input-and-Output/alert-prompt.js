// ============================================
// ALERT AND PROMPT EXAMPLES
// ============================================

// Example 1: Simple alert
alert("Welcome to JavaScript!");

// Example 2: Alert with variable
let siteName = "My Website";
alert("Welcome to " + siteName);

// Example 3: Simple prompt
let userName = prompt("What is your name?");
alert("Hello, " + userName + "!");

// Example 4: Prompt with default value
let favoriteColor = prompt("What is your favorite color?", "blue");
console.log("Your favorite color is: " + favoriteColor);

// Example 5: Prompt for number (requires conversion)
let ageString = prompt("How old are you?");
let age = Number(ageString);
console.log("Next year you will be: " + (age + 1));

// Example 6: Simple calculator
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let sum = num1 + num2;
alert("The sum is: " + sum);

// Example 7: Confirm dialog
let wantsToPlay = confirm("Do you want to play a game?");
if (wantsToPlay) {
  alert("Great! Let\'s play!");
} else {
  alert("Maybe next time!");
}

// Example 8: User profile builder
let name = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:"));
let city = prompt("Enter your city:");

let profile = `Name: ${name}\nAge: ${userAge}\nCity: ${city}`;
alert("Your Profile:\n" + profile);

// Example 9: Temperature converter
let celsius = Number(prompt("Enter temperature in Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C = " + fahrenheit + "°F");

// Example 10: Greeting based on time
let hour = Number(prompt("Enter current hour (0-23):"));
let greeting;

if (hour < 12) {
  greeting = "Good morning!";
} else if (hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

alert(greeting);
