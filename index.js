let emailInput = document.querySelector(".email-container input");
let notify = document.querySelector(".notify");
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let error = document.querySelector(".error");

notify.addEventListener("click", function (event) {
  event.preventDefault();

  if (emailRegex.test(emailInput.value)) {
    emailInput.style.border =
      "var(--bs-border-width) solid var(--bs-border-color)";
    error.style.visibility = "hidden";
    return true;
  } else {
    emailInput.style.border = "1px solid red";
    error.style.visibility = "visible";
    return false;
  }
});
