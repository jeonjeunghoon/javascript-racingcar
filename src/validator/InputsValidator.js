import CarValidator from './CarValidator.js';
import Outputs from '../view/Outputs.js';

const InputsValidator = {
  readCarName(names, { onError: errorCallback }) {
    try {
      return CarValidator.checkName(names);
    } catch (error) {
      Outputs.printError(error);
      return errorCallback({ onError: errorCallback });
    }
  },

  readTryCount(count, { onError: errorCallback }) {
    try {
      return CarValidator.checkTryCount(count);
    } catch (error) {
      Outputs.printError(error);
      return errorCallback({ onError: errorCallback });
    }
  },
};

export default InputsValidator;
