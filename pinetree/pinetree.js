/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

//parseInt()



var tree = function(number) {

var count = 1;
var spaceCount = ((number + (number - 1))-1)/2;
//number of rows
  for (i = 0; i <= number; i++) {
    //set row variable
    var row = "";
    //
   for (j=0; j < spaceCount; j++){
    var row = rows + " ";
    }

    for (var k = 0; k < count; k++) {
      var row = row;row = ("*");

      count+= 2;
      spaceCount -= 1;
      console.log(row);
    }
};

tree(7); 


//// another way

var tree = function(height) {
  var pinetree = [];
  pinetree[height] = "*";
  for (var j = 0; j < pinetree.length; j++) {
    pinetree[j] = " ";

  }
  for (var i = 0; i < height; i++) {
    pinetree[height-i] = "*";
    pinetree[height+i] = "*";

    var pineOutput = pinetree.join("");
    console.log(pineOutput);
  }
}; tree(10);
