const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Storing an empty array as a variable so I can save the Manager's, Engineer and Intern's details into here
const employeeDetails = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// This function will present the Manager's questions and save the responses
function generateManager() {
    return inquirer.prompt([{
        name: 'managerName',
        message: 'Who is the team manager?'
    },
    {
        name: 'managerID',
        message: 'Please enter their Employee ID:'
    },
    {
        name: 'managerEmail',
        message: 'What is their email?'
    },
    {
        name: 'officeNumber',
        message: 'Please enter the office number:'
    }]).then(data => {
        // Here the data is being pushed into the stored array and a new Manager object created with the responses provided
        employeeDetails.push(new Manager(data.managerName, data.managerID, data.managerEmail, data.officeNumber));
    })
}


// This function will present the questions for the Engineer when selected and save the responses
function generateEngineer() {
    return inquirer.prompt([{
        name: 'engineerName',
        message: 'What is the name of the Engineer?'
    },
    {
        name: 'engineerID',
        message: 'Please enter their Employee ID:'
    },
    {
        name: 'engineerEmail',
        message: 'What is their email?'
    },
    {
        name: 'gitHubID',
        message: 'What is their GitHub username?'
    }]).then(data => {
        // Pushing data into stored array and creating a new Engineer object from the responses
        employeeDetails.push(new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.gitHubID));
    })
}


// This will present questions for the Intern when selected and save the responses
function generateIntern() {
    return inquirer.prompt([{
        name: 'internName',
        message: "What is the Intern's name?"
    },
    {
        name: 'internID',
        message: 'Please enter their Employee ID:'
    },
    {
        name: 'internEmail',
        message: 'What is their email?'
    },
    {
        name: 'school',
        message: 'What school are they attending?'
    }]).then(data => {
        // Pushing data into stored array and creating a new Intern object
        employeeDetails.push(new Intern(data.internName, data.internID, data.internEmail, data.school));
    })
}


// This function will display the main menu once the manager section has been completed. It allows the user to choose to add an Engineer, Intern or Finish and exit the app
function showMainMenu() {
    return inquirer.prompt({
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
        // Conditional statements to determine whether Engineer or Intern function is run next
        if (choice.options === 'engineer') return generateEngineer().then(showMainMenu);
        if (choice.options === 'intern') return generateIntern().then(showMainMenu);

    })
}


// This is the initial function starting the app
function init() {
    console.log('----Welcome to the Course Manager App!-----');

    // Setting the order in which the functions need to run:
    generateManager().then(showMainMenu).then(() => {
        console.log(employeeDetails);

        // Storing a variable with the render function which will allow the saved array to be added to the html file that is being generated
        const html = render(employeeDetails);

        //Creating the html file 
        fs.writeFile('./output/team.html', html, (error) => {
            if (error) {
                return console.log(error);
            } else{
                console.log('----Thank you for using the Course Manager App!----');
            }
        });
    });
}

init();