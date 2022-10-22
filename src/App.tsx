import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { changeIncreaseByValue, decrement, increment } from "./store/counter";
import { ButtonType, GlobalState } from "./types";
import Select from "./components/Select/Select";

export default function App() {
  const dispatch = useDispatch();
  const counter: ButtonType = useSelector((s: GlobalState) => s.counter);

  useEffect(() => {
    if (counter.count === 20) {
      toast.info("You have reached counter value 20.", {
        theme: "colored",
      });
    }
  }, [counter.count]);

  return (
    <>
      <div className="app">
        <Select
          value={counter.increaseBy}
          onChange={(value: number) => dispatch(changeIncreaseByValue(value))}
        />
        <div className="btn-container">
          <Button className="danger" onSubmit={() => dispatch(decrement())}>
            -
          </Button>
          <div className="counter">{counter.count}</div>
          <Button className="success" onSubmit={() => dispatch(increment())}>
            +
          </Button>
        </div>
      </div>
    </>
  );
}
