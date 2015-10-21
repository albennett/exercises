/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function Make () {
  this.makeName = "Toyota";
};


/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function Model () {
  this.modelname = "Prius";
};


// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car
var Car = function(newColor) {
  this.color = newColor;
};

// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var myCar = new Car("blue");

// Create the second car
var herCar = new Car("green");

// Create the third car
var hisCar = new Car("white");

console.log("myCar", myCar);
console.log("herCar", herCar);
console.log("hisCar", hisCar);