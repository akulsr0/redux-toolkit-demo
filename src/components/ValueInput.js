import * as React from "react";
import { useDispatch } from "react-redux";
import { setValue } from "../store/features/counter/counterSlice";

function ValueInput() {
  const dispatch = useDispatch();

  function onChangeCounter(e) {
    dispatch(setValue({ value: e.target.value }));
  }

  return (
    <div
      style={{
        width: 200,
        backgroundColor: "tomato",
        marginTop: 10,
        padding: 20
      }}
    >
      <input onChange={onChangeCounter} type="number" />
    </div>
  );
}

export default ValueInput;
