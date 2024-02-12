// if (getCookie("Email") && getCookie("FullName")) {
//   location.replace("Home.html");
// }

console.log(document.forms[0].elements);

document.forms[0].elements.FullName.onblur = function () {
  try {
    fullNameValidation(this.value);
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } catch (e) {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
    this.nextElementSibling.innerText = e.message;
  }
};

document.forms[0].elements.Email.onblur = function () {
  try {
    emailValidation(this.value);
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } catch (e) {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
    this.nextElementSibling.innerText = e.message;
  }
};

document.forms[0].elements.Password.onblur = function () {
  try {
    passwordValidation(this.value);
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } catch (e) {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
    this.nextElementSibling.innerText = e.message;
  }
};

document.forms[0].elements.Phone.onblur = function () {
  try {
    phoneValidation(this.value);
    this.classList.remove("is-invalid");
    this.classList.add("is-valid");
  } catch (e) {
    this.classList.remove("is-valid");
    this.classList.add("is-invalid");
    this.nextElementSibling.innerText = e.message;
  }
};

document.forms[0].onsubmit = function (event) {
  try {
    fullNameValidation(this.elements.FullName.value);
    emailValidation(this.elements.Email.value);
    passwordValidation(this.elements.Password.value);
    phoneValidation(this.elements.Phone.value);
  } catch {
    event.preventDefault();
    alert("Information is missing");
  }
};
