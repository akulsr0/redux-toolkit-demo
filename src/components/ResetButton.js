import * as React from "react";
import { useDispatch } from "react-redux";
import { reset } from "../store/features/counter/counterSlice";

function ResetButton() {
  const dispatch = useDispatch();

  function resetCounter() {
    dispatch(reset());
  }

  return (
    <div style={{ backgroundColor: "brown", padding: 20, width: 100 }}>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}

export default ResetButton;
