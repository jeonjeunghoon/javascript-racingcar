import StringValidator from './StringValidator.js';
import { NAME, TRY_COUNT } from '../constants/values.js';
import {
  ALPHA_WITH_COMMA,
  ONLY_NUMBERS,
} from '../constants/regularExpression.js';

const CarValidator = {
  checkName(names) {
    const carNames = names.split(',');
    StringValidator.testRegExp(carNames, ALPHA_WITH_COMMA);
    StringValidator.isUnique(carNames);
    carNames.forEach(name =>
      StringValidator.isValidStringSize(name, NAME.MIN, NAME.MAX)
    );

    return carNames;
  },

  checkTryCount(count) {
    StringValidator.testRegExp(count, ONLY_NUMBERS);
    StringValidator.validateNumberRange(
      parseInt(count),
      TRY_COUNT.MIN,
      TRY_COUNT.MAX
    );

    return parseInt(count, 10);
  },
};

export default CarValidator;
