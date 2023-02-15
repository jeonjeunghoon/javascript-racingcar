import Console from '../utils/Console.js';
import { getWinnersMessage } from '../utils/outputGenerator.js';

const Outputs = {
  printError(error) {
    Console.print(error);
  },

  printGameResultMessage() {
    Console.print('\n실행 결과');
  },

  printRacingSnapShot(snapShots) {
    snapShots.forEach(snapShot => Console.print(`${snapShot}\n`));
  },

  printWinners(winners) {
    Console.print(getWinnersMessage(winners));
  },
};

export default Outputs;
