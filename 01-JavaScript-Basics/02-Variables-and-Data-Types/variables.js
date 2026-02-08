// ============================================
// VARIABLES AND DATA TYPES - EXAMPLES
// ============================================

// --------------------------------------------
// DECLARING VARIABLES
// --------------------------------------------

// Using let (can be reassigned)
let studentName = "Alice";
console.log(studentName);  // Alice

studentName = "Bob";       // Reassigning is allowed
console.log(studentName);  // Bob

// Using const (cannot be reassigned)
const PI = 3.14159;
console.log(PI);           // 3.14159

// PI = 3.14;              // ❌ Error: Assignment to constant variable

// Using var (old style, avoid)
var oldVariable = "I'm old-fashioned";

// --------------------------------------------
// NUMBER TYPE
// --------------------------------------------

let age = 25;
let price = 99.99;
let temperature = -5;
let billion = 1e9;         // 1,000,000,000

console.log(age);          // 25
console.log(price);        // 99.99
console.log(billion);      // 1000000000

// Special numeric values
let infinity = Infinity;
let notANumber = NaN;

console.log(10 / 0);       // Infinity
console.log("hello" / 2);  // NaN (Not a Number)

// --------------------------------------------
// STRING TYPE
// --------------------------------------------

let firstName = 'John';
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);     // John Doe

// Template literals (ES6) - use backticks
let greeting = `Hello, ${firstName}!`;
console.log(greeting);     // Hello, John!

let multiLine = `This is
a multi-line
string`;
console.log(multiLine);

// --------------------------------------------
// BOOLEAN TYPE
// --------------------------------------------

let isStudent = true;
let hasGraduated = false;

console.log(isStudent);    // true
console.log(hasGraduated); // false

// Booleans are often used in conditions
if (isStudent) {
    console.log("You are a student");
}

// --------------------------------------------
// UNDEFINED TYPE
// --------------------------------------------

let notAssigned;
console.log(notAssigned);  // undefined

let explicitUndefined = undefined;
console.log(explicitUndefined);  // undefined

// --------------------------------------------
// NULL TYPE
// --------------------------------------------

let emptyValue = null;
console.log(emptyValue);   // null

// null represents intentional absence of value
let user = null;  // No user logged in

// --------------------------------------------
// TYPEOF OPERATOR
// --------------------------------------------

console.log(typeof 42);              // "number"
console.log(typeof "hello");         // "string"
console.log(typeof true);            // "boolean"
console.log(typeof undefined);       // "undefined"
console.log(typeof null);            // "object" (JavaScript quirk!)
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof [1, 2, 3]);       // "object" (arrays are objects)
console.log(typeof function () { });   // "function"

// --------------------------------------------
// TYPE COERCION (Automatic Conversion)
// --------------------------------------------

// String concatenation
console.log("5" + 3);      // "53" (number becomes string)
console.log("Hello" + 5);  // "Hello5"

// Arithmetic operations
console.log("10" - 5);     // 5 (string becomes number)
console.log("10" * 2);     // 20
console.log("10" / 2);     // 5

// Boolean coercion
console.log(true + 1);     // 2 (true becomes 1)
console.log(false + 1);    // 1 (false becomes 0)

// Comparison coercion
console.log("5" == 5);     // true (loose equality, types converted)
console.log("5" === 5);    // false (strict equality, no conversion)

// --------------------------------------------
// VARIABLE NAMING EXAMPLES
// --------------------------------------------

// ✅ Valid names
let userName = "Alice";
let user_name = "Bob";
let $price = 100;
let _privateVar = "secret";
let user2 = "Charlie";

// ❌ Invalid names (commented out to avoid errors)
// let 2users = 10;        // Cannot start with number
// let user-name = "Dan";  // Cannot use hyphen
// let let = 5;            // Cannot use reserved keyword

// --------------------------------------------
// CONST WITH OBJECTS
// --------------------------------------------

// const prevents reassignment, but object properties can change
const person = {
    name: "Alice",
    age: 25
};

person.age = 26;           // ✅ Allowed (modifying property)
console.log(person.age);   // 26

// person = {};            // ❌ Error: cannot reassign const

// --------------------------------------------
// PRACTICAL EXAMPLES
// --------------------------------------------

// Example 1: User profile
const username = "john_doe";
let loginCount = 0;
let isLoggedIn = false;

loginCount = loginCount + 1;
isLoggedIn = true;

console.log(`User: ${username}, Logins: ${loginCount}, Status: ${isLoggedIn}`);

// Example 2: Shopping cart
let itemName = "Laptop";
let itemPrice = 999.99;
let quantity = 2;
let totalPrice = itemPrice * quantity;

console.log(`Item: ${itemName}`);
console.log(`Price: $${itemPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Total: $${totalPrice}`);

// Example 3: Temperature converter
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C = ${fahrenheit}°F`);

// --------------------------------------------
// TRY IT YOURSELF:
// 1. Create variables for your name, age, and favorite color
// 2. Use template literals to create a greeting message
// 3. Experiment with typeof on different values
// 4. Try mixing different data types and observe coercion
// --------------------------------------------
