const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else {
    badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection = 
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents 
  ### [Installation](#installation)
  ### [Description](#description)
  ### [Credit](#credit)
  ### [Contribution](#contributions)
  ### [Test](#test)
  ### [Questions](#questions)
  ### [Badges](#badges)

  ## Installation:
  ### You need to install these to use the app:
  ### ${answer.installation}

  ## Description:
  ### ${answer.description}
  ### Purpose: ${answer.purpose}
  ### Solution: ${answer.solution}
  ### Learning Point: ${answer.learn}

  ## Credit:
  ### ${answer.credit}

  ## Contribution:
  ### ${answer.contributions}

  ## Test:
  ### Follow these steps in your terminal to test this app:
  ### ${answer.test}

  ## Questions:
  ### Please let me know if you have any questions, I am more than happy to help!
  ### Github: https://github.com/${answer.url}
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
