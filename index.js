const inquirer = require('inquirer');
const fs = require('fs');

function getUserInput() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hexadecimal):'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'ellipse', 'rect']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hexadecimal):'
        }
    ]).then(answers => {
        let svg = generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);

        fs.writeFile('./logo.svg', svg, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log('Your logo has been generated, yay!');
        });
    }).catch(error => {
        console.error(error);
    });
}

getUserInput();

function generateLogo(text, textColor, shape, shapeColor) {
    // Create SVG markup
    const svgMarkup = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<${shape} width="100%" height="100%" fill="${shapeColor}"/>
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
`;

    return svgMarkup;
}
