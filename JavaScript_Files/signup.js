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

    const firstName = document.getElementById("firstname").value.trim();
    const namePattern = /^[a-zA-Z]{3,15}$/;
    if (firstName === "") {
        document.getElementById("names-error").innerText = "Pls enter your first name";
        document.getElementById("firstname").style = "border: 1px solid red";
        isValid = false;
    } else if (!namePattern.test(firstName)) {
        document.getElementById("names-error").innerText = "Only Alphabets are allowed in Name";
        document.getElementById("firstname").style = "border: 1px solid red";
        isValid = false;
    }

    const lastName = document.getElementById("lastname").value.trim();
    if (lastName === "") {
        document.getElementById("names-error").innerText = "Pls enter your last name";
        document.getElementById("lastname").style = "border: 1px solid red";
        isValid = false;
    } else if (!namePattern.test(lastName)) {
        document.getElementById("names-error").innerText = "Only Alphabets are allowed in Name";
        document.getElementById("lastname").style = "border: 1px solid red";
        isValid = false;
    }

    if (firstName === "" && lastName === "") {
        document.getElementById("names-error").innerText = "Pls enter your first & last name";
        document.getElementById("firstname").style = "border: 1px solid red";
        document.getElementById("lastname").style = "border: 1px solid red";
        isValid = false;
    }

    const password = document.getElementById("password").value.trim();
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (password === "") {
        document.getElementById("password-error").innerText = "Enter your password";
        document.getElementById("password").style = "border: 1px solid red";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        document.getElementById("password-error").innerText = "Invalid Password Format";
        document.getElementById("password").style = "border: 1px solid red";
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

    if (isValid === true) {
        location.href = 'home.html';
    }
    return isValid;
}