const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

control.addEventListener('input', (e) => {
    text.style.fontSize = `${e.currentTarget.value}px`;
});