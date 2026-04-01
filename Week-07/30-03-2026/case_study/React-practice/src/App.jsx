import "./App.css";
import StateVsPropsDemo from "./components/StateVsPropsDemo";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div className="app">
      <StateVsPropsDemo />
      <TemperatureConverter />
    </div>
  );
}

export default App;