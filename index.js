const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the team manager's ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice",
    },
];

const addEmployee = [
    {
        type: "list",
        message: "Would you like to add another employee?",
        name: "employeeAdd",
        choices: ["Yes","No"]
    },
    {
        type: "list",
        message: "What typoe of employee would you like to add?",
        name: "employeeType",
        choices: ["Engineer","Intern"],
        when: (answer) => answer.employeeAdd === 'Yes'
    },
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
    },
    {
        type: "input",
        message: "What is the team engineer's ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's github profile?",
        name: "engineerGithub",
    },
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "What schoot?",
        name: "internSchool",
    },
];


function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
        console.log("add Engineer function is being called")
        const newEngineer = new Engineer(
            answers.engineerID,
            answers.engineerName,
            answers.engineerEmail,
            answers.engineerGithub)
        addEmployeeQuestion();
    })
}

function addIntern() {
    inquirer.prompt(internQuestions)
    .then((answers) => {
        console.log("add Intern function is being called")
        const newIntern = new Intern(
            answers.internID,
            answers.internName,
            answers.internEmail,
            answers.internSchool)
        addEmployeeQuestion();
    })
}



function addEmployeeQuestion() {
    inquirer.prompt(addEmployee)
    .then((answer) =>{
        let type = answer.employeeType;
        console.log(type)
        switch(type){
        case (type === "Engineer"):
        addEngineer();
        break;
        case (type === "Intern"):
        addIntern();
        break;
        case (type === "Quit"):
        }
    })
};

function buildTeam() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
        const newManager = new Manager(
            answers.managerID,
            answers.managerName,
            answers.managerEmail,
            answers.managerOffice)
        addEmployeeQuestion();

    })
}

buildTeam();