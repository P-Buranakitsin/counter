import * as actionTypes from "./actionTypes";

export const addCounter = (val) => {
  return {
    type: actionTypes.ADD_COUNTER,
    value: val,
  };
};

export const subtractCounter = (val) => {
  return {
    type: actionTypes.SUBTRACT_COUNTER,
    value: val,
  };
};

export const increaseCounter = () => {
  return {
    type: actionTypes.INCREASE_COUNTER,
  };
};

export const decreaseCounter = () => {
  return {
    type: actionTypes.DECREASE_COUNTER,
  };
};
