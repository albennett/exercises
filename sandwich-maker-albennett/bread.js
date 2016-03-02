var Sandwich = (function(bread) {
	var breadCosts = {  //costs of bread
		"wheat": 1.50,
		 "italian": 1.50, 
		 "rosemary": 3.00
		};

	bread.addBreadCost = function(breadchoice) {
		//gets value of the picked choice
		breadchoice = $("#bread").val();
		console.log("breadchoice", breadchoice);

		
			// variable for the total cost, starting at 0
			var breadtotalcost = 0;
			console.log("breadtotalcost", breadtotalcost);
		// loops through the array of possible values
			for (var i = 0; i < breadchoice.length; i++) {
				console.log("i", i);
				// puts value choice array in currentinput
				var currentinput = breadchoice[i];
				console.log("currentinput", currentinput);
				// adds to the total cost
				breadtotalcost += breadCosts[currentinput];
				console.log("breadCosts[currentinput]", breadCosts[currentinput]);
				
			}
		//returns the total cost
		return breadtotalcost; 
	};
	return bread;
})(Sandwich || {});