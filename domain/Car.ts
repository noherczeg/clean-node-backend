import {Wheel} from './Wheel';
import {Engine} from './Engine';

export class Car {
  constructor(private _color: string,
              private _engine: Engine,
              private _wheels: Wheel[] = []) {}

  get color() {
    return this._color;
  }

  get engine() {
    return this._engine;
  }

  get wheels() {
    return this._wheels;
  }

  static createDefault(color: string, engine: Engine) {
    if (!color || color.length < 2) {
      throw new Error(JSON.stringify({
        code: 'ERR-1',
        message: 'Validation Error',
        ctx: {attr: 'color', value: color, rule: 'min:2'},
      }));
    }
    return new Car(color, engine);
  }

  addWheel(wheelData: any) {
    const wheel = new Wheel(wheelData.width, wheelData.diameter);
    this._wheels.push(wheel);
  }
}
