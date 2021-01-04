import * as actionTypes from "../actions/actionTypes";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };

    case actionTypes.DECREASE_COUNTER:
      return { ...state, counter: state.counter - 1 };

    case actionTypes.ADD_COUNTER:
      return { ...state, counter: state.counter + action.value };

    case actionTypes.SUBTRACT_COUNTER:
      return { ...state, counter: state.counter - action.value };

    default:
      return state;
  }
};
export default counterReducer;
