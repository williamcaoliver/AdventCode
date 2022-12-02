const fs = require("fs");
let inputData = fs.readFileSync("./Day2/input2.txt", "utf-8").split(/\n/);

function splitOpp(data) {
  let returnArr = [];
  for (let i = 0; i < data.length; i++) {
    let check = data[i];
    let opp = check.charAt(0);
    let your = check.charAt(2);

    returnArr.push([opp, your]);
  }
  return returnArr;
}

function pointsCal(data) {
  let yourPoints = 0;
  for (let i = 0; i < data.length; i++) {
    let opponentMove = data[i][0];
    let yourMove = data[i][1];
    let gameCondition = opponentMove + yourMove;
    switch (yourMove) {
      case "X":
        yourPoints += 1;
        break;
      case "Y":
        yourPoints += 2;
        break;
      case "Z":
        yourPoints += 3;
        break;
      default:
        console.log("Error in  Switch");
    }

    switch (gameCondition) {
      case "AX":
        yourPoints += 3;
        break;
      case "AY":
        yourPoints += 6;
        break;
      case "AZ":
        yourPoints += 0;
        break;
      case "BX":
        yourPoints += 0;
        break;
      case "BY":
        yourPoints += 3;
        break;
      case "BZ":
        yourPoints += 6;
        break;
      case "CX":
        yourPoints += 6;
        break;
      case "CY":
        yourPoints += 0;
        break;
      case "CZ":
        yourPoints += 3;
        break;
      default:
        break;
    }
  }
  return yourPoints;
}
console.log(pointsCal(splitOpp(inputData)));


function pointsPart2 (data){
    let yourPoints = 0;
  for (let i = 0; i < data.length; i++) {
    let opponentMove = data[i][0];
    let yourMove = data[i][1];
    let gameCondition = opponentMove + yourMove;
    

    switch (gameCondition) {
      case "AX":
        yourPoints += 3;
        break;
      case "AY":
        yourPoints += 4;
        break;
      case "AZ":
        yourPoints += 8;
        break;
      case "BX":
        yourPoints += 1;
        break;
      case "BY":
        yourPoints += 5;
        break;
      case "BZ":
        yourPoints += 9;
        break;
      case "CX":
        yourPoints += 2;
        break;
      case "CY":
        yourPoints += 6;
        break;
      case "CZ":
        yourPoints += 7;
        break;
      default:
        break;
    }
  }
  return yourPoints;
}

console.log(pointsPart2(splitOpp(inputData)));