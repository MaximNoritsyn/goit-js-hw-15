// elements
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

//functions
function fontSizeControlFunc(event) {
    text.style.fontSize = event.target.value + 'px';
}

//events
fontSizeControl.addEventListener('input', fontSizeControlFunc);