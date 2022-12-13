import validator from "./validator.js";

// DOM elements
const submitButton = document.getElementById("submit-button");
const creditCardInput = document.getElementById("card-number");
// const maskNumbers = document.getElementById("mask").innerHTML;
// const customerNameInput = document.getElementById('customer-name');
// const validarForm = document.getElementById('checkout-form')

// function validarForm() {
//   if (costumerNameInput.value.length > 0) {
//     submitButton.disabled = false;
//   } else {
//     submitButton.disabled = true;
//   }
// }

creditCardInput.addEventListener("keydown", () => {
  const inputText = creditCardInput.value;
  // if (inputText === 16) {
  //   submitButton.disabled = false;
  // } else {
  //   submitButton.disabled = true;
  // }
  // console.log(inputText);
});

// Form validation listener
// Validates with luhn algorithm
submitButton.addEventListener("click", () => {
  const creditCardNumber = creditCardInput.value;
  const validatorResponse = validator.isValid(creditCardNumber);
  // alert(validatorResponse);
  if (validatorResponse === true) {
    window.location.href = "./success.html";
  } else {
    alert("Ingrese un número de tarjeta válido");
  }
});

// This function listen the event "keydown" on the creditCardInput
// Then it checks if the input is number
