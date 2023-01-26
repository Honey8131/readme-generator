// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
/*'What was your motivation?',
    'What problem does your project solve?',
    'What did you learn from your project?'*/

const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What was the title of your project?',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Please enter project title.');
            return false;
        }
    }

  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
    validate: titleInput = () => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Please select one of the options provided.');
            return false;
        }
    }

  },
  {
    type: 'input',
    name: 'installation',
    message: 'What steps are needed to install your project?',
    validate: installationInput => {
        if(installationInput) {
            return true;
        } else {
            console.log('Please provide steps for installation.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What motivated you to create this project?',
    validate: motivationInput => {
        if (motivationInput) {
            return true;
        } else {
            console.log('Please type your motivation');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'solution',
    message: 'What problem does your project solve?',
    validate: solutionInput => {
        if (solutionInput) {
            return true;
        } else {
            console.log('Please provide solution');
            return false;
        }
    }
  }
  {
    type: 'input',
    name: 'learn',
    message: 'What did you learn from your project?',
    validate: learnInput => {
        if (learnInput) {
            return true;
        } else {
            console.log('Please provide learning point');
            return false;
        }
    }
  },
];



// TODO: Create a function to write README file
function writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions)
    .then(function(answer) {
        console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
    });
}

// Function call to initialize app
init();
