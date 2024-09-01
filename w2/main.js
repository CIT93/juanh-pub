
// how to calculate your carbon footprint -https://www.wikihow.com/Calculate-Your-Carbon-Footprint

// Method 1

//1. members of household.
const houseHoldMembers = 4;
//2. consider the size of your home.
const homeSize = 10;
//3. food choices.
const foodChoices = 6;
//4. water consumption
const waterConsumption = 1;
//5. household purchases made each year
const houseHoldPurchases = 4;
//6. waste produce.
const wasteProduce = 30;
//7.amount of waste you recycle.
const wastRycled = 12;
//8. tally your annual transportation scores.
const transScores = 0;
//9. add up your points.
const addPoints = houseHoldMembers + homeSize + foodChoices + waterConsumption + houseHoldPurchases + wasteProduce + wastRycled + transScores;
//10.write JS to update the rendered html.
const resultElement = document.getElementById('result');
        resultElement.textContent = `: ${addPoints}`;

