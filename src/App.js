import { useSelector } from "react-redux";
import ResetButton from "./components/ResetButton";
import AddButton from "./components/AddButton";
import SubButton from "./components/SubButton";
import ValueInput from "./components/ValueInput";

export default function App() {
  const { value } = useSelector((s) => s.counter);

  return (
    <div>
      <h1>Counter: {value || 0}</h1>
      <ResetButton />
      <AddButton />
      <SubButton />
      <ValueInput />
    </div>
  );
}
