export const APPLY_NUMBER = 'APPLY_NUMBER';
export const CHANGE_OPERATION = 'CHANGE_OPERATION';
export const CLEAR_DİSPLAY = 'CLEAR_DİSPLAY';
export const EQUALS = 'EQUALS';
export const TYPE_SCREEN = 'TYPE_SCREEN';
export const MEMORY_PLUS = 'MEMORY_PLUS';
export const MEMORY_MR = 'MEMORY_MR';
export const MEMORY_MC = 'MEMORY_MC';

export const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

export const clearDisplay = () => {
  return { type: CLEAR_DİSPLAY };
};

export const equalsDisplay = () => {
  return { type: EQUALS };
};

export const typeScreen = (number) => {
  return { type: TYPE_SCREEN, payload: Number(number) };
};

export const memoryPlus = (number) => {
  return { type: MEMORY_PLUS, payload: Number(number) };
};

export const memoryMr = () => {
  return { type: MEMORY_MR };
};

export const memoryMc = () => {
  return { type: MEMORY_MC };
};
