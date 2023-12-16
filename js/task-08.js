//elements
const loginFormEl = document.querySelector('.login-form');

//functions
function loginFormFunc(event) {
    event.preventDefault();
    const elTarget = event.target;
    const {email, password} = elTarget.elements;
    if (email.value === '' || password.value === '') {
        let message = '';
        if (email.value === '') {
            message += 'email ';
        }
        if (password.value === '') {
            message += 'password ';
        }
        alert(`Please, enter ${message}`);
    } else {
        const user = {
            email: email.value,
            password: password.value,
        };
        console.log(user);
        elTarget.reset();
    }
}

//events
loginFormEl.addEventListener('submit', loginFormFunc);