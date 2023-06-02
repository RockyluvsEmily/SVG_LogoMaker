class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="75" stroke="black" stroke-width="3" fill:"${this.color}" />`
    }
}
class Square extends Shape {
    render() {
        return `<rect width="300" height="100" style="fill:"${this.color};stroke-width:3;stroke:rgb(0,0,0)" />`
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon points="150,20 250,190 160,210" style="fill:"${this.color};stroke:purple;stroke-width:1" /> />`
    }
}

module.exports={Circle,Square,Triangle}