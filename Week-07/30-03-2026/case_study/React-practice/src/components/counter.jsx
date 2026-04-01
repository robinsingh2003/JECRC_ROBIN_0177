import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [lastAction, setLastAction] = useState("None");

  const increment = () => {
    setCount(count + step);
    setLastAction("Incremented by " + step);
  };

  const decrement = () => {
    setCount(count - step);
    setLastAction("Decremented by " + step);
  };

  const reset = () => {
    setCount(0);
    setStep(1);
    setLastAction("Reset to 0");
  };

  return (
    <div className="counter-card">
      <h1 className="title">Counter App</h1>

      <div className="count-display">{count}</div>

      <div className="step-box">
        <label>
          Step:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="step-input"
          />
        </label>
      </div>

      <div className="button-group">
        <button onClick={increment} className="btn increment">
          Increment
        </button>
        <button onClick={decrement} className="btn decrement">
          Decrement
        </button>
        <button onClick={reset} className="btn reset">
          Reset
        </button>
      </div>

      <p className="last-action">
        <strong>Last Action:</strong> {lastAction}
      </p>
    </div>
  );
}

export default Counter;