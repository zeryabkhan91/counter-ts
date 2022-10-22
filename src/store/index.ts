import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { incrementTimer } from "../middlewares";
import { counterReducer } from "./counter";

const reducer = combineReducers({ counter: counterReducer });

export const reduxStore = configureStore({
  reducer,
  middleware: [incrementTimer],
});