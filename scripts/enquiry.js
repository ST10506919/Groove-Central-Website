const form = document.getElementById("enquiry-form");
const nameInput = document.getElementById("full-name");
const emailInput = document.getElementById("contact-email");
const phoneInput = document.getElementById("contact-phone");
const typeInput = document.getElementById("message");
const messageInput = document.getElementById("enquiry-message");

function setError(input, error) {
    let errorMessage = document.getElementById(input.id + "-error");
    if (!errorMessage) {
        errorMessage = document.createElement("span");
        errorMessage.id = input.id + "-error";
        errorMessage.style.color = "red";
        errorMessage.style.display = "flex";
        input.insertAdjacentElement("afterend", errorMessage);
    }
    errorMessage.textContent = error;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    //Validate name
    if (nameInput.value.trim() === "") {
        setError(nameInput, "Please enter your full name.");
        valid = false;
    } else {
        setError(nameInput, "");
    }

    //validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) {
        setError(emailInput, "Please enter a valid email address (e.g. name@example.com)");
        valid = false;
    } else {
        setError(emailInput, "");
    }

    const phoneDigits = phoneInput.value.replace(/[\s-]/g, "");
    if (!/^(\+27|0)\d{9}$/.test(phoneDigits)) {
        setError(phoneInput, "Phone number must be a valid South African number (e.g. +27111234567 or 0111234567).");
        valid = false;
    } else {
        setError(phoneInput, "");
    }

    //validate message type
    if (typeInput.selectedOptions[0].disabled) {
        setError(typeInput, "Please select a type of message.");
        valid = false;
    } else {
        setError(typeInput, "");
    }

    //validate message
    if (messageInput.value.trim() === "") {
        setError(messageInput, "Please type your message.");
        valid = false;
    } else {
        setError(messageInput, "");
    }

    if (valid) {
        alert("Thank you! Your enquiry has been sent.");
        form.reset();
    }
    

});