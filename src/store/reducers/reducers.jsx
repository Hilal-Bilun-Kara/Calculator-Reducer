import {
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DİSPLAY,
  EQUALS,
  TYPE_SCREEN,
  MEMORY_PLUS,
  MEMORY_MR,
  MEMORY_MC,
} from '../actions/actions.jsx';

export const initialState = {
  total: 0,
  operation: '+',
  memory: 0,
  temp: 0,
};

const calculateResult = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    case '/':
      return num1 / num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
        total: initialState.total,
        temp: state.total,
      };

    case CLEAR_DİSPLAY:
      return {
        ...state,
        total: initialState.total,
      };

    case EQUALS:
      return {
        ...state,
        total: calculateResult(state.temp, state.total, state.operation),
      };

    case TYPE_SCREEN:
      return {
        ...state,
        total:
          state.total == 0
            ? action.payload
            : state.total.toString() + action.payload.toString(),
      };

    case MEMORY_PLUS:
      return {
        ...state,
        memory: state.total,
      };

    case MEMORY_MR:
      return {
        ...state,
        total: state.memory,
      };

    case MEMORY_MC:
      return {
        ...state,
        memory: initialState.total,
      };

    default:
      return state;
  }
};

export default reducer;
