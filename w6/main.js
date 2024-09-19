const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apartment") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  });
}

function displayOutput() {
  for (obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`; // ${obj.houseSPTS}`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`; //${obj.houseHPTS},`;  //(score: ${arr[3]}),`;
    newP.textContent += ` and a ${obj.houseS} size of home (score:${obj.houseSPTS}).`;
    const newH4 = document.createElement("p");
    newH4.textContent = `House Size ${obj.houseS}`;
    const newH5 = document.createElement("h5");
    newH5.textContent = `House Members ${obj.houseM}`;
    OUTPUT.appendChild(newH2);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP);
    OUTPUT.appendChild(newH4);
    OUTPUT.appendChild(newH5);
  }
}

FORM.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = parseInt(FORM.housemembers.value);
  const houseSize = FORM.housesize.value;
  start(houseMembers, houseSize);
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset();
});

// Is the apartment score correct? IF not why not?
// It is not correct because it gives input 0 but because of apt needing to be apartment
// For the other question, it is because it makes things easier


// function displayOutObj(obj) {
//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
//   output.appendChild(newH2);
//   const houseMInfo = document.createElement("p");
//   houseMInfo.textContent = `Household Members: ${obj.houseM}`;
//   output.appendChild(houseMInfo);
//   const houseSInfo = document.createElement("p");
//   houseSInfo.textContent = `House size: ${obj.houseS}`;
//   output.appendChild(houseSInfo);
//   const houseHPTSInfo = document.createElement("p");
//   houseHPTSInfo.textContent = `Household points: ${obj.houseHPTS}`;
//   output.appendChild(houseHPTSInfo);
//   const houseSPTSInfo = document.createElement("p");
//   houseSPTSInfo.textContent = `House Size Points: ${obj.houseSPTS}`;
//   output.appendChild(houseMInfo);

// }
