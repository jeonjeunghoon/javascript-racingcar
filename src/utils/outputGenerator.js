import { MESSAGE } from '../constants/messages.js';
import { POSITION_SYMBOL } from '../constants/values.js';

const getPositionLine = position => {
  return POSITION_SYMBOL.repeat(position);
};

const getRacingSnapShot = car => {
  return `${car.name} : ${getPositionLine(car.position)}`;
};

const getWinnersMessage = winnerSet => {
  return `${winnerSet.join(',')}${MESSAGE.WINNERS}`;
};

export { getWinnersMessage, getRacingSnapShot };
