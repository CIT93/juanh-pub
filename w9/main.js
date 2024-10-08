import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM} from "./global.js";
import {saveLS, cfpData} from "./storage.js"

const firstNameEl = document.getElementById("firstName");
const lastNameEL = document.getElementById("lastName");
const submitEl = document.getElementById("submitError");

function start( firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({

    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    
  });
}

renderTbl(cfpData);
 // Function to validate a single field
 const validateField = (event) => {
   const field = event.target.value;
   const fieldId = event.target.id;
   const fieldError = document.getElementById(`${fieldId}Error`);

   if (field === "") {
     fieldError.textContent = `${fieldId} is required`;
     event.target.classList.add("invalid");
   } else {
     fieldError.textContent = "";
     event.target.classList.remove("invalid");
   }
};
 
 // Attach blur event listeners
firstNameEl.addEventListener('blur', validateField);
lastNameEL.addEventListener('blur', validateField);

FORM.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const firstNameIsValid = firstNameEl.value !== "";
  const lastNameIsValid = lastNameEL.value !== "";
  if (firstNameIsValid && lastNameIsValid) {
    submitEl.textContent = "";
    const houseMembers = parseInt(FORM.housemembers.value);
    const houseSize = FORM.housesize.value;
    start(firstName, lastName, houseMembers, houseSize);
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();  
  } else {
    document.getElementById("submitError").textContent ="form requires first name and last name"
}

});
