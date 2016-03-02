

 /* ...........YOUR MISSION...........

  Write JavaScript functions that perform the following tasks.

  1. document.write() the characters of any string in reverse order.
  2. document.write() the characters of any string in alphabetical order.
  3. document.write() true, or false, if the passed string is a palidrome.


  Note: document.write() is a fast way to put content into the DOM 
  without the need for a getElementById() and innerHTML.
*/

function reversal(origString) {
  var reversedString = origString.split("").reverse().join("");
  document.write(reversedString);
  
  return reversedString;
}

function alphabits(origString) {
  document.write("<div>" + origString.split("").sort().join("") + "</div>");
}

function palindrome(origString) {
  var newString = origString.replace(/[\s,]/g, "").toLowerCase();
  var reversedNewString = reversal(newString);

  if (newString === reversedNewString) {
    document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
  } else {
    document.write("<div>\ + origString + "\" is not a palindrome</div>");
    
  }
}

//document.write

var testString = "A car, a man, a maraca";

reversal(testString);
alphabits(testString);
palindrome(testString);



var globalVar = 90;

function add(a, b) {
	console.log(a,b); //-2 is answer
	return a + b;  //when you return something, you want to store it somewhere, ex: result
	b() // this is the function subtract
}

function subtract(one, two) {
	return one - two;
}

var result = add(1, subtract);

//////




///////////

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
var el = document.getElementById("planets");
planets.forEach(function(currentPlanet) {
	el.innerHTML += "<p>" + currentPlanet + "</p>";
});


// Use the map method to create a new array where the first letter of each planet is capitalized

var capitalizePlanets = planets.map(function(currentPlanet) {
	var firstLetter = currentPlanet.split("")[0].toUpperCase();
	return firstLetter + currentPlanet.slice(1);
});
console.log("capitalizePlanets", capitalizePlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'

var letterE = planets.filter(function(currentPlanet) {
	return currentPlanet.indexOf("e") > -1;
});
console.log("letterE", letterE);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", 
"the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var sumOfWords = words.reduce(function (prev, curr) {
	return prev + " " + curr;
}); console.log("sumOfWords", sumOfWords + ".");


//!!!for each  --- doesn't output to an array

/*var colors = [red, green, blue, yellow];

colors.forEach(function(color) {
	console.log(color);
});

//exact same thing ^

for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}


//!!!map create new array, every item goes to array

var reversedColors = colors.map(function(color) {
	return color.split("").reverse().join("";)
});
console.log("reversedColors", reversedColors);

//same thing ^

var reversedColors = [];
for (var i =0; i < colors.length; i++) {
	var reversed = colors[i].split("").reverse().join("");
	reversedColors.push(reversed);
}
console.log("reversedColors", reversedColors);

//!!!!filter create new array, determines if it goes to array, has to have condition 

var fourLetters = colors.filter(function(color) {
	return color.length === 4;
});
console.log("fourLetters", fourLetters);

//same thing ^

var fourLetters = [];
for (var i =0; i < colors.length; i++) {
	if (colors[i].length === 4) {
		fourLetters.push(colors[i]);
	}
} console.log("fourLetters", fourLetters);


//!!!reduce all items to an array to a single value

var numbers = [51, 10, 62, 4, 13, 9];

var sum = numbers.reduce(function (prev, curr) {
	return prev + curr;
}); console.log("sum", sum);

//same thing ^

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
	sum += numbers[i];
} console.log("sum", sum); */
