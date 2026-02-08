# Tricky JavaScript Questions

## 1. What is the output?

```javascript
console.log(typeof null);
```

**Answer:** "object" (This is a known JavaScript bug)

## 2. What is the output?

```javascript
console.log(0.1 + 0.2 === 0.3);
```

**Answer:** false (Floating-point precision issue)

## 3. What is the output?

```javascript
console.log([] + []);
```

**Answer:** "" (empty string)

## 4. What is the output?

```javascript
console.log([] + {});
```

**Answer:** "[object Object]"

## 5. What is the output?

```javascript
console.log(!!"false");
```

**Answer:** true (non-empty string is truthy)

## 6. What is the output?

```javascript
let a = [1, 2, 3];
let b = a;
b.push(4);
console.log(a);
```

**Answer:** [1, 2, 3, 4] (arrays are passed by reference)

## 7. What is the output?

```javascript
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
```

**Answer:** true, false

## 8. What is the output?

```javascript
console.log(typeof NaN);
```

**Answer:** "number"

## 9. What is the output?

```javascript
console.log(parseInt("10+2"));
```

**Answer:** 10

## 10. What is the output?

```javascript
let x = 10;
function test() {
  console.log(x);
  let x = 20;
}
test();
```

**Answer:** ReferenceError (temporal dead zone)
