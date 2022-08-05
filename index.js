


var readlineSync = require("readline-sync");
const chalk = require('chalk');

// welcome
function welcome() {
  var username = readlineSync.question(chalk.blue("what's your name? "));
  console.log("welcome " + chalk.yellow.bold(username) + " to my Space quiz");
  console.log(chalk.magentaBright("I hope you are excited."));
  console.log(chalk.yellow("Answer all the questions correctly, to go to the next level."));
  console.log("-------");
}
var score = 0;
var highScore =
{
  name: "Gurdial",
  score: 5
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("You are wrong!"))

  }
  console.log("------")
}
var questions = [
  {
    question: "How many years ago did the Bigbang happend?",
    answer: "13.7 B"
  }, {
    question: "Largest planet in the solar system?",
    answer: "Saturn"
  }, {
    question: "How many Earths can fit in Saturn?",
    answer: "700",
  }, {
    question: "First artificial satellite placed on the Earth's orbit?",
    answer: "Sputnik 1",
  }, {
    question: "First aircraft to leave our solar system?",
    answer: " Voyager 1"
  }
]
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}
function showScores() {
  console.log(chalk.yellow("you scored: ", score));
  if (score === 5) {
    console.log(chalk.yellow("Congrat's you are going to the next level."));
  } else {
    console.log("Please try again!")
  }
  console.log(highScore.name + " highscore is : " + highScore.score);
  console.log(" Check out the high scores, if you should be there ping me and I'll update it: ");
}
welcome()
game()
var highScore =
{
  name: "Gurdial",
  score: 5
}

showScores()