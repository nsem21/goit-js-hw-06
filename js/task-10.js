function getRandomHexColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
}
const control = document.querySelector('#controls');
const userInput = control.querySelector('input');
const boxes = document.querySelector('#boxes');

const renderBtn = control.querySelector('button[data-create]');
const destroyBtn = control.querySelector('button[data-destroy]')



const createBoxes = (amount) => {
    destroyBoxes();
    let size = 30;
    const itemsList = [];
    // recursion, which replaced loop
    function createDiv(arr, n) {
        if (n <= 0) {
            return arr;
        } else {
            const box = document.createElement('div');
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.marginBottom = '10px';
            box.style.backgroundColor = `#${getRandomHexColor()}`;
            size += 10;
            arr.push(box)
            return (createDiv(arr, n - 1).concat(arr));
        }
    }

    const newBoxes = createDiv(itemsList, amount);

    boxes.prepend(...newBoxes);
}

const destroyBoxes = () => {
    while (boxes.firstChild) {
        boxes.removeChild(boxes.lastChild);
    }

}

renderBtn.addEventListener('click', () => createBoxes(userInput.value));
destroyBtn.addEventListener('click', () => destroyBoxes());