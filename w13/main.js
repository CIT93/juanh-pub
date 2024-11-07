const forme = document.getElementById("form");
const name = document.querySelector('aname')
const time = document.querySelector("timed")
const button = document.querySelector("set-timmer")
const OUT = document.querySelector(`output`)
// const updateDOM = (message, el = "h3") => {
//   const newEl = document.createElement(el)
//   newEl.textContent = message
//   OUT.appendChild(newEl)
// }

forme.addEventListener("submit", function(event){
  event.preventDefault();
  const exerciseType = document.getElementById("typeOfExercise").value
  const repetitions = document.getElementById("reps").value
  const duration = document.getElementById("time").value
  displayStartMessage(exerciseType, repetitions, duration)//, updateDOM
  
 setTimeout(function() {
 displayEndMessage(exerciseType)
   }, 2000)

});//   .then(updateDOM)
    //.catch(onError)

function displayStartMessage(typeOfExercise, reps, time) {
  const startMessage = document.createElement("p");
  startMessage.textContent = `Exercise type is ${typeOfExercise} and the goal is ${reps} reps in ${time} seconds.`;
   document.getElementById("message").appendChild(startMessage);
   console.log("Starting exercise");

  return new Promise((resolve, reject) => {
    if (time === 0) {
      reject(`Error on Time selection`);
    } else {
      setTimeout(() => {
        resolve(`stop ${typeOfExercise}`);
      }, time * 1000);
    }
  });
};
  const onError = (error) => {
    updateDOM(error, "h2")
  }

function displayEndMessage(typeOfExercise) {
  const endMessage = document.createElement("p");
  endMessage.textContent = `Time's up for ${typeOfExercise}`;
  document.getElementById("message").appendChild(endMessage);
  console.log("Exercise ended");
}