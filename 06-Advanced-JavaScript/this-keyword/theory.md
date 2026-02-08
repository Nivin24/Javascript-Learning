# The `this` Keyword

## What is `this`?

`this` refers to the object that is executing the current function.

## Rules for `this`

### 1. Global Context
```javascript
console.log(this); // Window (browser) or global (Node.js)
```

### 2. Object Method
```javascript
let person = {
  name: "Alice",
  greet() {
    console.log(this.name); // "Alice"
  }
};
```

### 3. Constructor Function
```javascript
function Person(name) {
  this.name = name;
}

let p = new Person("Bob");
console.log(p.name); // "Bob"
```

### 4. Arrow Functions
Arrow functions don't have their own `this`.

```javascript
let obj = {
  name: "Charlie",
  greet: () => {
    console.log(this.name); // undefined (inherits from outer scope)
  }
};
```

## Key Takeaways

✅ `this` depends on how function is called  
✅ In methods, `this` is the object  
✅ Arrow functions inherit `this`  
✅ Use bind/call/apply to set `this`  
