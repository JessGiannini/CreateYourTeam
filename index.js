// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML.js");

// TODO: Create an array of questions for user input
const questionsMng = [
  {
    //# user input project title
    type: "input",
    message: "What is the name of the team manager?",
    name: "managerName",
  },
  {
    //title ## Description \n\n user input describtion
    type: "input",
    message: "What is the ID of the team manager?",
    name: "managerID",
  },
  {
    //in description add [Live Link](user input project link)
    type: "input",
    message: "What is the email of the team manager?",
    name: "managerEmail",
  },
  {
    //in description add [Live Link](user input project link)
    type: "input",
    message: "What is the office number of the team manager?",
    name: "managerOffice",
  },
];

const questionsEng = [
  {
    //link to id name
    type: "input",
    message: "What is the name of the team engineer?",
    name: "engineerName",
  },
  {
    //link to id id
    type: "input",
    message: "What is the ID of the team engineer?",
    name: "engineerID",
  },
  {
    //link to id email
    type: "input",
    message: "What is the email of the team engineer?",
    name: "engineerEmail",
  },
  {
    //link to id email github
    type: "input",
    message: "What is the Git Hub of the team engineer?",
    name: "engingeerGitHub",
  },
];

const questionsInt = [
  {
    //link to id name
    type: "input",
    message: "What is the name of the team intern?",
    name: "internName",
  },
  {
    //link to id email
    type: "input",
    message: "What is the email of the team intern?",
    name: "internEmail",
  },
  {
    //link to id school
    type: "input",
    message: "What is the school of the team intern?",
    name: "internSchool",
  },
];

const questionsNxt = [
  {
    // create a while true function to then create id tags for table of contents
    type: "list",
    message: "Which type of team member would you like to add?",
    name: "nextMember",
    choices: ["Engineer", "Intern", "I don't have another member to add."],
  },
];

function buildMng() {
  inquirer.prompt(questionsMng).next(data);
}

//prompts the user with the questions
function promptUser() {
  buildMng();
  inquirer.prompt(questionsNxt).then((data) => {
    switch (data.nextMember) {
      case "Engineer":
        //call inquier.prompt enginer questions
        inquirer.prompt(questionsEng);
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
  buildMng();
  promptUser();
}

// Function call to initialize app
init();
