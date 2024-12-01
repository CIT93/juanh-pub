class FP {
  constructor(first, last, houseMembers, houseSize, foodChoice, foodSource, waterConsum) {
    this.first = first;
    this.last = last;
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumPoints = waterConsum;
    this.both = this.calculateAppliancePoints(hasBoth);
    this.householdPurchasesPoints = this.householdPurchasesPoints(householdPurchases);
    this.calHouseHoldPoints();
    this.calHouseSizePoints();
    this.calFoodChoicePoints();
    this.calFoodSourcePoints();
    this.calTotal();
  }
  calculateAppliancePoints(hasBoth){
    let both = 0;
    if(hasBoth) {
      both = 2;
    }
    return both;
  }


  calculateHouseholdPurchasesPoints(purchases) {
    let purchasePoints = 0;
    if (purchases >= 10) {
      purchasePoints = 10; 
    } else if (purchases >= 8) {
      purchasePoints = 8; 
    } else if (purchases >= 6) {
      purchasePoints = 6; 
    } else if (purchases >= 4) {
      purchasePoints = 4; 
    } else if (purchases >= 2) {
      purchasePoints = 2; 
    }
    return purchasePoints;
  }

  calHouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }
  calHouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }
  calFoodChoicePoints() {
    if (this.foodChoice === "domestic meat on a daily basis") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "domestic meat a few time per week") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "vegan or only eat wild meat") {
      this.foodChoicePoints = 2;
    }
  }

  calFoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balance") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }

  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.waterConsumPoints +
      this.both +
      this.householdPurchasesPoints;
  }
}
export {FP}