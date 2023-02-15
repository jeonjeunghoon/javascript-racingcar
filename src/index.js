import RacingGame from './domain/RacingGame.js';
import Console from './utils/Console.js';
import Inputs from './view/Inputs.js';
import Outputs from './view/Outputs.js';

function App() {
  this.car = {
    count: 0,
    names: [],
  };

  this.play = async () => {
    await setGame();

    start();
    awards();
    exit();
  };

  const setGame = async () => {
    this.car.names = await Inputs.readCarName();
    this.car.count = await Inputs.readTryCount();
  };

  const start = () => {
    RacingGame.init(this.car.names);
    RacingGame.raceNTimes(this.car.count);

    if (RacingGame.isAllFailed()) {
      this.start();
    }
  };

  const awards = () => {
    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(RacingGame.snapShots);
    Outputs.printWinners(RacingGame.getWinners());
  };

  const exit = () => {
    Console.close();
  };
}

const app = new App();
app.play();
