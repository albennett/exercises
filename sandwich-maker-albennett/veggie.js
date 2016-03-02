var Sandwich = (function(veggie) {
	var veggieCost = { //costs of veggie
		"no vegetables":0, 
		"spinach": 0.75, 
		"pickles": 1.50, 
		"olives": 0.50
	};

	veggie.addVeggieCost = function(veggiechoice) {
		veggiechoice = $("#veggie").val();
		console.log("veggiechoice", veggiechoice);
		// Checking to see if a choice has been made
		
			// Setting variable for total cost of veggie
			var veggietotalcost = 0;
			// Looping through veggie choice array
			for (var i = 0; i < veggiechoice.length; i++) {
				console.log("Loop counter:", i)
				// Current array value
				var currentinput = veggiechoice[i];
				console.log("currentinput", currentinput);
				// Adding to total veggie cost
				veggietotalcost += veggieCost[currentinput];
				console.log("veggieCost[currentinput]", veggieCost[currentinput]);
				console.log("veggietotalcost", veggietotalcost);
			}
		
		return veggietotalcost; 
	}
	return veggie;
})(Sandwich || {})