let counterValue = Number(document.querySelector('#value').textContent);
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');

const increment = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}
const decrement = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
}

plusBtn.addEventListener('click', increment)

minusBtn.addEventListener('click', decrement)