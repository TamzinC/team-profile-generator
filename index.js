const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.
function generateManager() {
    return inquirer.prompt({
        name: 'managerName',
        message: "Please enter the Team Manager's name."
    },
    {
        name: 'managerID',
        message: 'Please their Employee ID'
    },
    {
        name: 'managerEmail',
        message: 'Please enter their email address.'
    },
    {
        name: 'officeNumber',
        message: 'Please enter the office number'
    }).then(data => {
        console.log(data);
    })
}

function generateEngineer() {
    return inquirer.prompt({
        name: 'engineerName',
        message: "Please enter the Engineer's name."
    },
    {
        name: 'engineerID',
        message: 'Please their Employee ID'
    },
    {
        name: 'engineerEmail',
        message: 'Please enter their email address.'
    },
    {
        name: 'gitHubID',
        message: 'Please enter their GitHub username'
    }).then(data => {
        console.log(data);
    })
}

function generateIntern() {
    return inquirer.prompt({
        name: 'internName',
        message: "Please enter the intern's name."
    },
    {
        name: 'internID',
        message: 'Please their Employee ID'
    },
    {
        name: 'internEmail',
        message: 'Please enter their email address.'
    },
    {
        name: 'school',
        message: 'Please enter their school name'
    }).then(data => {
        console.log(data);
    })
}

function showMainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Please select an option',
        choices: [
            {
                name: 'Add an Engineer',
                value: 'engineer'
            },
            {
                name: 'Add an intern',
                value: 'intern'
            },
            {
                name: 'Finish building the team',
                value: 'exit'
            }
        ]
    }).then(choice => {
        if (choice.option === 'engineer') return generateEngineer();
        if (choice.option === 'intern') return generateIntern();

        console.log('----Thank you for using the Course Manager App!----');
        process.exit(render);
    })
}


function init() {
    console.log('----Welcome to the Course Manager App!-----');

    generateManager().then(showMainMenu);
}

init();