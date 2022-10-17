const userInput = document.querySelector('#validation-input');
const checkLength = Number(userInput.getAttribute('data-length'));

function toChangeBorder(validationCode) {
    if (validationCode === 'valid') {
        userInput.classList.remove('invalid');
        userInput.classList.add('valid');
        return;
    } else if (validationCode === 'invalid') {
        userInput.classList.remove('valid');
        userInput.classList.add('invalid');
        return;
    } else {
        userInput.classList.remove('valid');
        userInput.classList.remove('invalid');
    }
}

const toValidate = (newEvent) => {
    const measurement = newEvent.currentTarget.value.length;
    if (measurement === checkLength) {
        toChangeBorder('valid');

    } else {
        toChangeBorder('invalid');
    }
}
userInput.addEventListener('focus', toChangeBorder);
userInput.addEventListener('blur', toValidate);