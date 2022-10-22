import { Dispatch } from "redux";

export type GlobalState = {
  counter: ButtonType
}

export type ButtonProps = {
  color?: string;
  className?: string;
  children?: React.ReactNode;
  onSubmit: () => void;
};

export type SelectProps = {
  value: number;
  onChange: (value: number) => void;
};

export type ButtonType = {
  count: number;
  increaseBy: number;
}

export type ReduxAction = {
  payload: Object;
  type: string;
}


export type MiddlewareType = {
  getState: () => GlobalState;
  dispatch: Dispatch;
}
