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

function start(houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Carbon footprint total is ${arr[4]},household number is ${arr[1]}, 
    score for house member is ${arr[3]}, size of house is ${arr[1]}, score for size of house is ${arr[2]}.`;
   
    output.appendChild(newP);
  }
}

start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");
start(7, "large");
start(6, "medium");
start(5, "small");
start(4, "apt");
start(3, "large");
start(2, "medium");
start(1, "small");

displayOutput();