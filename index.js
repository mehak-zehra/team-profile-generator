const inquirer = require('inquirer');
const open = require('open');

const generateTeam = require('./src/indexTemplate.js');
const fs = require('fs');
const path = require("path");

const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');


const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

let teamArr = [];
let idArr = [];

function addManager() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name? (Required) ",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a manager name!');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerId',
            message: "What is the team manager's employee ID? (Required) ",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log("Please enter a manager's Id!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's email address? (Required) ",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a valid email address! foramt(mehak.rizvi@gmail.com) ');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber', 
            message: "What is the team manager's office number? (Required) ",
            validate: input => {
                if(input == "") {
                    console.log("Please enter a office number");
                    return false;
                }
                else if (isNaN(input)) {
                    console.log(" Please enter a valid foramt for phone number! format(5103995555) ");
                    return false;
                } else {
                  return true;
                }
              }
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
        // console.log(answers);
        teamArr.push(manager);
        idArr.push(answers.managerId);
        addTeamMembers();
    })
}

function addTeamMembers() {
    inquirer.prompt({
        
        type: 'list',
        name: 'selection',
        message: 'Who would you like to add next as your team member?',
        choices: ['Engineer', 'Intern', 'End application']
    })
    .then((menuOptions) => {
        if (menuOptions.selection === "Engineer" ) {
            addEngineer();
        }
        else if (menuOptions.selection === "Intern") {
            addIntern();
        }
        else {
            generateHtml();
        }
    })
}

function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log("Please enter engineer's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is the engineer's ID?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log("Please enter engineer's valid Id!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's email address?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a valid email address!foramt(mehak.rizvi@gmail.com)');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'engineerGithub', 
            message: "What is the the engineer's github username?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a valid github username');
                  return false;
                }
              }
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
        // console.log(answers);
        teamArr.push(engineer);
        idArr.push(answers.engineerId);
        addTeamMembers();
    })
    
}
function addIntern() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern's name?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log("Please enter intern's name");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is the Intern's ID?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a valid interns id');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern's email address?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter a email address!foramt(mehak.rizvi@gmail.com');
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'internSchool', 
            message: "What is the Intern's school name?(Required)",
            validate: input => {
                if (input !== "") {
                  return true;
                } else {
                  console.log('Please enter interns school name');
                  return false;
                }
              }
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
        teamArr.push(intern);
        idArr.push(answers.internId);
        addTeamMembers();
    })
    
}

function generateHtml() {
    console.log("Generating Team Profile.... ");
    fs.writeFileSync(outputPath, generateTeam(teamArr), "utf-8");
    inquirer.prompt({
      type: 'list',
      name: 'option',
      message: "Do you want to open your profile in your default browser?",
      choices: ['Yes', "No"]
    })
    .then((answers) => {
      if(answers.option === "Yes"){
        open("file:///"+outputPath);
      }
      else {
        console.log("you can see your profile in dist folder" +outputPath)
      }
    })
    
}

addManager();
