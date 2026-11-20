function validate() {
    let isValid = true;
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("email-error").innerText = "Enter your email";
        document.getElementById("email").style = "border: 1px solid red";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerText = "Invalid email Format";
        document.getElementById("email").style = "border: 1px solid red";
        isValid = false;
    }

    const number = document.getElementById("number").value.trim();
    const numberPattern = /^[0-9]{10}$/;
    if (number === "") {
        document.getElementById("number-error").innerText = "Enter your Mobile no.";
        document.getElementById("number").style = "border: 1px solid red";
        isValid = false;
    } else if (!numberPattern.test(number)) {
        document.getElementById("number-error").innerText = "Only 10 digits are allowed in Mobile no.";
        document.getElementById("number").style = "border: 1px solid red";
        isValid = false;
    }

    const password = document.getElementById("password").value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;;
    if (password === "") {
        document.getElementById("password-error").innerText = "Enter new password";
        document.getElementById("password").style = "border: 1px solid red";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("password-error").innerText = "Invalid Password Format";
        document.getElementById("password").style = "border: 1px solid red";
        isValid = false;
    }

    const confirmPassword = document.getElementById("confirm-password").value.trim();
    if (confirmPassword === "") {
        document.getElementById("confirm-password-error").innerText = "Enter confirm password";
        document.getElementById("confirm-password").style = "border: 1px solid red";
        isValid = false;
    } else if (!(confirmPassword===password)) {
        document.getElementById("confirm-password-error").innerText = "Confirm password doesn't match";
        document.getElementById("confirm-password").style = "border: 1px solid red";
        isValid = false;
    }

    if (isValid === true) {
        location.href = 'home.html';
    }
    return isValid;
}