// 1. Create variables and select elements
const counterEl = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");

let currentCount = 0;

// 2. Create functions
function increment() {
    currentCount++;
    updateDisplay();
}

function decrement() {
    currentCount--;
    updateDisplay();
}

function reset() {
    currentCount = 0;
    updateDisplay();
}

function updateDisplay() {
    counterEl.innerHTML = currentCount;
    if (currentCount > 0) {
        counterEl.style.color = "#4CAF50";
    }
    else if (currentCount < 0) {
        counterEl.style.color = "#f44336";
    }
    else {
        counterEl.style.color = "#666";
    }
}

// 3. Attach functions to buttons
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

// 4. Run updateDisplay() on initialization
updateDisplay();