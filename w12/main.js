const FORM = document.getElementById("form");
const OUT = document.getElementById("output");


function updateDOM(message,el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    OUT.appendChild(newEl)
}

const startWorkout = (stopExcersise, type, reps, fn) => {
    updateDOM(`Start ${type} Number of reps is ${reps} complete in ${stopExcersise} seconds.`, `p`)
    setTimeout(() => {
        fn(`Stop ${type}`, "h1")
    },time * 2000)
}

FORM.addEventListener(`submit`, e => {
  e.preventDefault();
  const type = FORM.type.value;
  const reps = parseFloat(e.target.reps.value)
  const stopE = parsefloat(e.target.time.value);
  startWorkout(type, reps, stopE, updateDOM);
  FORM.reset();
});

const stop = `🛑`;
console.log (`${stop}`)

function getStop(){
return `🛑`;
}

// let pizza

function orderStart() {
console.log(`start Exercise`)
pizza = `🟢`;
console.log(`Start`)
}
orderStart()
console.log(`start ${pizza}`)

// let pizza
function orderPizza() {
console.log(`Order pizza`)
setTimeout(() => {
  pizza = `pizza emoji`
  console.log(`${pizza} is ready`)
}, 2000);
console.log(`Pizza was ordered`)
}
orderPizza()
console.log(`Call Qoli`)
console.log(`Eat ${pizza}`)

function displayOutput() {
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `stop ${obj.stopE}`;
    const newH3 = document.createElement("h3");

    OUTPUT.appendChild(newH2);

  }
}

// code output something but tried to emplement instructors code and is just aint working
function getStop(callback) {
  setTimeout(() => {
    const stop = `🛑`;
    callback()
  }, 2000);
}
function pizzaReady(pizza) {
  console.log(`Eat the ${pizza}`)
}
orderPizza(pizzaReady)
console.log(`Call Qoli`)

window.addEventListener(`click`, function () {
  console.log(`Clicked`)
})

window.addEventListener(`click`, callback)
function callback() {
  console.log(`Clicked`)
}
