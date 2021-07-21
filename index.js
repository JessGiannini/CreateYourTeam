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
  // {
  //   type: "list",
  //   message: "Would you like to add a team member?",
  //   name: "addMember",
  //   choices: ["Yes", "No"],
  // },
  // {
  //   type: "input",
  //   message: "How many team members would you like to add?",
  //   name: "numberOfTeam",
  // },
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
  // {
  //   type: "list",
  //   message: "Would you like to add a team member?",
  //   name: "nextMember",
  //   choices: ["Yes", "No"],
  // },
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
  // {
  //   type: "list",
  //   message: "Would you like to add a team member?",
  //   name: "addMember",
  //   choices: ["Yes", "No"],
  // },
];

// const questionsNxt = [
//   {
//     // create a while true function to then create id tags for table of contents
//     type: "list",
//     message: "Which type of team member would you like to add?",
//     name: "engOrInt",
//     choices: ["Engineer", "Intern"],
//   },
// ];

//prompts the user with the questions
function promptUser() {
  inquirer.prompt(questionsMng).then((data) => {
    employeesChosen.push(data);
    console.log(data);
    inquirer.prompt(questionsEng).then((data) => {
      employeesChosen.push(data);
      console.log(data);
      inquirer.prompt(questionsInt).then((data) => {
        employeesChosen.push(data);
        console.log(data);
        console.log(employeesChosen);
        writeToFile(fileName, employeesChosen);
      });
    });
  });

  // inquirer.prompt(questionEng).then((data) => {
  //   employeesChosen.push(data);
  //   console.log(data);
  // });
  // inquirer.prompt(questionInt).then((data) => {
  //   employeesChosen.push(data);
  //   console.log(data);
  // });
}

// .then(function () {
//while loop that checks if the user wants to create a new employee
// let userWantsToCreate = true;
// while (userWantsToCreate) {
//   inquirer.prompt(questionsNxt).then((data) => {
//     if (data.engOrInt === "Engineer") {
//       inquirer.prompt(questionsEng).then((data) => {
//         employeesChosen.push(data);
//         if (data.nextMember === "No") {
//           userWantsToCreate = false;
//           //writeToFile(); //writes to file and ends program
//           return;
//         }
//       });
//     } else {
//       inquirer.prompt(questionsInt).then((data) => {
//         employeesChosen.push(data);
//         if (data.nextMember === "No") {
//           //writeToFile(); //writes to file and ends program
//           return;
//         }
//       });
//     }
//     console.log("data", data);
//   });
// }
// });

// creates the html file
function writeToFile(fileName, data) {
  let text = generateHTML(data);
  console.log("hello", text);
  console.log("GoodBye", fileName);
  fs.writeFile(fileName, text, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

const fileName = "./dist/Team.HTML";
//writeToFile(fileName, employeesChosen); // =>

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
