import { createAction } from "@reduxjs/toolkit";
import { ButtonType, ReduxAction } from "../types";

const INCREMENT_ACTION = "increment";
const DECREMENT_ACTION = "decrement";
const CHANGE_INCREASE_BY_VALUE = "changeIncreaseByValue";

function withPayloadType() {
  return (t: number) => ({ payload: t })
}

export const increment = createAction(INCREMENT_ACTION);
export const decrement = createAction(DECREMENT_ACTION);
export const changeIncreaseByValue = createAction(
  CHANGE_INCREASE_BY_VALUE,
  withPayloadType()
);

const initialState: ButtonType = {
  count: 0,
  increaseBy: 1,
};

// reducer define which will take action type and then base on type increase or decrease initial state
export const counterReducer = (
  initialCountState: ButtonType = initialState,
  action: ReduxAction
) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return {
        ...initialCountState,
        count: initialCountState.count + (initialCountState.increaseBy || 1),
      };
    case DECREMENT_ACTION:
      return {
        ...initialCountState,
        count: initialCountState.count - (initialCountState.increaseBy || 1),
      };
    case CHANGE_INCREASE_BY_VALUE:
      return { ...initialCountState, increaseBy: action.payload };
    default:
      return initialCountState;
  }
};
