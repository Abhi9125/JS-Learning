// Selecting the elements
const usernameE1 = document.querySelector("#username");
const emailE1 = document.querySelector("#email");
const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirm-password");
console.log("hello");
const form = document.querySelector("#singup");

// isRequired function tell required or not

const isRequired = (value) => (value === "" ? false : true);

// isBetween() return false if the length is not between min and max
const isBetween = (length, min, max) => {
  if (length < min || length > max) return false;
  else return true;
};

// check the email is valid or not
const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// check the password is valid or not
const isPasswordSecure = (password) => {
  const re = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  );
  return re.test(password);
};

// showError() function highlights the border of the input field and displays an error message if the input field is invalid
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;

  // add the error class
  formField.classList.remove("success");
  formField.classList.add("error");

  // show the error message
  // Notice here use formField.querySelector() instead of the document.querySelector()
  const error = formField.querySelector("small");
  error.textContent = message;
};

// showSuccess() show the success indicator
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove("error");
  formField.classList.add("success");

  // hide the error message
  const error = formField.querySelector("small");
  error.textContent = "";
};

// Develop input field validating function
// 1. Validate the username field

const checkUsername = () => {
  let valid = false;
  const min = 3,
    max = 25;
  const username = usernameE1.value.trim();

  if (!isRequired(username)) {
    showError(usernameE1, "Username cannot be blank.");
  } else if (!isBetween(username, min, max)) {
    showError(
      usernameE1,
      "Username must be between `${min} and `${max} character`"
    );
  } else {
    showSuccess(usernameE1);
    valid = true;
  }

  return valid;
};

// 2. Validate email
const checkEmail = () => {
  let valid = false;
  const email = emailE1.value.trim();

  if (!isRequired(email)) {
    showError(emailE1, "Email cannot be blank");
  } else if (!isEmailValid(email)) {
    showError(emailE1, "Email is not valid");
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
};

// 3. valid the password field

const checkPassword = () => {
  let valid = false;

  const password = passwordE1.value.trim();

  if (!isRequired(password)) {
    showError(passwordE1, "Password cannot be blank.");
  } else if (!isPasswordSecure(password)) {
    showError(
      passwordE1,
      "Password must has at least 8 character with 1 upperLetter 1 smallLetter and 1 specialLetter"
    );
  } else {
    showSuccess(passwordE1);
    valid = true;
  }

  return valid;
};

// valid the confirm password field
const checkConfirmPassword = () => {
  let valid = false;

  // check confirm password
  const confirmPassword = confirmPasswordE1.value.trim();
  const password = passwordE1.value.trim();

  if (!isRequired(confirmPassword)) {
    showError(confirmPasswordE1, "Please enter the password again");
  } else if (password !== confirmPassword) {
    showError(confirmPasswordE1, "Confirm password does not match");
  } else {
    showSuccess(confirmPasswordE1);
    valid = true;
  }

  return valid;
};

// Modifying the submit event handler

// add eventListner on form to prevent submit
form.addEventListener("click", function (e) {
  // prevent the form for submition
  e.preventDefault();

  // validate forms
  let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

  let isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

  // submit to the server if the form is valid
  if (isFormValid) {
  }
});

// To improve the performance of the form responce we use debounce technique
const debounce = (fn, delay = 500) => {
  let timeoutId;

  return (...args) => {
    // cancel the previous timer
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // setup a new timer
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// The above code also done by event delegation

form.addEventListener(
  "input",
  debounce(function (e) {
    switch (e.target.id) {
      case "username":
        checkUsername();
        break;

      case "email":
        checkEmail();
        break;

      case "password":
        checkPassword();
        break;

      case "confirm-password":
        checkConfirmPassword();
        break;
    }
  })
);
