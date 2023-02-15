import ERROR_CODE from '../constants/errorCode.js';
import ERROR_MESSAGE from '../constants/errorMessage.js';

const createParams = ({ code, payload = null }, value) => {
  if (!ERROR_MESSAGE[code]) {
    return [
      ERROR_MESSAGE[ERROR_CODE.WRONG_ERROR_CODE](),
      { cause: { code: ERROR_CODE.WRONG_ERROR_CODE, value: code } },
    ];
  }

  return [ERROR_MESSAGE[code](payload), { cause: { code, value } }];
};

class InputError extends Error {
  constructor(about, value = null) {
    super(...createParams(about, value));
  }
}

export { InputError, ERROR_CODE };
