

 const determineHouseSizePts = (size = "medium") => {
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

 const determineHouseHoldPts = (numberInHousehold = 1) => {
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

const determinefoodChoicePts = (choice = "domestic meat a few time per week") => {
  let foodChoicePoints = 0;
  if (choice === "domestic meat on a daily basis") {
    foodChoicePoints = 10;
  } else if (choice === "domestic meat a few time per week") {
    foodChoicePoints = 7;
  } else if (choice === "vegetarian") {
    foodChoicePoints = 4;
  } else if (choice === "vegan or only eat wild meat") {
    foodChoicePoints = 2;
  }
  return foodChoicePoints;
};

export { determineHouseHoldPts, determineHouseSizePts, determinefoodChoicePts};