// ============================================
// OPERATORS IN JAVASCRIPT - EXAMPLES
// ============================================

// --------------------------------------------
// ARITHMETIC OPERATORS
// --------------------------------------------

let a = 10;
let b = 3;

console.log("=== ARITHMETIC OPERATORS ===");
console.log("a + b =", a + b);    // 13
console.log("a - b =", a - b);    // 7
console.log("a * b =", a * b);    // 30
console.log("a / b =", a / b);    // 3.333...
console.log("a % b =", a % b);    // 1 (remainder)
console.log("a ** b =", a ** b);  // 1000 (10^3)

// Increment and Decrement
let count = 5;
console.log("\n=== INCREMENT/DECREMENT ===");
console.log("count:", count);     // 5
console.log("count++:", count++); // 5 (returns then increments)
console.log("count:", count);     // 6
console.log("++count:", ++count); // 7 (increments then returns)
console.log("count:", count);     // 7

// --------------------------------------------
// ASSIGNMENT OPERATORS
// --------------------------------------------

console.log("\n=== ASSIGNMENT OPERATORS ===");
let score = 100;
console.log("Initial score:", score);

score += 50;  // score = score + 50
console.log("After += 50:", score);  // 150

score -= 20;  // score = score - 20
console.log("After -= 20:", score);  // 130

score *= 2;   // score = score * 2
console.log("After *= 2:", score);   // 260

score /= 4;   // score = score / 4
console.log("After /= 4:", score);   // 65

score %= 10;  // score = score % 10
console.log("After %= 10:", score);  // 5

// --------------------------------------------
// COMPARISON OPERATORS
// --------------------------------------------

console.log("\n=== COMPARISON OPERATORS ===");
console.log("10 > 5:", 10 > 5);         // true
console.log("10 < 5:", 10 < 5);         // false
console.log("10 >= 10:", 10 >= 10);     // true
console.log("5 <= 3:", 5 <= 3);         // false

// Loose vs Strict Equality
console.log("\n=== LOOSE VS STRICT EQUALITY ===");
console.log("5 == '5':", 5 == '5');     // true (type coercion)
console.log("5 === '5':", 5 === '5');   // false (different types)
console.log("5 != '5':", 5 != '5');     // false
console.log("5 !== '5':", 5 !== '5');   // true

// --------------------------------------------
// LOGICAL OPERATORS
// --------------------------------------------

console.log("\n=== LOGICAL OPERATORS ===");

// AND (&&) - both must be true
console.log("true && true:", true && true);     // true
console.log("true && false:", true && false);   // false
console.log("false && true:", false && true);   // false

// OR (||) - at least one must be true
console.log("true || false:", true || false);   // true
console.log("false || false:", false || false); // false

// NOT (!) - inverts boolean
console.log("!true:", !true);                   // false
console.log("!false:", !false);                 // true

// Practical example
let age = 25;
let hasLicense = true;
let hasInsurance = true;

if (age >= 18 && hasLicense && hasInsurance) {
  console.log("Can drive legally");
}

// --------------------------------------------
// STRING OPERATORS
// --------------------------------------------

console.log("\n=== STRING OPERATORS ===");
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

let greeting = "Hello";
greeting += " World";
greeting += "!";
console.log("Greeting:", greeting);

// --------------------------------------------
// TERNARY OPERATOR
// --------------------------------------------

console.log("\n=== TERNARY OPERATOR ===");
let userAge = 20;
let status = userAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cold";
console.log("Weather:", weather);

// --------------------------------------------
// TYPE OPERATORS
// --------------------------------------------

console.log("\n=== TYPE OPERATORS ===");
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof 'hello');
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);

// --------------------------------------------
// OPERATOR PRECEDENCE
// --------------------------------------------

console.log("\n=== OPERATOR PRECEDENCE ===");
let result1 = 5 + 3 * 2;        // 11 (multiplication first)
let result2 = (5 + 3) * 2;      // 16 (parentheses first)
console.log("5 + 3 * 2 =", result1);
console.log("(5 + 3) * 2 =", result2);

let result3 = 10 > 5 && 3 < 7;  // true && true = true
console.log("10 > 5 && 3 < 7:", result3);

// --------------------------------------------
// PRACTICAL EXAMPLES
// --------------------------------------------

console.log("\n=== PRACTICAL EXAMPLES ===");

// Example 1: Calculate discount
let originalPrice = 100;
let discountPercent = 20;
let discountAmount = originalPrice * (discountPercent / 100);
let finalPrice = originalPrice - discountAmount;
console.log(`Original: $${originalPrice}, Discount: ${discountPercent}%, Final: $${finalPrice}`);

// Example 2: Check eligibility
let studentAge = 16;
let hasParentConsent = true;
let canEnroll = studentAge >= 18 || (studentAge >= 16 && hasParentConsent);
console.log("Can enroll:", canEnroll);

// Example 3: Calculate grade
let examScore = 85;
let grade = examScore >= 90 ? 'A' :
            examScore >= 80 ? 'B' :
            examScore >= 70 ? 'C' :
            examScore >= 60 ? 'D' : 'F';
console.log(`Score: ${examScore}, Grade: ${grade}`);

// Example 4: Validate password
let password = "secure123";
let isLongEnough = password.length >= 8;
let hasNumbers = /\d/.test(password);
let isValid = isLongEnough && hasNumbers;
console.log("Password valid:", isValid);
