class SVG {
    constructor() {
        this.text = ""
        this.shape = ""
    }
    setShape(shape) {
        this.shape = shape.render()
    }
    setText(text, color) {
        this.text = `<text x="0" y="15" fill="${color}">${text}</text>`
    }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`
    }
}

module.exports=SVG