// Closure Examples

// Example 1: Basic closure
function makeGreeting(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

let sayHello = makeGreeting("Hello");
let sayHi = makeGreeting("Hi");

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHi("Bob"));      // Hi, Bob!

// Example 2: Counter with closure
function createCounter() {
  let count = 0;
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

let counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// Example 3: Function factory
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
