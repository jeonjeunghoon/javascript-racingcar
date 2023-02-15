const RacingGame = require('../domain/RacingGame.js');
const Console = require('../utils/Console.js');
const Inputs = require('../view/Inputs.js');
const Outputs = require('../view/Outputs.js');

export default class Game {
  #racingGame;
  #car = {
    count: 0,
    names: [],
  };

  async play() {
    await this.setGame();

    this.start();
    this.awards();
    this.exit();
  }

  async setGame() {
    this.#car.names = await Inputs.readCarName();
    this.#car.count = await Inputs.readTryCount();
  }

  start() {
    this.#racingGame = new RacingGame(this.#car.names);
    this.#racingGame.raceNTimes(this.#car.count);

    if (this.#racingGame.isAllFailed()) {
      this.start();
    }
  }

  awards() {
    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(this.#racingGame.snapShots);
    Outputs.printWinners(this.#racingGame.getWinners());
  }

  exit() {
    Console.close();
  }
}
