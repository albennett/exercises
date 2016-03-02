$(document).ready(function() {

var breadchoice;
var meatchoice;
var cheesechoice;
var condimentschoice;
var veggiechoice;
var total = 0; //start total at 0, and add to it

$("#make-button").click(function(e){
 //when clicked, function addBreadCost grabs the cost of bread
  var costofBread = Sandwich.addBreadCost(breadchoice);
    console.log("breadcost", costofBread);

    //when clicked, function  grabs the cost
    var costofMeat = Sandwich.addMeatCost(meatchoice);
    console.log("costofMeat", costofMeat);

    //when clicked, function  grabs the cost
    var costofCheese = Sandwich.addCheeseCost(cheesechoice);
    console.log("costofCheese", costofCheese);

    //when clicked, function  grabs the cost
  var costofVeggie = Sandwich.addVeggieCost(veggiechoice);
    console.log("costofVeggie", costofVeggie);


    //when clicked, function  grabs the cost
    var costofCondiment = Sandwich.addCondimentCost(condimentschoice);
    console.log("costofCondiment", costofCondiment);

    // adds up all of the costs to var total
    total = costofBread + costofMeat + costofCheese + costofVeggie + costofCondiment;
    total = total.toFixed(2);
    console.log("total", total);

    // To DOM
    var output = "<h2>Your total cost is: $" + total + "</h2>";
    $("#output").html(output)
  });


});