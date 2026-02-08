// ============================================
// SWITCH STATEMENT - EXAMPLES
// ============================================

// Example 1: Day of the week
let day = 5;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Friday

// Example 2: Grade evaluation
let grade = 'A';

switch (grade) {
    case 'A':
        console.log("Excellent! 90-100%");
        break;
    case 'B':
        console.log("Good! 80-89%");
        break;
    case 'C':
        console.log("Fair! 70-79%");
        break;
    case 'D':
        console.log("Pass! 60-69%");
        break;
    case 'F':
        console.log("Fail! Below 60%");
        break;
    default:
        console.log("Invalid grade");
}

// Example 3: Calculator
let num1 = 10;
let num2 = 5;
let operator = '+';
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    case '%':
        result = num1 % num2;
        break;
    default:
        result = "Invalid operator";
}

console.log(`${num1} ${operator} ${num2} = ${result}`);

// Example 4: Multiple cases
let month = 2;
let season;

switch (month) {
    case 12:
    case 1:
    case 2:
        season = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        season = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        season = "Summer";
        break;
    case 9:
    case 10:
    case 11:
        season = "Fall";
        break;
    default:
        season = "Invalid month";
}

console.log(`Month ${month} is in ${season}`);

// Example 5: Traffic light
let light = "yellow";

switch (light) {
    case "red":
        console.log("STOP!");
        break;
    case "yellow":
        console.log("SLOW DOWN!");
        break;
    case "green":
        console.log("GO!");
        break;
    default:
        console.log("Invalid light color");
}

// Example 6: Menu selection
let choice = 2;

switch (choice) {
    case 1:
        console.log("You selected: New Game");
        break;
    case 2:
        console.log("You selected: Load Game");
        break;
    case 3:
        console.log("You selected: Settings");
        break;
    case 4:
        console.log("You selected: Exit");
        break;
    default:
        console.log("Invalid choice");
}
