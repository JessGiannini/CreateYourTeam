// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML.js");

// TODO: Create an array of questions for user input
const questionsEmployee = [
  {
    //# user input project title
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
  },
  {
    //title ## Description \n\n user input describtion
    type: "input",
    message: "What is the ID of the employee?",
    name: "id",
  },
  {
    //in description add [Live Link](user input project link)
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
  },
];
const questionsMng = [
  {
    //in description add [Live Link](user input project link)
    type: "input",
    message: "What is the office number of the team manager?",
    name: "managerOffice",
  },
];

const questionsEng = [
  {
    //link to id email github
    type: "input",
    message: "What is the Git Hub of the team engineer?",
    name: "engingeerGitHub",
  },
];

const questionsInt = [
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

// function buildMng() {
//   inquirer.prompt(questionsMng).next(data);
// }

//prompts the user with the questions
function promptUser() {
  
  inquirer.prompt(questionsNxt).then((data) => {
    switch (data.nextMember) {
      case "Engineer":
        //call inquier.prompt enginer questions
        questionsMem.push(questionEng)
        inquirer.prompt(questionsMem)
        .then(data => );
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
