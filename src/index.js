import validator from "./validator.js";

// DOM elements
const submitButton = document.getElementById("submit-button");
const creditCard = document.getElementById("card-number");
const numbersBox = document.getElementById("mask");

creditCard.addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
});

creditCard.addEventListener("keydown", () => {
  const maskedNumbers = validator.maskify(creditCard.value);
  numbersBox.innerHTML = maskedNumbers;
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const customerName = document.getElementById("customer-name").value;
  const cvv = document.getElementById("cvv").value;
  const month = Number.parseInt(
    document.getElementById("expiration-month").value
  );
  const year = Number.parseInt(
    document.getElementById("expiration-year").value
  );
  if (creditCard.value.length !== 19) return alert("Ingresa 16 caracteres");
  if (customerName.length === 0) return alert("Ingresa Nombre Cliente");
  if (month < 0 && month > 13) return alert("Mes invalido");
  if (year < 2020 && year > 2040) return alert("Año invalido");
  if (cvv.length !== 3) return alert("CVV invalido");

  //isValid function
  const validatorResponse = validator.isValid(creditCard.value);
  if (!validatorResponse) return alert("Tarjeta de credito inválida");
  // console.log({ validatorResponse, creditCard, customerName, year, month });
  setTimeout(function () {
    window.location = "./success.html";
  }, 2000);
  alert("Datos guardados exitosamente, redirigiendo...");
});

// if (event.key === ) creditCard = creditCard.value.slice(0, -1);
creditCard.addEventListener("keypress", (event) => {
  const ch = String.fromCharCode;
  if (!/[0-9]/.test(ch)) creditCard = creditCard.value.slice(0, -1);
  event.preventDefault();
  event.stopPropagation();
});
