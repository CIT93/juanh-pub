import { renderTbl } from "./render.js";
import {FORM, FNAME, LNAME, SUBMIT} from "./global.js";
import { saveLS, cfpData } from "./storage.js"
import { FP } from "./fp.js"



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
    const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.housemembers.value), FORM.housesize.value, FORM.foodchoice.value);
    cfpData.push(fpObj)
    saveLS(cfpData);
    renderTbl(cfpData);
    FORM.reset();
  } else {
    SUBMIT.textContent =
      "form requires first name and last name";
  }
});

//const pizza = `pizza emoji`
//console.log (`${pizza}`)

//function getPizza(){
//return `pizza emoji`
//}

//let pizza

//funciton orderPizza() {
// console.log(`Order pizza`)
// pizza = ``
// console.log(`Pizza was ordered`)
// }
//orderPizza()
//console.log(`Eat ${pizza}`)

//let pizza
//function orderPizza() {
// console.log(`Order pizza`)
// setTimeout(() => {
//   pizza = `pizza emoji`
//   console.log(`${pizza} is ready`)
// }, 2000);
// console.log(`Pizza was ordered`)
// }
// orderPizza()
// console.log(`Call Qoli`)
// console.log(`Eat ${pizza}`)

// function orderPizza(callback) {
//   setTimeout(() => {
//     const pizza = `pizza emoji`
//     callback()
//   }, 2000);
// }
// function pizzaReady(pizza) {
//   console.log(`Eat the ${pizza}`)
// }
// orderPizza(pizzaReady)
// console.log(`Call Qoli`)

// window.addEventListener(`click`, function () {
//   console.log(`Clicked`)
// })

// window.addEventListener(`click`, callback)
// function callback() {
//   console.log(`Clicked`)
// }

// fucntion thing1(callback) {
//   callback()
// }
// fucntion thing2(callback) {
//   callback()
// }
// fucntion thing3(callback) {
//   callback()
// }
// thing1(() => {
//   thing2(() => {
//     thing3()
//   })
// })
