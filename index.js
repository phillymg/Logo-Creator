const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle, Text, SVG } = require('./lib/classes');

function checkCharacterLength(input) {
    if (input.length > 3) {
        return "Invalid. You may only choose up to three characters"
    } else {
        return true;
    }
}

const questions = [
    {
        type: 'input',
        message: 'Choose up to three characters for your logo.',
        name: 'characters',
        validate: checkCharacterLength,
    },
    {
        type: 'input',
        message: 'What color do you want your TEXT to be?',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'What shape do you want?',
        choices: ["circle", "square", "triangle"],
        default: "circle",
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

    .then((data) => {
        let shape;
        if (data.shape === 'circle') {
            shape = new Circle(
                data.shapecolor
            )
        } else if (data.shape === 'square') {
            shape = new Square(
                data.shapecolor
            )
        } else if (data.shape === 'triangle') {
            shape = new Triangle(
                data.shapecolor
            )
        }
        const newText = new Text(
            data.characters,
            data.textcolor
        );
        const newSVG = new SVG(
            shape.render(),
            newText.render()
        )
        let allData = newSVG.render();
        fs.writeFile('./logo.svg', allData, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        )
    });