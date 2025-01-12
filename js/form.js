document.getElementById("booking-form").addEventListener("input", function() { 
    validateForm();
});

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    handleFormSubmission();
});

function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const submitButton = document.getElementById("submit-btn");

    let isValid = true;

    const nameRegex = /^[A-Za-zА-Яа-яЁё][A-Za-zА-Яа-яЁё'-]+$/;
    if (!nameRegex.test(firstName) || firstName.length < 3) {
        isValid = false;
        document.getElementById("first-name").style.borderColor = "red";
    } else {
        document.getElementById("first-name").style.borderColor = "";
    }

    if (!nameRegex.test(lastName) || lastName.length < 3) {
        isValid = false;
        document.getElementById("last-name").style.borderColor = "red";
    } else {
        document.getElementById("last-name").style.borderColor = "";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        document.getElementById("email").style.borderColor = "red";
    } else {
        document.getElementById("email").style.borderColor = "";
    }

    const phoneRegex = /^(?:\+3736\d{7}|\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2})$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        document.getElementById("phone").style.borderColor = "red";
    } else {
        document.getElementById("phone").style.borderColor = "";
    }

    if (subject.trim() === "") {
        isValid = false;
        document.getElementById("subject").style.borderColor = "red";
    } else {
        document.getElementById("subject").style.borderColor = "";
    }

    if (isValid) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

function handleFormSubmission() {
    alert("Ваше сообщение отправлено. В ближайшее время мы с вами свяжемся.");

    document.getElementById("booking-form").reset();

    document.getElementById("submit-btn").disabled = true;
}
