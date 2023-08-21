const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./generateLogo');

const questions = [
    {
        type: 'input',
        message: 'Choose up to three characters for your logo.',
        name: 'characters',
    },
    {
        type: 'input',
        message: 'What color do you want your TEXT to be?',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'What shape do you want?',
        choices: ["Circle", "Square", "Triangle"],
        default: "none",
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color do you want your SHAPE to be?',
        name: 'shapecolor',
    },
]

inquirer
    .prompt(questions)

    // .then((data) => {
    //     let allData = markdown.generateMarkdown(data);
    //     fs.writeFile('.logo.svg', allData, (err) =>
    //         err ? console.error(err) : console.log('Generated logo.svg')
    //     )
    // });
