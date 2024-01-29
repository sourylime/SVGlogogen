function generateLogo(text, textColor, shape, shapeColor) {
    // Create SVG markup
    const svgMarkup = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="${shapeColor}"/>
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>
    `;

    return svgMarkup;
}

module.exports = {
    generateLogo
};
