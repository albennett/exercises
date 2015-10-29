
// Break now for a class exercise. Have students create a new directory named modules where they will create an HTML and a JS file. 
//The JS file should create an IIFE module named SolarSystem. Have the student create properties and 
//methods for the following:

// Getter for an array of planets that cannot be modified.
// Getter/setter for number of planets that humans have landed people or robots on.
// Public property for holding a last modified date.
// Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
// Any other fun/related data that the student wants to add.

// IIFE
// Immediately invoked function expression

console.log("hello");

var SolarSystem = (function() {
  var spaceCraft = [];
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  var landedPlanets = ["Mars", "Mercury", "Venus", "Jupiter", "Moon"];

  

  return {

     getPlanets: function() {
        return planets;
    },

    last_modified_date: new Date(),

    getLandedPlanets: function() {   
      return landedPlanets;
    },
    setLandedPlanets: function(newPlanet) {
      landedPlanets.push(newPlanet);
    },
    getSpaceCraft: function() {
      return spaceCraft;
    },
    setSpaceCraft: function(newSpaceCraft) {
      spaceCraft.push(newSpaceCraft);
    }
  };
})();
console.log("SolarSystem", SolarSystem);
/* 
  Now, code that uses this module can call methods, and access
  properties that are in the public interface, but cannot change
  any private variables.
*/
SolarSystem.setLandedPlanets("Pluto");  // this works


/*
 This adds the property to the public interface, but the 
 existing, internal type property remains unchanged.
*/
// Sedan.type = "minivan"; 
// console.log(Sedan.getType());