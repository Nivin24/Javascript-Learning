// querySelector and querySelectorAll (Modern, Recommended)

// querySelector - returns first match
let firstItem = document.querySelector(".item");
let firstParagraph = document.querySelector("p");
let specificElement = document.querySelector("#header .title");

// querySelectorAll - returns NodeList
let allItems = document.querySelectorAll(".item");
allItems.forEach(item => {
  console.log(item.textContent);
});

// CSS selectors work!
let evenItems = document.querySelectorAll(".item:nth-child(even)");
let links = document.querySelectorAll("a[href^='https']");
