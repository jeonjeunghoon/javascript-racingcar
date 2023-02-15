import { INITIAL_POSITION, STEP, MOVE_CONDITION } from '../constants/values.js';

const Car = name => {
  instance = {
    name: '',
    position: INITIAL_POSITION,
  };

  const init = name => {
    this.instance.name = name;
  };

  const getName = () => {
    return this.instance.name;
  };

  const getPosition = () => {
    return this.instance.position;
  };

  const move = number => {
    if (!this.shouldMove(number)) {
      return;
    }

    this.instance.position += STEP;
  };

  const shouldMove = number => {
    return number >= MOVE_CONDITION;
  };
};

export default Car;
