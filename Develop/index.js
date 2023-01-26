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
    name: 'description',
    message: 'Describe your project.',
    validate: descriptionInput => {
        if(descriptionInput) {
            return true;
        } else {
            console.log('Please provide project description.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose of this project?',
    validate: purposeInput => {
        if (purposeInput) {
            return true;
        } else {
            console.log('Please type the purpose of your porject.');
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
  },
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
  {
    type: 'input',
    name: 'credit',
    message: 'Who helped make this project?',
    validate: creditInput => {
        if (creditInput) {
            return true;
        } else {
            console.log('Please list of contributors.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'What are contribution guidelines for users?',
    validate: contributionsInput => {
        if (contributionsInput) {
            return true;
        } else {
            console.log('Please provide list of contributors.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'What steps can users follow to test this app?',
    validate: testInput => {
        if (testInput) {
            return true;
        } else {
            console.log('Please provide testing steps.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'url',
    message: 'What is your github url in case users need to ask you a question?',
    validate: urlInput => {
        if (urlInput) {
            return true;
        } else {
            console.log('Please provide Github url.');
            return false;
        }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email in case users need to ask you a question?',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('Please provide Github url.');
            return false;
        }
    }
  },
];



// TODO: Create a function to write README file
const writeToFile = fileContent => {
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
  inquirer.prompt(questions)
    .then(function(answer) {
        console.log(answer);
    var fileContent = generateMarkdown(answer);
    writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

module.exports = questions;
