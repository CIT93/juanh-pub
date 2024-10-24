import { renderTbl } from "./render.js";
import {determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData } from "./storage.js"
import { FP } from "./fp.js"


  const start = ( firstName, lastName, houseHoldMembers, houseSize, foodChoice) => {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const foodChoicePTS = determinefoodChoicePts(foodChoice);
  const total = houseHoldPTS + houseSizePTS + foodChoicePTS;
  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    foodC: foodChoice,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    foodCPTS: foodChoicePTS,
    cfpTotal: total,    
  });
}

// const start = (...i) => {
//   const houseHoldPTS = determineHouseHoldPts(i[2]);
//   const houseSizePTS = determineHouseSizePts(i[3]);
//   const total = houseHoldPTS + houseSizePTS;
//   cfpData.push({
//     firstName: i[0],
//     lastName: i[1],
//     houseM: i[2],
//     houseS: i[3],
//     houseMPTS: houseHoldPTS,
//     houseSPTS: houseSizePTS,
//     cfpTotal: total,
//   });
// };


renderTbl(cfpData);

 // Function to validate a single field
 const validateField = event =>{
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
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

FORM.addEventListener(`submit`, e => {
  e.preventDefault();
  if (FNAME.value !== "" && LNAME.value !== "") {
    SUBMIT.textContent = "";
    //start(FNAME.value, LNAME.value, parseInt(FORM.housemembers.value), FORM.housesize.value);
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housemembers.value), FORM.housesize.value, FORM.foodchoice.value);
    // fpObj.houseHoldPoints();
    // fpObj.houseSizePoints();
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent =
      "form requires first name and last name";
  }
});

// const me = {
//   name: "Juan",
//   hairColor: "Black",
//   location: "Home",
//   sleepScore: 91,
//   introduce: function () {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }
// }

// const you = {
//   name: "Jane",
//   hairColor: "Brown",
//   location: "Home1",
//   sleepScore: 92,
//   introduce: function () {
//     console.log(this)
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} right now.`)
//   }
// }

// me.introduce();
// you.introduce();

// class Human {
//   constructor(name, hairColor, location, sleepScore) {
//     this.name = name
//     this.hairColor = hairColor
//     this.location = location
//     this.sleepScore = sleepScore
//   }
//   introduce() {
//     console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleepScore of ${this.sleepScore}.`)
//   }
// }

// const juan = new Human("Juan", "Black", "Home", 91);
// const jane = new Human("Jane", "Brown", "Home1", 92);
// juan.introduce();
// jane.introduce();