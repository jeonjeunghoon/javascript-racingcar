import Car from './Car.js';
import Random from '../utils/Random.js';
import { getRacingSnapShot } from '../utils/outputGenerator.js';
import { getMaxNumberInArray } from '../utils/numberHandler.js';
import { MOVELESS_CAR } from '../constants/values.js';

const RacingGame = {
  instance: {
    cars: [],
    snapShots: [],
  },

  init(names) {
    this.instance.cars = this.generateCars(names);
  },

  get snapShots() {
    return this.instance.snapShots;
  },

  generateCars(names) {
    const cars = names.map(name => Car(name));
    console.log(cars);

    return cars;
  },

  raceNTimes(n) {
    Array.from({ length: n }).forEach(() => this.race());
  },

  race() {
    this.moveCars();

    this.instance.snapShots = this.updateSnapShots();
  },

  moveCars() {
    this.instance.cars.forEach(car => car.move(Random.generateNumber()));
  },

  updateSnapShots() {
    return [...this.instance.snapShots, this.takeSnapShots()];
  },

  takeSnapShots() {
    return this.instance.cars.map(car => getRacingSnapShot(car)).join('\n');
  },

  getWinners() {
    const maxOfPosition = this.getMaxOfPosition();

    return this.instance.cars
      .filter(car => car.position === maxOfPosition)
      .map(car => car.name);
  },

  getMaxOfPosition() {
    return getMaxNumberInArray(this.instance.cars.map(car => car.position));
  },

  isAllFailed() {
    return this.instance.cars.every(car => car.position === MOVELESS_CAR);
  },
};

export default RacingGame;
