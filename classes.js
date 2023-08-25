class SVG {
    constructor(shape, text) {
        this.shape = shape;
        this.text = text;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shape} ${this.text}
        </svg>`
    }
}

class Shape {
    constructor(color) {
        this.color = color;
    }

}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}


/* <rect x="90" y="40" width="120" height="120" fill="turquoise" />

<polygon points="150, 18 244, 182 56, 182" fill="bisque" />

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

</svg> */