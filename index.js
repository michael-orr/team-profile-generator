const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const Team = require("./lib/Team");
const generatehtml = require("./samplehtml");
const team = [];

const managerQuestions = [
    {
        type: "input",
        message: "What is the name of the team?",
        name: "teamName",
    },
    {
        type: "input",
        message: "What is the mission of this team?",
        name: "missionStatement",
    },
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
    return inquirer.prompt(engineerQuestions)
    .then((answers) => {
        const newEngineer = new Engineer(
            answers.engineerName,
            answers.engineerID,
            answers.engineerEmail,
            answers.engineerGithub)
        team.push(newEngineer);
        addEmployeeQuestion();
    })
}

function addIntern() {
    return inquirer.prompt(internQuestions)
    .then((answers) => {
        const newIntern = new Intern(
            answers.internName,
            answers.internID,
            answers.internEmail,
            answers.internSchool)
        team.push(newIntern);
        addEmployeeQuestion();
    })
}

function renderTeam(team) {
    console.log(team);
    const fileName = `teamprofile.html`;
    const teamProfile = generatehtml(team);
    fs.writeFile(fileName, teamProfile, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}


function addEmployeeQuestion() {
    return inquirer.prompt(addEmployee)
    .then((answer) =>{
        switch(answer.employeeType){
        case "Engineer":
        addEngineer();
        break;
        case "Intern":
        addIntern();
        break;
        default:
        renderTeam(team);
        break;
        }
    })
};


function buildTeam() {
    return inquirer.prompt(managerQuestions)
    .then((answers) => {
        const teamInfo = new Team(
            answers.teamName,
            answers.missionStatement
        )
        team.push(teamInfo);
        const newManager = new Manager(
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOffice)
        team.push(newManager);
        addEmployeeQuestion();

    })
}

buildTeam();