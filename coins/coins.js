/* ...........YOUR MISSION...........

Write a program that will convert a dollar amount to the number of coins that make up 
the amount. Use the common American coins of quarters, dimes, nickels, and pennies.

Input: 0.67 Output: { quarters: 2, dimes: 1, nickels: 1, pennies: 2 }

*/

function coinCounter (money) { 
// Initialize a JavaScript object to hold the coins var coinPurse = {};
var coinPurse = {
	dollar : 0, 
	quarters: 0,
	nickels: 0,
	pennies: 0,
	dimes: 0 
}
var input,
	  input1,
	  input2,
	  input3,
	  quarterInput,
	  quarterVal,
	  dimeInput,
	  dimeVal,
	  nickelsInput,
	  nickelsVal,
	  pennyInput,
	  pennyVal;


		 
		input = Math.floor(money / .25);
		console.log("quarters", input);
		coinPurse.quarters = input;
		quarterInput = input * .25;
		quarterVal = money - quarterInput; 

		input1 = Math.floor(quarterVal / .1);
		console.log("dimes", input1);
		coinPurse.dimes = input1;
		dimeInput = input1 * .1;
		dimeVal = quarterVal - dimeInput;

		input2 = Math.floor(dimeVal / .05);
		console.log("nickels", input2);
		coinPurse.nickels = input2;
		nickelsInput = input2 * .05;
		nickelsVal = dimeVal - nickelsInput;

		input3 = Math.floor(nickelsVal / .01);
		console.log("pennies", input3);
		coinPurse.pennies = input3;
		pennyInput = input3 * .01;
		pennyVal = nickelsVal - pennyInput;

	
} coinCounter(.67);

///////


/*
		 input.Mathfloor = money / .25;
		 coinPurse.quarters = input;
		 input = input * .25;
		 money2 = money - input;

		 input.Mathfloor = money2 / .1;
		 coinPurse.dimes = money2;
		 input = money2 * .1;
		 money3 = money2 - input; 

		 input.Mathfloor = money3 / .05; 
		 coinPurse.nickels = money3; 
		 input = money3 * .05; 
		 money4 = money3 - input;

		 input.Mathfloor = money4 / .01;
		 coinPurse.pennies = money4; 
		 input = money4 + .01; 
		 money5 = money4 - input; 
			
	}
}
*/





/*
var output = [];
var i, num;

money = money * 100;
for ( i =0; i < coins.length; i++) {
	num = Math.floor(money / coinPurse[i][0]);
	money -= num * coinPurse[i][0];
	if (num) {
		output.push(num + " " + coinPurse[i][num > 1 ? 2 : 1]);
	}
} return output.join(", ");

coinPurse.quarters = 0;

return coinPurse; }

coinCounter(0.67);

var coins = coinCounter() console.log();

function makeChange (money) {
    var i, num,
        output = [],
        coins  = [
            [100, "dollar",  "dollars" ],
            [25,  "quarter", "quarters"],
            [10,  "dime",    "dimes"   ],
            [5,   "nickel",  "nickels" ],
            [1,   "penny",   "pennies" ]
        ];
    money = money * 100; // avoid float precision issues
    for (i = 0; i < coins.length; i++) {
        num = Math.floor(money / coins[i][0]);
        money -= num * coins[i][0];
        if (num) {
            output.push(num + " " + coins[i][num > 1 ? 2 : 1]);
        }
    }
    return output.join(", ");
}

makeChange(0.37); // "1 quarter, 1 dime, 2 pennies" */