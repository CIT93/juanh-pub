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
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPts = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPts + houseSizePts;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPts, houseSizePts, total]);
}

function displayOutput() {
  
}

start(5, "large");
start(4, "medium");
start(3, "small");
start(2, "apt");
start(7, 1)
start(6, 2)
start(5, 3)
start(4, 4)
start(3, 5)
start(2, 6)
start(1, 7)

displayOutput()