// Promise Examples

// Creating a promise
let myPromise = new Promise((resolve, reject) => {
  let success = true;
  
  setTimeout(() => {
    if (success) {
      resolve("Operation successful!");
    } else {
      reject("Operation failed!");
    }
  }, 1000);
});

// Using the promise
myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Promise chaining
function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 complete"), 1000);
  });
}

function step2(message) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message + " -> Step 2 complete"), 1000);
  });
}

step1()
  .then(result => step2(result))
  .then(final => console.log(final))
  .catch(error => console.error(error));
