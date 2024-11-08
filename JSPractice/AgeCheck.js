const prompt = require("prompt-sync")();

let userInput = prompt("Please enter a number:");


if (userInput > 10) {
  console.log("The number is greater than 10.");
} else if (userInput < 10) {
  console.log("The number is less than 10.");
} else {
  console.log("The number is 10.");
}
