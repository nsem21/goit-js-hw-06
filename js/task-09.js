const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorNotification = document.querySelector(".color");
colorNotification.textContent = "#ffffff"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor(color) {
    body.style.backgroundColor = color;
}

function notificationOnColor(color) {
    colorNotification.textContent = color;
}

function onClick() {
    const newColor = getRandomHexColor();
    changeBodyColor(newColor);
    notificationOnColor(newColor);
}

button.addEventListener("click", onClick);