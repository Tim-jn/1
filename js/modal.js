function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form validation
const reserve = document.getElementById("reserve");
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkbox1 = document.getElementById("checkbox1");

reserve.addEventListener("submit", e => {
	e.preventDefault();
	// Vérification des champs
	validate();
});

function validate() {
	// On reprend la valeur de chaque variable et on enlève les espaces avec trim()
	const firstValue = first.value.trim();
	const lastValue = last.value.trim();
	const emailValue = email.value.trim();
	const birthdateValue = birthdate.value.trim();
	const quantityValue = quantity.value.trim();

	if (firstValue === "") {
		setErrorFor(first, "*Veuillez renseigner un prénom");
	} else if (firstValue.length <= 2) {
		setErrorFor(first, "*Veuillez renseigner un prénom d'au moins deux caractères");
	} else {
		setSuccessFor(first);
	}

	if (lastValue === "") {
		setErrorFor(last, "*Veuillez renseigner un nom");
	} else if (lastValue.length <= 2) {
		setErrorFor(last, "*Veuillez renseigner un nom d'au moins deux caractères");
	} else {
		setSuccessFor(last);
	}

	if (emailValue === "") {
		setErrorFor(email, "*Veuillez renseigner un email");
	} else {
		setSuccessFor(email);
	}

	if (birthdateValue === "") {
		setErrorFor(birthdate, "*Veuillez renseigner une date de naissance");
	} else {
		setSuccessFor(birthdate);
	}

	if (quantityValue === "") {
		setErrorFor(quantity, "*Veuillez renseigner un nombre");
	} else {
		setSuccessFor(quantity);
	}
	
	if (checkbox1.checked === false) {
		setErrorFor(checkbox1, "*Cette case est obligatoire");
	} else {
		setSuccessFor(checkbox1);
	}
}

function setErrorFor(input, message) {
	const formData = input.parentElement; 					// sélectionne l'élément parent de input
	const isValid = formData.querySelector(".isValid");	    // sélectionne la div warning de la class formData
	formData.className = "formData error";					// Crée une class formData.error
	isValid.innerText = message;							// Affiche le message d'erreur propre à chaque erreur
}

function setSuccessFor(input) {	
	const formData = input.parentElement;					// sélectionne l'élément parent de input
	formData.className = "formData succes";					// Crée une class formData.succes
}