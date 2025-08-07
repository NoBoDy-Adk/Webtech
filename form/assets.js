document.getElementById("registrationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nameValid = validateName();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  const ageValid = validateAge();

  if (nameValid && emailValid && phoneValid && ageValid) {
    showSuccessPopup();
  }
});

function validateName() {
  const name = document.getElementById("name");
  const error = document.getElementById("nameError");
  if (!name.value.trim()) {
    error.textContent = "Name is required.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");
  const regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!regex.test(email.value.trim())) {
    error.textContent = "Invalid email format.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const error = document.getElementById("phoneError");
  const regex = /^\d{10}$/;
  if (!regex.test(phone.value.trim())) {
    error.textContent = "Phone must be 10 digits.";
    return false;
  }
  error.textContent = "";
  return true;
}

function validateAge() {
  const age = document.getElementById("age");
  const error = document.getElementById("ageError");
  const ageValue = parseInt(age.value);

  if (!age.value || isNaN(ageValue)) {
    error.textContent = "Please enter your age.";
    return false;
  } else if (ageValue < 18) {
    error.textContent = "You must be 18 or older.";
    return false;
  }

  error.textContent = "";
  return true;
}

function showSuccessPopup() {
    const successPopup = document.getElementById("successContainer");
    successPopup.classList.add("visible");
    const closeIcon = successPopup.querySelector(".close-icon");
    closeIcon.addEventListener("click", () => {
        successPopup.classList.remove("visible");
        document.getElementById("registrationForm").reset();
    }, { once: true });
}