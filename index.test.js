const { generateLogo } = require('./mainLogic');

describe('generateLogo', () => {
    test('generates logo correctly', () => {
        const text = 'ABC';
        const textColor = 'red';
        const shape = 'circle';
        const shapeColor = 'blue';

        const result = generateLogo(text, textColor, shape, shapeColor);

        expect(result).toBe('Generated logo with text "ABC", text color "red", shape "circle", and shape color "blue"');
    });
});
