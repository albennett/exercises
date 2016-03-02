var Sandwich = (function(cheese) {
	var cheeseCost = { //costs of cheese
		"no cheese": 0, 
		"american": 0.70, 
		"cheddar": 0.50, 
		"swiss": 1.00
	};

	cheese.addCheeseCost = function(cheesechoice) {
		//gets value of the picked choice
		cheesechoice = $("#cheese").val();
		console.log("cheesechoice", cheesechoice);
		// variable for the total cost, starting at 0
			var cheesetotalcost = 0;
			// loops through the array of possible values
			for (var i = 0; i < cheesechoice.length; i++) {
				console.log("i", i)
				// puts value choice array in currentinput
				var currentinput = cheesechoice[i];
				console.log("currentinput", currentinput);
				// adds to the total cost
				cheesetotalcost += cheeseCost[currentinput];
				console.log("cheeseCost[currentinput]", cheeseCost[currentinput]);
				
			}
		
		return cheesetotalcost;  //returns the total cost
	}
	return cheese;
})(Sandwich || {})