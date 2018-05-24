const { Wheel } = require('./Wheel');

class Car {
    constructor(color, engine) {
        this._color = color;
        this._engine = engine;
        this._wheels = [];
    }

    get color() {
        return this._color;
    }

    get engine() {
        return this._engine;
    }

    get wheels() {
        return this._wheels;
    }

    static createDefault(color, engine) {
        if (!color || color.length < 2) {
            throw new Error(JSON.stringify({
                code: 'ERR-1',
                message: 'Validation Error',
                ctx: { attr: 'color', value: color, rule: 'min:2' },
            }));
        }
        return new Car(color, engine);
    }

    addWheel(wheelData) {
        const wheel = new Wheel(wheelData.width, wheelData.diameter);
        this._wheels.push(wheel);
    }
}

module.exports = { Car };
