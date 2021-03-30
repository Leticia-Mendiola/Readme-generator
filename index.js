// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const licenseId = require('./utils/generateMarkdown.js');

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

// const licenseId = [
// [eclipse,"[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"],
// [gnu,"[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)"],
// [ibm,"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"],
// [mit,"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
// [mozilla,"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"],
// [zlib,"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"]
// ]
// const licenseValue = answers.license;
// for (const [name,value] of licenseId) {
//   if {
//     licenseValue == name
//   }
// }
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
  ${licenseId.mit}
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
