import {Car} from './Car';

export class Engine {
  constructor(private _car: Car,
              private _make: string,
              private _cc: number) {}

  get cc() {
    return this._cc;
  }

  get make() {
    return this._make;
  }

  get car() {
    return this._car;
  }

}
