let counterValue = 0;

// elements
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// functions
function putValue() {
    valueEl.textContent = counterValue;
}

function increment() {
    counterValue += 1;
    putValue();
}

function decrement() {
    counterValue -= 1;
    putValue();
}

// events
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);