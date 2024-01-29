const { getUserInput } = require('./userInterface');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('getUserInput', () => {
    test('returns user input', async () => {
        inquirer.prompt.mockResolvedValueOnce({
            text: 'ABC',
            textColor: 'red',
            shape: 'circle',
            shapeColor: 'blue'
        });

        const userInput = await getUserInput();

        expect(userInput).toEqual({
            text: 'ABC',
            textColor: 'red',
            shape: 'circle',
            shapeColor: 'blue'
        });
    });
});
