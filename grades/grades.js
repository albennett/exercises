/*Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

A score between 50-60 is an F
A score between 61-70 is a D
A score between 71-80 is a C
A score between 81-90 is a B
A score between 91-100 is an A
Start with array of random scores in your JavaScript 

How many of each grade?
What is the lowest grade?
What is the highest grade?
*/

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];


var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;
var countF = 0;

var highestScore = 0;
var lowestScore = 100;

for (var i = 0; i < scores.length; i++) {
	if (scores[i] < 60) {
		countF++;
		console.log(countF);
	
	} else if (scores[i] < 70) {
		countD++;

	} else if (scores[i] < 80) {
		countC++;
		
	} else if (scores[i] < 90) {
		countB++;
	
	} else {
		countA++;
		
	}
} 
console.log("countA", countA);
console.log("countB", countB);
console.log("countC", countC);
console.log("countD", countD);
console.log("countF", countF);

for (var j =0; j < scores.length; j++) {
	if (scores[j] < lowestScore) {
		lowestScore = scores[j];
	} else {
		lowestScore = lowestScore;
	}
}

for (var k=0; k < scores.length; k++) {
	if (scores[k] > highestScore) {
		highestScore = scores[k];
	} else {
		highestScore = highestScore;
	}
}
console.log("lowestScore", lowestScore);
console.log("highestScore", highestScore);


