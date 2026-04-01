import React, { useState } from "react";
import "../styles/StateVsPropsDemo.css";

// This demo illustrates the difference between props and state in React.
// Props are read-only values passed from parent to child.
// State is mutable data managed within a component.

function DisplayCard({ title, value, onChange, parentStep }) {
    // Internal state: managed within this component
    const [internalCount, setInternalCount] = useState(0);

    return (
        <div className={`display-card ${value % 2 === 0 ? 'even' : 'odd'}`}>
            <h3 className="card-title">{title}</h3>
            <p className="value-display">Props Value from Parent: {value}</p>
            <p className="internal-count">Internal State Count: {internalCount}</p>
            <div className="card-buttons">
                <button className="card-btn secondary" onClick={() => setInternalCount(internalCount + 1)}>
                    Update Internal Count
                </button>
                <button className="card-btn" onClick={() => onChange(value + parentStep)}>
                    Increment Parent Count by {parentStep}
                </button>
            </div>
        </div>
    );
}
function StateVsPropsDemo() {
    // Parent state: managed here and passed as props to child
    const [parentCount, setParentCount] = useState(0);
    const [parentStep, setParentStep] = useState(1);
    const [displayColor, setDisplayColor] = useState("lightblue");

    const handleParentCountChange = (newCount) => {
        setParentCount(newCount);
        setDisplayColor(newCount % 2 === 0 ? "lightblue" : "lightcoral");
    };

    return (
        <div className="demo-container">
            <h2 className="demo-title">State vs Props Demo</h2>
            <div className="parent-controls">
                <div className="parent-info">
                    <div className="info-item">Parent Count: {parentCount}</div>
                    <div className="info-item">Parent Step: {parentStep}</div>
                </div>
                <div className="control-buttons">
                    <button className="control-btn" onClick={() => setParentStep(parentStep + 1)}>
                        Increase Step
                    </button>
                    <button className="control-btn" onClick={() => setDisplayColor(displayColor === 'lightblue' ? 'lightcoral' : 'lightblue')}>
                        Toggle Display Color
                    </button>
                    <button className="control-btn" onClick={() => { setParentCount(0); setParentStep(1); }}>
                        Reset All
                    </button>
                </div>
            </div>
            <DisplayCard
                title="Counter Card"
                value={parentCount}
                onChange={handleParentCountChange}
                parentStep={parentStep}
            />
        </div>
    );
}

export default StateVsPropsDemo;