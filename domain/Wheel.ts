export class Wheel {
  constructor(private _width: number,
              private _diameter: number) {}

  get width() {
    return this._width;
  }

  get diameter() {
    return this._diameter;
  }
}
