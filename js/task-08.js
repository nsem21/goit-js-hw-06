const form = document.querySelector('.login-form');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const {
        elements: { email, password }
    } = e.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
        return;
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    e.currentTarget.reset();
})