import { InputError, ERROR_CODE } from '../utils/Errors.js';
import STRING_VALIDATOR_CONDITION from '../constants/condition.js';

const StringValidator = {
  throwStringValidatorError({ code, payload }, value) {
    throw new InputError({ code, payload }, value);
  },

  isUnique(values) {
    const set = new Set(values);

    if (STRING_VALIDATOR_CONDITION.UNIQUE_VALUES(values.length, set.size)) {
      return true;
    }

    this.throwStringValidatorError({ code: ERROR_CODE.NOT_UNIQUE }, values);
  },

  isValidStringSize(value, min, max) {
    if (STRING_VALIDATOR_CONDITION.VALID_SIZE(value.length, min, max)) {
      return true;
    }

    this.throwStringValidatorError(
      { code: ERROR_CODE.INVALID_STRING_SIZE, payload: { min, max } },
      value
    );
  },

  validateNumberRange(value, min, max) {
    if (STRING_VALIDATOR_CONDITION.VALID_RANGE(value, min, max)) {
      return true;
    }

    this.throwStringValidatorError(
      { code: ERROR_CODE.INVALID_STRING_SIZE, payload: { min, max } },
      value
    );
  },

  testRegExp(value, regExp) {
    if (STRING_VALIDATOR_CONDITION.PASSED_FORMAT(value, regExp)) {
      return true;
    }

    this.throwStringValidatorError({ code: ERROR_CODE.WRONG_FORMAT }, value);
  },
};

export default StringValidator;
