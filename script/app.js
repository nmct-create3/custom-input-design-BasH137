"use strict";

let email = {},
  password = {},
  signInButton;

// Define the function to handle the password switcher
const handlePasswordSwitcher = function () {
  const passwordInput = document.querySelector(".js-password-input");
  const passwordToggleCheckbox = document.querySelector(
    ".js-password-toggle-checkbox"
  );

  // Add an event listener to the checkbox
  if (passwordInput !== null && passwordToggleCheckbox !== null) {
    passwordToggleCheckbox.addEventListener("change", function () {
      // Check the state of the checkbox
      if (passwordToggleCheckbox.checked) {
        // If checked, change the input type to 'text' (show password)
        passwordInput.type = "text";
      } else {
        // If not checked, change the input type to 'password' (hide password)
        passwordInput.type = "password";
      }
    });
  }
};

const getDOMElements = function () {
  email.field = document.querySelector(".js-email-field");
  email.input = document.querySelector(".js-email-input");
  email.field.errorMessage = document.querySelector(".js-email-error");;

  password.field = document.querySelector(".js-password-field");
  password.input = document.querySelector(".js-password-input");
  password.field.errorMessage = document.querySelector(".js-password-error");

  signInButton = document.querySelector(".js-sign-in-button");
};

// Helperfunctie om een geldig e-mailadres te controleren
const isValidEmailAddress = function (emailAddress) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password) {
  // This example requires at least 8 characters, including at least one uppercase letter, 
  // one lowercase letter, one digit, and one special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

// Helperfunctie om te controleren of een veld leeg is
const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};


const addError = function(field, errorMessage) {
  field.classList.add("has-error");
  field.dataset.errorMessage = errorMessage;
  // Set the error message as text content of a specific element within the field
  // const errorMessageElement = field.querySelector(".error-message");
  // if (errorMessageElement) {
  //   errorMessageElement.textContent = errorMessage;
  // }
  field.errorMessage.textContent = errorMessage;
};


const removeError = function(field) {
  field.classList.remove("has-error");
  field.removeAttribute("data-error-message");
  field.errorMessage.textContent = "";
};


const validateEmail = function () {
  const emailValue = email.input.value;

  if (isEmpty(emailValue)) {
    addError(email.field, "Dit veld is verplicht");
  } else if (!isValidEmailAddress(emailValue)) {
    addError(email.field, "Ongeldig e-mailadres");
  } else {
    removeError(email.field);
  }
};

const validatePassword = function () {
  const passwordValue = password.input.value;

  if (isEmpty(passwordValue)) {
    addError(password.field, "Dit veld is verplicht");
  } else if (!isValidPassword(passwordValue)) {
    addError(password.field, "Ongeldig wachtwoord");
  } else {
    removeError(password.field);
  }
};

const validateForm = function () {
  validateEmail();
  validatePassword();

  // Check if there are any errors
  if (!email.field.classList.contains("has-error") && !password.field.classList.contains("has-error")) {
    // Form is valid, log the values
   return true;
  }
  return false;
};

const enableListeners = function () {
  if (email.input !== null) {
    email.input.addEventListener("blur", validateEmail);
    email.input.addEventListener("input", validateEmail);
  }

  if (password.input !== null) {
    password.input.addEventListener("blur", validatePassword);
    password.input.addEventListener("input", validatePassword);
  }

  if (signInButton !== null) {
    signInButton.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent form submission
      if(validateForm()){
        console.log("Email: " + email.input.value);
        console.log("Password: " + password.input.value);
      }
    });
  }
};

// Initialize the password switcher
const init = function () {
  console.log("Script loaded!");

  // Initialize password switcher
  handlePasswordSwitcher();

  // Other initialization code here
  getDOMElements();
  enableListeners();
};

// Call the init function to start the script
init();
