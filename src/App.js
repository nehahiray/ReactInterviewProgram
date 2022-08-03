import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [colorValue, setData] = useState("");
  return (
    <div className="App">
      <div className="Innerdiv" style={{ backgroundColor: colorValue }}></div>
      <input
        style={{ marginTop: "5px" }}
        type="text"
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
}
