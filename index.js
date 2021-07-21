// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML.js");
const employeesChosen = [];

// TODO: Create an array of questions for user input
const questionsMng = [
  {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the ID of the employee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the office number of the team manager?",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "Would you like to add a team member?",
    name: "nextMember",
    choices: ["Yes", "No"],
  },
];

const questionsEng = [
  {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the ID of the employee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the Git Hub of the team engineer?",
    name: "engingeerGitHub",
  },
  {
    type: "list",
    message: "Would you like to add a team member?",
    name: "nextMember",
    choices: ["Yes", "No"],
  },
];

const questionsInt = [
  {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the ID of the employee?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the school of the team intern?",
    name: "internSchool",
  },
  {
    type: "list",
    message: "Would you like to add a team member?",
    name: "addMember",
    choices: ["Yes", "No"],
  },
];

const questionsNxt = [
  {
    // create a while true function to then create id tags for table of contents
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "Eng or Int",
    choices: ["Engineer", "Intern"],
  },
];

//prompts the user with the questions
function promptUser() {
  inquirer.prompt(questionsMng).then((data) => employeesChosen.push(data) {
    switch (data.nextMember) {
      case "Engineer":
        //call inquier.prompt enginer questions
        inquirer
          .prompt(questionsMem)
          .then((data) => employeesChosen.push(data));
        break;
      case "Intern":
        //call inquier.prompt
        inquirer.prompt(questionsInt);
        break;
      default:
        //print file
        writeToFile();
    }
  });
  // .then((answers) => );
  return questionsNxt;
}

// creates the html file
function writeToFile(fileName, data) {
  let text = generateHTML(data);

  fs.writeFile(fileName, text, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
