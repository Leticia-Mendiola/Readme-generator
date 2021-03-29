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

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const generateReadMe = (answers) =>
  `# ${answers.title}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

  ## License
  ${licenseId}
  ## Description

  ${answers.description}

  ## Installation

  ${answers.install}

  ## Usage

  ${answers.usage}

  ## Contributing

  ${answers.contribute}

  ## Testing

  ${answers.test}

  ## Questions

  If you have any questions, please feel free to reach out to me on GitHub at ${answers.github} or via email at ${answers.email}.
  `;

  // TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateReadMe(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

  // Function call to initialize app
init();
