const togglePass = document.querySelector("#toggle-icon");
console.log(togglePass);
const password = document.querySelector("#password");
console.log(password);

togglePass.addEventListener("click", function (e) {
  // toggle the type of attribute
  console.log(e);
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  console.log(type);
  password.setAttribute("type", type);
  console.log(password);

  //   toggle icon
  // here this is pointing the togglePass
  this.classList.toggle("fa-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  console.log(e);
  // preventDefault() use to prevent the form submission
  e.preventDefault();
});

const loginButton = document.querySelector("#submit");
loginButton.addEventListener("click", function () {
  form.reset();
});
