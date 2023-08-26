const { Circle, Square, Triangle, Text, SVG, Shape } = require('./classes');


describe("SVG class tests", () => {
    test("SVG takes shape param", () => {
        const testShape = new Circle('red');
        const testSVG = new SVG(testShape)
        expect(testSVG.shape).toBeInstanceOf(Circle)
    })
    test("SVG takes text input", () => {
        const testText = new Text('ABC');
        const testSVG = new SVG('_', testText)
        expect(testSVG.text).toBeInstanceOf(Text)
    })
    test("SVG returns string", () => {
        const stringSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> shape text </svg>`
        const testSVG = new SVG('shape', 'text')
        expect(testSVG.render()).toEqual(stringSVG)
    })
})

describe("Circle class test", () => {
    test("Circle returns string", () => {
        const stringCircle = '<circle cx="150" cy="100" r="80" fill="color" />'
        const testCircle = new Circle('color')
        expect(testCircle.render()).toEqual(stringCircle)
    })
})