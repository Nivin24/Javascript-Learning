# Final JavaScript Quiz

## Section 1: Basics (10 questions)

1. What are the 7 primitive data types?
2. What is the difference between `let` and `const`?
3. What does `typeof null` return?
4. What is type coercion?
5. What is the difference between `==` and `===`?
6. What are truthy and falsy values?
7. What is the ternary operator?
8. What is the modulus operator (`%`)?
9. What is template literal syntax?
10. What is the spread operator?

## Section 2: Control Flow (5 questions)

11. What is the difference between `while` and `do-while`?
12. What does `break` do in a loop?
13. What does `continue` do?
14. When should you use `switch` vs `if-else`?
15. Can you use `let` in a `for` loop initialization?

## Section 3: Functions (5 questions)

16. What is the difference between function declaration and expression?
17. What are arrow functions?
18. What are default parameters?
19. What are rest parameters?
20. What does a function return if no return statement?

## Section 4: Arrays & Objects (10 questions)

21. How do you add an element to the end of an array?
22. What does `map()` return?
23. What does `filter()` do?
24. What does `reduce()` do?
25. How do you access object properties?
26. What is destructuring?
27. What does `Object.keys()` return?
28. How do you check if an array includes a value?
29. What is the difference between `slice()` and `splice()`?
30. How do you merge two objects?

## Section 5: DOM (5 questions)

31. What does DOM stand for?
32. What is the difference between `textContent` and `innerHTML`?
33. What is the modern way to select elements?
34. How do you add an event listener?
35. What is event bubbling?

## Section 6: Advanced (10 questions)

36. What is a closure?
37. What are the three types of scope?
38. What is hoisting?
39. What does `this` refer to in an object method?
40. Do arrow functions have their own `this`?
41. What is the temporal dead zone?
42. What is a higher-order function?
43. What is function currying?
44. What is memoization?
45. What is the module pattern?

## Section 7: Async (10 questions)

46. What is a callback?
47. What is callback hell?
48. What are the three states of a Promise?
49. What does `.then()` do?
50. What does `.catch()` do?
51. What is `async/await`?
52. Can you use `await` outside an async function?
53. How do you handle errors with async/await?
54. What does `fetch()` return?
55. What is the event loop?

## Answers

1. Number, String, Boolean, Undefined, Null, Symbol, BigInt
2. `let` can be reassigned, `const` cannot
3. "object" (JavaScript bug)
4. Automatic type conversion
5. `==` compares values, `===` compares values and types
6. Truthy: most values; Falsy: false, 0, "", null, undefined, NaN
7. `condition ? valueIfTrue : valueIfFalse`
8. Returns remainder of division
9. Backticks with `${variable}`
10. `...` expands array/object
11. `do-while` executes at least once
12. Exits the loop
13. Skips to next iteration
14. `switch` for discrete values, `if-else` for ranges/complex conditions
15. Yes
16. Declarations are hoisted, expressions are not
17. Shorter function syntax, no own `this`
18. Default values for parameters
19. `...args` collects remaining arguments
20. `undefined`
21. `array.push(element)`
22. New array with transformed elements
23. Returns new array with elements that pass test
24. Reduces array to single value
25. `obj.property` or `obj["property"]`
26. Extracting values from arrays/objects
27. Array of object keys
28. `array.includes(value)`
29. `slice` doesn't modify original, `splice` does
30. `{...obj1, ...obj2}` or `Object.assign()`
31. Document Object Model
32. `textContent` is text only, `innerHTML` parses HTML
33. `querySelector` / `querySelectorAll`
34. `element.addEventListener("event", function)`
35. Event propagates up through ancestors
36. Function accessing outer function variables
37. Global, function, block
38. Moving declarations to top of scope
39. The object that owns the method
40. No, they inherit from outer scope
41. Time between declaration and initialization for let/const
42. Function that takes/returns functions
43. Transforming function with multiple args into sequence of functions
44. Caching function results
45. Using closures to create private variables
46. Function passed as argument
47. Deeply nested callbacks
48. Pending, Fulfilled, Rejected
49. Handles successful promise resolution
50. Handles promise rejection
51. Syntactic sugar for promises
52. No (except top-level in modules)
53. try/catch blocks
54. Promise
55. Mechanism for handling async operations
