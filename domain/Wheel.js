class Wheel {
    constructor(width, diameter) {
        this._width = width;
        this._diameter = diameter;
    }

    get width() {
        return this._width;
    }

    get diameter() {
        return this._diameter;
    }
}

module.exports = { Wheel };
