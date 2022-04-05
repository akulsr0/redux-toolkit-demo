import * as React from "react";
import { useGetRandomBeerQuery } from "../services/random";

function RandomBeer() {
  const { isLoading, data, isError } = useGetRandomBeerQuery();

  if (isLoading) return "Loading...";
  if (isError) return "Error";
  return (
    <ul style={{ backgroundColor: "wheat", flex: 1 }}>
      {Object.entries(data).map(([k, v]) => (
        <li>
          <strong>{k}</strong>: ${v}
        </li>
      ))}
    </ul>
  );
}

export default RandomBeer;
