import { useSelector } from "react-redux";
import ResetButton from "./components/ResetButton";
import AddButton from "./components/AddButton";
import SubButton from "./components/SubButton";
import ValueInput from "./components/ValueInput";
import RandomBeer from "./components/RandomBeer";
import RandomFood from "./components/RandomFood";

export default function App() {
  const { value } = useSelector((s) => s.counter);

  return (
    <div>
      <h1>Counter: {value || 0}</h1>
      <ResetButton />
      <AddButton />
      <SubButton />
      <ValueInput />
      {/* RTK Query */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <RandomBeer />
        <RandomFood />
      </div>
    </div>
  );
}
