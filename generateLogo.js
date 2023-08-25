function chooseShape(response) {
  if (response.shape === "circle") {
    return `<circle cx="150" cy="100" r="80" fill="${response.shapecolor}"/>`;
  }
  else if (response.shape === "square") {
    return `<rect x="45" y="10" width="200" height="200" fill="${response.shapecolor}"/>`;
  }
  else {
    return `<polygon points="150,18 244,182 56,182" fill="${response.shapecolor}"/>`;
  }
}

function generateSVG(response) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

 ${chooseShape(response)}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.characters}</text>

</svg>

`;
};

module.exports = { generateSVG };
