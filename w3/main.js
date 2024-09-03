function totalPoints(numberInHousehold) {
  console.log("inside the function");
  if (numberInHousehold === 1) {
    carbonFootprintPoints = carbonFootprintPoints + 14;
  } else if (numberInHousehold === 2) {
    carbonFootprintPoints = carbonFootprintPoints + 12;
  } else if (numberInHousehold === 3) {
    carbonFootprintPoints = carbonFootprintPoints + 10;
  } else if (numberInHousehold === 4) {
    carbonFootprintPoints = carbonFootprintPoints + 8;
  } else if (numberInHousehold === 5) {
    carbonFootprintPoints = carbonFootprintPoints + 6;
  } else if (numberInHousehold === 6) {
    carbonFootprintPoints = carbonFootprintPoints + 4;
  } else {
    carbonFootprintPoints = carbonFootprintPoints + 2;
  }

    console.log(`Based on the number of memnbers of the houshold of ${numberInHousehold} the points would be ${carbonFootprintPoints}. `);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3;

//global scope

totalPoints(3);
totalPoints(4);

    function houseType(houseSize) {
    if (houseSize = "large House") {
        houseNumber = houseNumber + 10;
    } else if (houseSize = "Medium House") {
        houseNumber = houseNumber + 7;
    } else if (houseSize = "small house") {
        houseNumber = houseNumber + 4;
    } else if (houseSize = "apartment") {
        houseNumber = houseNumber + 2;
    }
}
let houseSize = "large";
let houseNumber = 0;
console.log();
console.log(`Based on the house size of ${houseSize} the points would be ${houseNumber}`);



houseType(10);
houseType("Large house");
//let houseSizes = (10);
//housesSize(7);
console.log(`The total is ${houseNumber + carbonFootprintPoints}`);