const inquirer = require("inquirer");
const fs = require("fs");


const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?"
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the team manager's ID?"
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the team manager's email?"
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the team manager's office number?"
        name: "managerOffice",
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?"
        name: "employeeType",
        choices: ['Engineer', 'Intern',"I don't want to add anyone else."],
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?"
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the team engineer's ID?"
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the engineer's email?"
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's github profile?"
        name: "engineerGithub",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?"
        name: "internName",
    },
    {
        type: "input",
        message: "What is the intern's ID?"
        name: "internID",
    },
    {
        type: "input",
        message: "What is the intern's email?"
        name: "internEmail",
    },
    {
        type: "input",
        message: "What schoot?"
        name: "internSchool",
    },
]

function buildTeam() {
    
}