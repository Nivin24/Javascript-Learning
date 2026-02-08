// Scope Examples

// Global scope
let globalVar = "Global";

function testScope() {
  // Function scope
  let functionVar = "Function";
  
  if (true) {
    // Block scope
    let blockVar = "Block";
    console.log(globalVar);   // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar);    // Accessible
  }
  
  // console.log(blockVar); // Error!
}

// Scope chain
let x = 1;

function outer() {
  let y = 2;
  
  function inner() {
    let z = 3;
    console.log(x, y, z); // 1 2 3
  }
  
  inner();
}

outer();
