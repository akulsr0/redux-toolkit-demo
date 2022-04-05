import * as React from "react";
import { useGetRandomFoodQuery } from "../services/random";

function RandomFood() {
  const { isLoading, isError, data } = useGetRandomFoodQuery();

  if (isLoading) return "Loading...";
  if (isError) return "Error";

  return (
    <ul style={{ backgroundColor: "yellowgreen", flex: 1 }}>
      {Object.entries(data).map(([k, v]) => (
        <li>
          {k}: {v}
        </li>
      ))}
    </ul>
  );
}

export default RandomFood;
