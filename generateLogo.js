function chooseShape(response, shape) {
  if (shape === "circle") {
    return `<circle cx="150" cy="100" r="80" fill="${response.shapecolor}" />`;
  }
  else if (shape === "square") {
    return `<rect cx="150" cy="100" width="30" height="30" fill="${response.shapecolor}"/>`;
  }
  else {
    return `<polygon points="100,100 50,10 0,100" style="${response.shapecolor}"/>`;
  }
}

function generateSVG(response) {
  return `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

 ${chooseShape(response.shape)}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>

</svg>

`;
};

module.exports = { generateSVG };
