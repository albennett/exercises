var Sandwich = (function(meat) {
	var meatCost = { //costs of meat
	"no meat":0, 
	"turkey": 3.00, 
	"chicken": 4.00, 
	"bacon": 5.00
	};

	meat.addMeatCost = function(meatchoice) {
		//gets value of the picked choice
		meatchoice = $("#meat").val();
		console.log("meatchoice", meatchoice);
		// variable for the total cost, starting at 0
			var meattotalcost = 0;
		// loops through the array of possible values
			for (var i = 0; i < meatchoice.length; i++) {
			// puts value choice array in currentinput
				var currentinput = meatchoice[i];
				console.log("currentinput", currentinput);
			// adds to the total cost
				meattotalcost += meatCost[currentinput];
				console.log("meatCost[currentinput]", meatCost[currentinput]);
				
			}
		
		return meattotalcost; //returns the total cost
	}
	return meat;
})(Sandwich || {})