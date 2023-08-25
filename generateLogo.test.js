const markdown = require('./generateLogo');

class Circle {
    constructor(color,)
}

class Square {
    constructor(color,)
}

class Triangle {
    constructor(color,)
}

test('check shape and color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
});
