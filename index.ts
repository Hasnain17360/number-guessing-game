#! /usr/bin/env node

import inquirer from "inquirer";

// 1) System will generate a random number

// 2) User input for guessing number

// 3) Compare user input and system's generated numbers and show result

const randomNumber = Math.floor(Math.random() *10 + 1);
// console.log(randomNumber);

console.log("Welcome to Number Guessing Game");

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number: ",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! You guessed the right number");
} else {
  console.log("You guessed the wrong number");
}
