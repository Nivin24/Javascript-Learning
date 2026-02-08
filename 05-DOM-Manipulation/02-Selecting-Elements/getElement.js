// getElementById, getElementsByClassName, getElementsByTagName

// getElementById - returns single element
let header = document.getElementById("header");
console.log(header);

// getElementsByClassName - returns HTMLCollection
let items = document.getElementsByClassName("item");
console.log(items.length);
for (let i = 0; i < items.length; i++) {
  console.log(items[i].textContent);
}

// getElementsByTagName - returns HTMLCollection
let paragraphs = document.getElementsByTagName("p");
Array.from(paragraphs).forEach(p => {
  console.log(p.textContent);
});
