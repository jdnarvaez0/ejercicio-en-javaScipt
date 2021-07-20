const validateEmail = () => {
  const mensaje = document.querySelector(".email-input span");
  const icon = document.querySelector(".email-input i");
  const emailValue = document.querySelector("#email").value;
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (emailValue.match(regex)) {
    mensaje.classList.remove("invalid");
    mensaje.classList.add("valid");
    mensaje.innerHTML = "Email Valido";
    icon.classList.remove("fa-exclamation-circle");
    icon.classList.add("fa.check.circle");
  } else {
    mensaje.classList.add("invalid");
    mensaje.classList.remove("valid");
    mensaje.innerHTML = "Email No Valido";
    icon.classList.add("fa-exclamation-circle");
    icon.classList.remove("fa-check-circle");
  }

  if (emailValue === "") {
    mensaje.innerHTML = "Debe de tener un Email";
    mensaje.style.opacity = 1;
    icon.classList.remove("fa-exclamation-circle");
  } else {
    mensaje.style.opacity = 1;
  }
};
