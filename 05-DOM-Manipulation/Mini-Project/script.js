// Counter App Logic

let count = 0;
const counterDisplay = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

function updateDisplay() {
  counterDisplay.textContent = count;
  
  // Change color based on value
  if (count > 0) {
    counterDisplay.style.color = "#2ecc71";
  } else if (count < 0) {
    counterDisplay.style.color = "#e74c3c";
  } else {
    counterDisplay.style.color = "#667eea";
  }
}

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
