// elements
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
const fotnSizeEl = document.querySelector('#font-size-control');


//functions
function fontSizeControlFunc() {
    text.style.fontSize = fotnSizeEl.value + 'px';
}

//call functions
fontSizeControlFunc();

//events
fontSizeControl.addEventListener('input', fontSizeControlFunc);