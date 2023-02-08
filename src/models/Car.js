const Validator = require('../validator');
const Random = require('../utils/Random');
const {
  INIT_POSITION,
  STEP,
  FORWARD_CONDITIONS_NUMBER,
} = require('../constants/values');

class Car {
  #name;

  #position = INIT_POSITION;

  constructor(name) {
    Validator.Car.checkName(name);

    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getPosition() {
    return this.#position;
  }

  move() {
    const number = Random.generateNumber();

    if (number >= FORWARD_CONDITIONS_NUMBER) this.#position += STEP;
  }
}

module.exports = Car;
