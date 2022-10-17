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
    const user = {
        email: email.value,
        password: password.value,
    }
    console.log(user);
    e.currentTarget.reset();
})