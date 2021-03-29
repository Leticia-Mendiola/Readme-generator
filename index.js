// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const license = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'checkbox',
        message: 'Please choose a license',
        name: 'license',
        choices: ['Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla', 'Zlib'],
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
      },
      {
        type: 'input',
        name: 'install',
        message: 'Provide installation instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do users use your application?',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'What are the guidelines for contributing?',
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide testing instructions.',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github url?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
    ]);
  };

const liceseId = answers.license.toLowerCase()
