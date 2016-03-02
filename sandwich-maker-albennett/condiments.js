var Sandwich = (function(condiments) {
	var condimentCost = { //costs of condiment
		"no condiments":0, 
		"ketchup": 0.10,
		 "mustard": 0.50,
		 "guacamole": 2.00
		};

	condiments.addCondimentCost = function(condimentschoice) {
		//gets value of the picked choice
		condimentschoice = $("#condiments").val();
		console.log("condimentschoice", condimentschoice);
		// variable for the total cost, starting at 0
			var condimentstotalcost = 0;
		// loops through the array of possible values
			for (var i = 0; i < condimentschoice.length; i++) {
				// puts value choice array in currentinput
				var currentinput = condimentschoice[i];
				console.log("currentinput", currentinput);
			// adds to the total cost
				condimentstotalcost += condimentCost[currentinput];
				console.log("condimentCost[currentinput]", condimentCost[currentinput]);
			
			}
		
		return condimentstotalcost; //returns the total cost
	}
	return condiments;
})(Sandwich || {})