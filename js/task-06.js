const userInput = document.querySelector('#validation-input');
const checkLength = Number(userInput.getAttribute('data-length'));

const toValidate = (newEvent) => {
    const measurement = newEvent.currentTarget.value.length;
    if (measurement === checkLength) {
        //userInput.classList.remove('valid')
        userInput.classList.remove('invalid')
        userInput.classList.add('valid')

    } else {
        userInput.classList.remove('valid')
            //userInput.classList.remove('invalid')
        userInput.classList.add('invalid')
    }
}
userInput.addEventListener('change', toValidate);