const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
    if (size === "large") {
        houseSizePoints = 10;
    } else if (size === "medium") {
       houseSizePoints  = 7;
    } else if (size === "small") {
       houseSizePoints  = 4;
    } else if (size === "apt") {
       houseSizePoints  = 2;
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

function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
  output.appendChild(newH2);
  const houseMInfo = document.createElement("p");
  houseMInfo.textContent = `Household Members: ${obj.houseM}`;
  output.appendChild(houseMInfo);
  const houseSInfo = document.createElement("p");
  houseSInfo.textContent = `House size: ${obj.houseS}`;
  output.appendChild(houseSInfo);
  const houseHPTSInfo = document.createElement("p");
  houseHPTSInfo.textContent = `Household points: ${obj.houseHPTS}`;
  output.appendChild(houseHPTSInfo);
  const houseSPTSInfo = document.createElement("p");
  houseSPTSInfo.textContent = `House Size Points: ${obj.houseSPTS}`;
  output.appendChild(houseMInfo);
  
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;

  cfpData.push({
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseHPTS: houseHoldPts,
    houseSPTS: houseSizePts,
    cfpTotal: total
  });
    
  //displayOutObj(cfpObj);
  // cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
  for (obj of cfpData) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home ${obj.houseSPTS}`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseHPTS},`;  //(score: ${arr[3]}),`;
    // newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]}).`;
    const newH4 = document.createElement("p");
    newH4.textContent = `House Size ${obj.houseS}`;
    const newH5 = document.createElement("h5");
    newH5.textContent = `House Members ${obj.houseM}`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
    output.appendChild(newH4);
    output.appendChild(newH5);

  }
}

// function displayOutput() {
  
//   for (let i = 0; i < cfpData.length; i++) {

//     console.log(i);
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//      const newH3 = document.createElement("h3");
//      newH3.textContent = `Based on number in and size of home`
//      const newP = document.createElement("p");
//      newP.textContent = `This number is based on the number of people in the house of ${[i][0]} (score: ${[i][3]}),`;
//      newP.textContent += ` and a ${[i][1]} size of home (score:${[i][2]}).`;
//     output.appendChild(newH2);
//      output.appendChild(newH3);
//      output.appendChild(newP);
//   }
// }

start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");
      
displayOutput()