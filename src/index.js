import validator from "./validator.js";

// DOM elements
const submitButton = document.getElementById("submit-button");
const creditCardInput = document.getElementById("card-number");
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
  // if (validator.isValid(cardNumber) === true) {
  //   alert("tu tarjeta es válida");
  // } else {
  //   alert("tu tarjeta es invalida");
  // }
  // if (validatorResponse) {
  //   alert('la tarjeta de credito es valida')
  // } else{
  //   alert('la tarjeta de credito es invalida unu')
  // }
});

// This function listen the event "keydown" on the creditCardInput
// Then it checks if the input is number
creditCardInput.addEventListener("keydown", () => {
  const inputText = creditCardInput.value;
  console.log(inputText);
});
