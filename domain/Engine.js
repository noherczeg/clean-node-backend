class Engine {
  constructor(car, make, cc) {
    this._car = car;
    this._make = make;
    this._cc = cc;
  }

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

module.exports = {Engine};
