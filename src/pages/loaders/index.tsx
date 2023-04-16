import React, {useState} from "react";
import Loader from "../../components/Loader";
import Range from "../../components/Range";

export default function LoadersPage() {
  // State
  const [color, setColor] = useState("#ff0000");
  const [size, setSize] = useState(100);
  const [width, setWidth] = useState(10);
  const [spinsPerSecond, setSpinsPerSecond] = useState(1);

  // Render
  return (
    <div className="LoadersPage">
      <h2>Loader</h2>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Loader
          color={color}
          size={size}
          width={width}
          spinsPerSecond={spinsPerSecond}
        />
      </div>

      <hr />

      <h2>Loader controls</h2>
      <div
        className="field-wrapper"
        style={{
          userSelect: "text"
        }}
      >
        <div className="field-wrapper">
          <div className="label">Color: {color}</div>

          <input
            type="color"
            value={color}
            onChange={({target: {value}}) => setColor(value)}
          />
        </div>

        <div className="field-wrapper">
          <div className="label">Size: {size}</div>
          <Range
            values={[size]}
            onChange={([value]) => setSize(value)}
            min={10}
            max={300}
          />
        </div>

        <div className="field-wrapper">
          <div className="label">Width (stroke width): {width}</div>
          <Range
            values={[Math.min(width, size / 2)]}
            onChange={([value]) => setWidth(value)}
            min={1}
            max={size / 2}
          />
        </div>

        <div className="field-wrapper">
          <div className="label">
            Spins per second: {spinsPerSecond.toFixed(2)}
          </div>
          <Range
            values={[spinsPerSecond]}
            onChange={([value]) => setSpinsPerSecond(value)}
            min={0.1}
            max={5}
            step={0.1}
          />
        </div>
      </div>

      <hr />

      <h2>Code</h2>
      <div
        style={{
          userSelect: "text",
          whiteSpace: "nowrap",
          overflow: "auto",
          padding: "20px 0"
        }}
      >
        {`<Loader color={"${color}"} size={${size}} width={${width}} spinsPerSecond={${spinsPerSecond.toFixed(
          2
        )}} />`}
      </div>
    </div>
  );
}
