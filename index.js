import validator from "./validator";
import { isAllowedKey } from "./validations.js";

const creditCard = document.getElementById("card-number");
const numbersBox = document.getElementById("mask");
const submitButton = document.getElementById("submit-button");

creditCard.addEventListener("keydown", (event) => {
  if (!isAllowedKey(event)) {
    event.preventDefault();
  }
  const maskedNumbers = validator.maskify(creditCard.value);
  numbersBox.innerHTML = maskedNumbers;
});

document.getElementById("cvv").addEventListener("keydown", (event) => {
  if (!isAllowedKey(event)) {
    event.preventDefault();
  }
});

const errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  errorMessage.innerHTML = "";

  const customerName = document.getElementById("customer-name").value;
  const cvv = document.getElementById("cvv").value;
  const month = Number.parseInt(
    document.getElementById("expiration-month").value
  );
  const year = Number.parseInt(
    document.getElementById("expiration-year").value
  );

  if (creditCard.value.length !== 16) {
    errorMessage.innerHTML =
      "Please enter a valid 16-digit credit card number.";
    return;
  }
  if (customerName.length === 0) {
    errorMessage.innerHTML = "Please enter customer name.";
    return;
  }
  if (month < 1 || month > 12) {
    errorMessage.innerHTML = "Please select a valid expiration month.";
    return;
  }
  if (year < 2020 || year > 2030) {
    errorMessage.innerHTML = "Please select a valid expiration year.";
    return;
  }
  if (cvv.length !== 3) {
    errorMessage.innerHTML = "Please enter a valid 3-digit CVV.";
    return;
  }

  const validatorResponse = validator.isValid(creditCard.value);
  if (!validatorResponse) {
    errorMessage.innerHTML = "Invalid credit card number.";
    return;
  }

  errorMessage.innerHTML = "Redirecting...";

  setTimeout(() => {
    openModal();
    errorMessage.innerHTML = "";
  }, 1000);
});

function openModal() {
  const modal = document.getElementById("successModal");
  modal.style.display = "block";
}
