// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operator/:num1/:num2", function(req, res) {

    let operator = req.params.operator;
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    var result; 


  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operator) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    result = add(num1,num2);
    break;
  case "subtract":
    result = subtract(num1,num2);
    break;
  case "multiply":
    result = multiply(num1,num2);
    break;
  case "divide":
    result = divide(num1,num2);
    break;
  default: result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }
  function addition(num1, num2){
     return num1 + num2;
  }
  function subtract(num1, num2){
    return num1 - num2;
  }
  function multiply(num1, num2){
    return num1 * num2;
  }
  function divide(num1, num2){
    return num1 / num2;
  }      
  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
