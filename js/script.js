// top navigation display for responsive
function editNav() {
  var topNavDisplay = document.getElementById("myTopnav");
  if (topNavDisplay.className === "topnav") {
    topNavDisplay.className += " responsive";
  } else {
    topNavDisplay.className = "topnav";
  }
}

// launch,close modal elements
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
const errors = [];
const error = "";

reserve.addEventListener("submit", (e) => {
  e.preventDefault();
  // Vérification des champs
  if (validate()) {
    launchConfirmationModal();
  } else {
    errors.splice(0, errors.length); // reset la liste d'erreurs
  }
});

/**
 * @return {boolean}
 */
function validate() {
  // On reprend la valeur de chaque variable et on enlève les espaces avec trim()
  const firstValue = first.value.trim();
  const lastValue = last.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const quantityValue = quantity.value.trim();

  if (firstValue.length < 2) {
    setErrorFor(first, "*Veuillez renseigner un prénom d'au moins deux caractères");
    errors.push(error); // ajoute un "error" au tableau "errors"
  } else {
    setSuccessFor(first);
  }

  if (lastValue.length < 2) {
    setErrorFor(last, "*Veuillez renseigner un nom d'au moins deux caractères");
    errors.push(error);
  } else {
    setSuccessFor(last);
  }

  if (emailValue === "") {
    setErrorFor(email, "*Veuillez renseigner un email");
    errors.push(error);
  } else {
    setSuccessFor(email);
  }

  if (birthdateValue === "") {
    setErrorFor(birthdate, "*Veuillez renseigner une date de naissance");
    errors.push(error);
  } else {
    setSuccessFor(birthdate);
  }

  if (quantityValue === "") {
    setErrorFor(quantity, "*Veuillez renseigner un nombre");
    errors.push(error);
  } else {
    setSuccessFor(quantity);
  }

  if (checkbox1.checked === false) {
    setErrorFor(checkbox1, "*Cette case est obligatoire");
    errors.push(error);
  } else {
    setSuccessFor(checkbox1);
  }

  return errors.length === 0; // compte le nombre d'erreurs, si = 0 valide, sinon erreur
}

// Affiche un message d'erreur sur l'input concerné
function setErrorFor(input, message) {
  const formData = input.parentElement; // sélectionne l'élément parent de input
  const isValid = formData.querySelector(".isValid"); // sélectionne la div warning de la class formData
  formData.className = "formData error"; // Crée une class formData.error
  isValid.innerText = message; // Affiche le message d'erreur propre à chaque erreur
}
// Affiche une classe succes sur l'input concerné
function setSuccessFor(input) {
  const formData = input.parentElement; // sélectionne l'élément parent de input
  formData.className = "formData succes"; // Crée une class formData.succes
}
