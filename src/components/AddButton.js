import * as React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../store/features/counter/counterSlice";

function AddButton() {
  const dispatch = useDispatch();

  function add() {
    dispatch(increment());
  }

  return (
    <div
      style={{ backgroundColor: "red", padding: 20, width: 100, marginTop: 10 }}
    >
      <button onClick={add}>Add</button>
    </div>
  );
}

export default AddButton;
