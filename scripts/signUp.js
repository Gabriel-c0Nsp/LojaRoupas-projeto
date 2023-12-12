import {
  validateName,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from "./util.js";

let form = document.getElementById("submitForm");

let validName = false;
let validEmailOrNumber = false;
let validPassword = false;

let userName;
let email;
let phoneNumber;
let password;

let validForm = false;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("signUpName").value;

  const emailOrNumberInput = document.getElementById("signUpEmailOrPhone").value;

  const passwordInput = document.getElementById("signUpPassword").value;

  const nameValidated = () => {
    if (validateName(nameInput)) {
      userName = nameInput;
      validName = true;
    } else {
      console.log("Name inválido");
      validName = false;
    }
  };

  const validatedEmailOrPhone = () => {
    if (validateEmail(emailOrNumberInput)) {
      email = emailOrNumberInput;
      phoneNumber = null;
      validEmailOrNumber = true;
    } else if (validatePhoneNumber(emailOrNumberInput)) {
      phoneNumber = emailOrNumberInput;
      email = null;
      validEmailOrNumber = true;
    } else {
      console.log("Email or phone number not valid");
      validEmailOrNumber = false;
    }
  };

  const validatedPassword = () => {
    if (validatePassword(passwordInput)) {
      password = passwordInput;
      validPassword = true;
    } else {
      console.log("Senha inválida");
      validPassword = false;
    }
  };

  if (validName && validEmailOrNumber && validPassword) {
    console.log("Success");
    validForm = true;
  }

  if (validForm) {
    fetch("http://localhost:8080/lojaroupas/user/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: userName,
        password: password,
        phone: phoneNumber,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(function (response) {
        return response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (error) {
        console.log("something went wrong");
      });
  }
});
