var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
// var criteria = 2;

for (var i = 0; i < planets.length; i++) {
  var planet = planets[i]
  
  switch (planet) {
    case "mercury":
    case "venus":
    case "earth":
    case "mars":
      console.log("rocky planet");
      break;
    case "jupiter":
    case "saturn":
    case "uranus":
    case "neptune":
      console.log("gas planet");
      break;
    default:
      console.log("It is a weird planet"); //default is if it doesn't match anything -- only for switch statement
      break;
  }
}




var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var currentScore,
    highestSCore = 0,
    lowestScore = 101,
    gradeA=[];
    gradeB=[];
    gradeC=[];
    gradeD=[];
    gradeF=[];

for (var j = 0; j < scores.length; j++) {
  currentScore = score[j];

  if (currentScore > highestScore) {
    highestScore = currrentScore;
  }

  if (currentScore < lowestScore) {
    lowestScore = currentScore;
  }

  switch (true) {
    case (currentScore < 61 ):
      gradeF.push(currentScore);
      break;
    case (currentScore > 60 && currentScore < 71):
      gradeD.push(currentScore);
      break;
    case (currentScore > 70 && currentScore < 81):
      gradeC.push(currentScore);
      break;
    case (currentScore > 80 && currentScore < 91 ):
      gradeB.push(currentScore);
      break;
    case (currentScore < 90 && currentScore < 101 ):
      gradeA.push(currentScore);
      break;
  }
}
console.log("gradeA" gradeA.length);
console.log("gradeb" gradeB.length);
console.log("gradeC" gradeC.length);
console.log("gradeD" gradeD.length);
console.log("gradeF" gradeF.length);









