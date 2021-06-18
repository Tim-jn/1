// top navigation display for responsive
function editNav() {
  var topNavDisplay = document.getElementById("myTopnav");
  if (topNavDisplay.className === "topnav") {
    topNavDisplay.className += " responsive";
  } else {
    topNavDisplay.className = "topnav";
  }
}

// launch,close modal DOM elements
const formModalBg = document.querySelector("#form-modal.bground");
const formModalBtn = document.querySelectorAll(".btn-signup");
const confirmationModalBg = document.querySelector("#confirmation-modal.bground");

// launch modal event
formModalBtn.forEach((btn) => btn.addEventListener("click", launchFormModal));

// launch modal form
function launchFormModal() {
  formModalBg.style.display = "block";
}
function launchConfirmationModal() {
  confirmationModalBg.style.display = "block";
}

// close modal form
function closeFormModal() {
  formModalBg.style.display = "none";
}
function closeConfirmationModal() {
  confirmationModalBg.style.display = "none";
  formModalBg.style.display = "none";
}

// form validation
const reserve = document.getElementById("reserve");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");
let errors = [];

reserve.addEventListener("submit", (e) => {
  e.preventDefault(); // neutralise le comportement de validation par défaut
  if (errors.length === 0) {
    launchConfirmationModal();
  } else {
    // pour chaque message d'erreur d'un input, on applique la fonction setErrorFor
    errors.forEach(([input, message]) => setErrorFor(input, message));
  }
});

// Affiche un message d'erreur sur l'input concerné
function setErrorFor(input, message) {
  const formData = input.parentElement; // sélectionne l'élément parent de input
  const isValid = formData.querySelector(".isValid"); // sélectionne la div warning de la class formData
  formData.className = "formData error"; // Crée une class formData.error
  isValid.innerText = message; // Affiche le message d'erreur propre à chaque erreur
}

// pour chaque input valide, on applique la fonction setSuccessFor
[first, last, email, birthdate, quantity, checkbox1].forEach((input) =>
  input.addEventListener("input", () => {
    setSuccessFor(input);
  })
);

// Affiche une classe succes sur l'input concerné
function setSuccessFor(input) {
  const formData = input.parentElement; // sélectionne l'élément parent de input
  formData.className = "formData succes"; // Crée une class formData.succes
}

function getFormErrors() {
  // Reprend la valeur de chaque variable et enlève les espaces avec trim()
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  errors = []; // reset la liste d'erreurs

  // ajoute une erreur si nécessaire au tableau "errors"
  if (firstValue.length < 2) {
    errors.push([first, "*Veuillez renseigner un prénom d'au moins deux caractères"]);
  }

  if (lastValue.length < 2) {
    errors.push([last, "*Veuillez renseigner un nom d'au moins deux caractères"]);
  }

  if (emailValue === "") {
    errors.push([email, "*Veuillez renseigner un email"]);
  }

  if (birthdateValue === "") {
    errors.push([birthdate, "*Veuillez renseigner une date de naissance"]);
  }

  if (quantityValue === "") {
    errors.push([quantity, "*Veuillez renseigner un nombre"]);
  }

  if (checkbox1.checked === false) {
    errors.push([checkbox1, "*Cette case est obligatoire"]);
  }

  return errors; // compte le nombre d'erreurs, si = 0 valide, sinon erreur
}
