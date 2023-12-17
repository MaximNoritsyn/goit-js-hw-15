// elements
const buttonStart = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const amountEl = document.querySelector('#controls input');
const boxesEl = document.querySelector('#boxes');

// functions
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesEl.append(...boxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = '';
}

function handlerCreateBoxes() {
  destroyBoxes();
  createBoxes(amountEl.value);
}

function handlerDestroyBoxes() {
  destroyBoxes();
}

// events
buttonStart.addEventListener('click', handlerCreateBoxes);
buttonDestroy.addEventListener('click', handlerDestroyBoxes);
