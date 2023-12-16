//elements
const inputValidation = document.querySelector('#validation-input');

//functions
function inputValidationFunc(event) {
    const curEl = event.target;
    if (curEl.value.length === Number(curEl.dataset.length)) {
        curEl.classList.add('valid');
        curEl.classList.remove('invalid');
    } else {
        curEl.classList.add('invalid');
        curEl.classList.remove('valid');
    }
}

//events
inputValidation.addEventListener('blur', inputValidationFunc);