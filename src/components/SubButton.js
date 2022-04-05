import * as React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/features/counter/counterSlice";

function SubButton() {
  const dispatch = useDispatch();

  function sub() {
    dispatch(decrement());
  }

  return (
    <div
      style={{
        backgroundColor: "violet",
        padding: 20,
        width: 100,
        marginTop: 10
      }}
    >
      <button onClick={sub}>Sub</button>
    </div>
  );
}

export default SubButton;
