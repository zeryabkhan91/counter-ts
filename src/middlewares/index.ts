import { Dispatch } from "redux";
import { decrement, increment } from "../store/counter";
import { MiddlewareType, ReduxAction } from "../types";

// defined increment timer middleware which will run after every 1 sec;
// timer will stop after ten seconds that is if state value is 10;
const incrementTimer = ({ dispatch, getState }: MiddlewareType) => {
  const timer = setInterval(() => {
    const state = getState()
    if (state.counter.count >= 10) {
      clearInterval(timer);
      return
    }

    if (state.counter.count < 0) {
      dispatch(decrement())
    } else {
      dispatch(increment())
    }
  }, 1000)

  return (next: Dispatch) => (action: ReduxAction) => {
    next(action);
  };
};


export {
  incrementTimer
}