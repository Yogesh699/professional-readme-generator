const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
        validate: (input) => {
            if (input.trim() === '') {
            return 'Project title cannot be empty. Please enter a title.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:',
        validate: (input) => {
            if (input.trim() === '') {
            return 'Project description cannot be empty. Please enter a short description.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage:',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List collaborators, third-party assets, or tutorials used:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Explain how to run tests (if applicable):',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        validate: (input) => {
            if (input.trim() === '') {
            return 'Username cannot be empty. Please enter a username.';
            }
            return true;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: (input) => {
            if (input.trim() === '') {
            return 'Email cannot be empty. Please enter a email.';
            }
            return true;
        },
    },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md successfully generated!')
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    const fileName = 'README.md';
    writeToFile(fileName, readmeContent);
  });
}

init();
