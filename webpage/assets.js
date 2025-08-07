document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPhoneValid = validatePhone();
  const isAgeValid = validateAge();

  if (isNameValid && isEmailValid && isPhoneValid && isAgeValid) {
    alert("Registration successful!");
    this.reset();
    resetStyles();
  }
});

function validateName() {
  const name = document.getElementById("name");
  const error = document.getElementById("nameError");
  if (name.value.trim() === "") {
    error.textContent = "Name is required.";
    name.classList.add("invalid");
    return false;
  }
  error.textContent = "";
  name.classList.remove("invalid");
  name.classList.add("valid");
  return true;
}

function validateEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("emailError");
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    error.textContent = "Enter a valid email.";
    email.classList.add("invalid");
    return false;
  }
  error.textContent = "";
  email.classList.remove("invalid");
  email.classList.add("valid");
  return true;
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const error = document.getElementById("phoneError");
  const regex = /^[0-9]{10}$/;
  if (!regex.test(phone.value)) {
    error.textContent = "Enter a valid 10-digit phone number.";
    phone.classList.add("invalid");
    return false;
  }
  error.textContent = "";
  phone.classList.remove("invalid");
  phone.classList.add("valid");
  return true;
}

function validateAge() {
  const age = document.getElementById("age");
  const error = document.getElementById("ageError");
  const ageValue = parseInt(age.value);

  if (!age.value || isNaN(ageValue)) {
    error.textContent = "Please enter your age.";
    age.classList.add("invalid");
    return false;
  } else if (ageValue < 18) {
    error.textContent = "You must be 18 or older to register.";
    age.classList.add("invalid");
    alert("Sorry, you must be at least 18 years old to register.");
    return false;
  }

  error.textContent = "";
  age.classList.remove("invalid");
  age.classList.add("valid");
  return true;
}

function resetStyles() {
  document.querySelectorAll("input").forEach((input) => {
    input.classList.remove("valid", "invalid");
  });
  document.querySelectorAll(".error").forEach((err) => {
    err.textContent = "";
  });
}
