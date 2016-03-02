/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


function Multiply (a, b) {
  return a * b;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function Add (a, b) {
  return a + b;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function Subtract(a, b) {
  return a - b;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function Divide (a, b) {
  return a / b;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function threeArg (a, b, Modify) {
  return Modify(a, b);
 } 


// var buttons = document.getElementsByClassName("buttons");

// for (var i =0; i <buttons.length; i++) {
  document.getElementById("multiply").addEventListener("click", threeArg(first, second, Multiply));
  document.getElementById("add").addEventListener("click", threeArg(first, second, Add));
  document.getElementById("subract").addEventListener("click", threeArg(first, second, Subtract));

  document.getElementById("divide").addEventListener("click", function(event) {
    var first = parseInt(document.getElementById("firstNumber").value);
    console.log("first");
    var second = parseInt(document.getElementById("secondNumber").value);
    console.log("second");

    var result = threeArg(first, second, Divide);
    document.getElementById("result").innerHTML = result;

});


  /*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 
function multiply (first, second) {
  return first * second;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 
function add (first, second) {
  return first + second;
}



/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 
function subtract (first, second) {
  return first - second;
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 
function divide (first, second) {
  return first / second;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 
function performCalculation(first, second, operation) {
  return operation(first, second);
}


document.getElementById("add")
  .addEventListener("click", function(event) {

    // Get first operand value
    var firstOperand = parseInt(document.getElementById("firstOperand").value);

    // Get second operand value
    var secondOperand = parseInt(document.getElementById("secondOperand").value);

    // Call performCalculation
    var result = performCalculation(firstOperand, secondOperand, add);
    document.getElementById("result").innerHTML = result;
});






var buttons = document.getElementsByTagName("button");
var firstOperand, secondOperand;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    firstOperand = parseInt(document.getElementById("firstOperand").value, 10);
    secondOperand = parseInt(document.getElementById("secondOperand").value);

    var operation = window[event.target.id];


    var result = performCalculation(firstOperand, secondOperand, operation);

    document.getElementById("result").innerHTML = result;
    console.log("result",result);
  });
}
*/