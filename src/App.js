import "./App.scss";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index.js";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addBy = () => {
    dispatch(actions.addBy(10));
  };

  return (
    <div className="App">
      <h1>Counter App Using Redux Toolkit</h1>
      <h1>{counter}</h1>
      <div>
        <button className="btn_blue" onClick={increment}>
          Increment
        </button>
        <button className="btn_red" onClick={decrement}>
          Decrement
        </button>
      </div>
      <button className="btn_green" onClick={addBy}>
        Add Value 10
      </button>
    </div>
  );
}

export default App;
